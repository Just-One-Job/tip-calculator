# Netlify Deployment Guide

This monorepo uses Bun's `workspace:*` protocol for workspace dependencies, which is not supported by npm (used by Netlify). This guide explains how deployment works.

## How It Works

1. **Local Development**: Uses Bun with `workspace:*` protocol
2. **Netlify CI**: Automatically converts `workspace:*` to `file:` paths for npm compatibility

## Build Process

The build process on Netlify:

1. **Automatic `preinstall` hook**: Before `npm install` runs, the `preinstall` script automatically converts `workspace:*` to `file:` paths
2. **Dependency installation**: Netlify runs `npm install` at the root (monorepo-aware)
3. **Build**: Runs `npm --workspace=apps/tip-calculator run build:web` to build the app
4. **Publish**: Publishes the `apps/tip-calculator/dist` directory

## Configuration

### netlify.toml

The `netlify.toml` file configures:
- Build command: `npm run build:netlify:tip`
- Publish directory: `apps/tip-calculator/dist`
- Node.js version: 22

### Scripts

- `preinstall`: Automatically runs before `npm install` to convert workspace dependencies (only when using npm, skips when using bun)
- `build:netlify:tip`: Builds the tip-calculator app using npm workspaces

## Adding New Apps

When adding a new app that needs to be deployed:

1. Add a new build script in root `package.json`:
   ```json
   "build:netlify:new-app": "npm run prepare:npm && npm install && cd apps/new-app && npm run build:web"
   ```

2. Create a new Netlify site or update `netlify.toml` with app-specific settings

## Local npm Usage

If you need to use `npm install` locally (instead of `bun install`), you must convert the workspace dependencies first:

```bash
npm run prepare:npm && npm install
```

Or use the convenience script:

```bash
npm run install:npm
```

**Note**: The `preinstall` hook doesn't run early enough for npm to parse workspace dependencies, so manual conversion is required for local npm usage. This is automatic on Netlify CI.

## Troubleshooting

### Build fails with "workspace:*" error

- Make sure `prepare:npm` script runs before `npm install`
- Check that `NETLIFY=true` environment variable is set (automatically set by Netlify)
- For local npm usage, run `npm run prepare:npm` first

### Dependencies not found

- Ensure all workspace packages are listed in `scripts/prepare-npm-workspaces.js`
- Verify package paths are correct relative to the app directory

### Can't run `npm install` locally

- Use `bun install` instead (recommended for local development)
- Or run `npm run install:npm` which converts dependencies first
- Or manually run `npm run prepare:npm && npm install`

