# Netlify Deployment Guide

This monorepo uses Bun's `workspace:*` protocol for workspace dependencies, which is not supported by npm (used by Netlify). This guide explains how deployment works.

## How It Works

1. **Local Development**: Uses Bun with `workspace:*` protocol
2. **Netlify CI**: Automatically converts `workspace:*` to `file:` paths for npm compatibility

## Build Process

The build process on Netlify:

1. Runs `prepare:npm` script which converts `workspace:*` to `file:` paths
2. Installs dependencies using npm workspaces
3. Builds the tip-calculator app
4. Publishes the `apps/tip-calculator/dist` directory

## Configuration

### netlify.toml

The `netlify.toml` file configures:
- Build command: `npm run build:netlify:tip`
- Publish directory: `apps/tip-calculator/dist`
- Node.js version: 22

### Scripts

- `prepare:npm`: Converts workspace dependencies for npm compatibility
- `build:netlify:tip`: Full build process for Netlify

## Adding New Apps

When adding a new app that needs to be deployed:

1. Add a new build script in root `package.json`:
   ```json
   "build:netlify:new-app": "npm run prepare:npm && npm install && cd apps/new-app && npm run build:web"
   ```

2. Create a new Netlify site or update `netlify.toml` with app-specific settings

## Troubleshooting

### Build fails with "workspace:*" error

- Make sure `prepare:npm` script runs before `npm install`
- Check that `NETLIFY=true` environment variable is set (automatically set by Netlify)

### Dependencies not found

- Ensure all workspace packages are listed in `scripts/prepare-npm-workspaces.js`
- Verify package paths are correct relative to the app directory

