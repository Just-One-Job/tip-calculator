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

// Check if we're in CI or using npm
const isCI = process.env.CI === 'true' || process.env.NETLIFY === 'true';
const isNpm = process.env.npm_execpath && process.env.npm_execpath.includes('npm');

// Only convert if in CI or using npm
if (!isCI && !isNpm) {
  console.log('Skipping npm workspace conversion (using bun locally)');
  process.exit(0);
}

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

