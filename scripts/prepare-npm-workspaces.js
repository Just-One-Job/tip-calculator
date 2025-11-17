#!/usr/bin/env node

/**
 * This script converts workspace:* dependencies to file: paths
 * for npm compatibility in CI environments like Netlify.
 * 
 * npm doesn't support workspace:* protocol, so we convert it to
 * file: paths which work with npm workspaces.
 * 
 * This script only runs in CI environments or when explicitly called.
 */

const fs = require('fs');
const path = require('path');

const workspacePackages = {
  '@just-one-job/theme': '../../packages/theme',
  '@just-one-job/utils': '../../packages/utils',
};

// Check if we're actually using bun (not npm)
// Bun sets BUN_INSTALL=1 during install, or npm_execpath points to bun
// Key indicator: npm ALWAYS sets npm_config_user_config, bun does not
const isBunInstall = (
  process.env.BUN_INSTALL === '1' ||
  (process.env.npm_execpath && (
    process.env.npm_execpath.includes('bun') || 
    process.env.npm_execpath.endsWith('bun')
  )) ||
  // If npm_config_user_config is undefined, it's likely bun (npm always sets it)
  (process.env.npm_lifecycle_event === 'preinstall' && process.env.npm_config_user_config === undefined)
);

// Check if npm is explicitly running (npm ALWAYS sets npm_config_user_config)
const isNpmRunning = process.env.npm_config_user_config !== undefined;

// Skip conversion if:
// 1. It's a bun install (BUN_INSTALL=1, npm_execpath points to bun, or npm_config_user_config is undefined)
// 2. Not in CI
// 3. Not explicitly npm (npm sets npm_config_user_config)
if (isBunInstall && !process.env.CI && !process.env.NETLIFY && !isNpmRunning) {
  console.log('Skipping npm workspace conversion (using bun locally)');
  process.exit(0);
}

// Otherwise, we're using npm (or in CI), so convert workspace:* to file: paths
console.log('Converting workspace:* dependencies to file: paths for npm compatibility...');

function updatePackageJson(packageJsonPath) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  let modified = false;

  // Update dependencies
  if (packageJson.dependencies) {
    for (const [pkgName, filePath] of Object.entries(workspacePackages)) {
      if (packageJson.dependencies[pkgName] === 'workspace:*') {
        packageJson.dependencies[pkgName] = `file:${filePath}`;
        modified = true;
      }
    }
  }

  // Update devDependencies
  if (packageJson.devDependencies) {
    for (const [pkgName, filePath] of Object.entries(workspacePackages)) {
      if (packageJson.devDependencies[pkgName] === 'workspace:*') {
        packageJson.devDependencies[pkgName] = `file:${filePath}`;
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`✓ Updated ${packageJsonPath}`);
    return true;
  }

  return false;
}

// Update root package.json if needed
const rootPackageJson = path.join(__dirname, '..', 'package.json');
updatePackageJson(rootPackageJson);

// Update tip-calculator package.json
const tipCalculatorPackageJson = path.join(__dirname, '..', 'apps', 'tip-calculator', 'package.json');
updatePackageJson(tipCalculatorPackageJson);

console.log('✓ Workspace dependencies converted for npm compatibility');

