# Cursor Guidelines

## Deprecated Elements
- **NEVER** use deprecated React Native components or APIs
- Always use the latest recommended alternatives:
  - Use `SafeAreaView` from `react-native-safe-area-context` instead of `react-native`'s deprecated `SafeAreaView`
  - **IMPORTANT**: When using `SafeAreaView` from `react-native-safe-area-context`, the app must be wrapped in `SafeAreaProvider` at the root level (typically in `App.tsx`)
  - Check React Native and Expo documentation for current best practices
  - When you see deprecation warnings, immediately replace with modern alternatives

## Code Quality
- Prefer TypeScript types over `any`
- Use functional components with hooks
- Follow React Native and Expo best practices
- Keep components modular and reusable

## Dependencies
- When using Expo, prefer Expo-managed packages when available
- Check if packages are compatible with the current Expo SDK version
- Use `react-native-safe-area-context` for safe area handling in modern React Native apps

## Component Structure
- **One export per component file**: Each component file should export only one component
- **File size limits**: Keep files under 200-300 lines of code. If a file grows beyond this, break it into smaller, focused files
- **Component organization**: Split large components into smaller sub-components or extract logic into custom hooks
- **Single Responsibility**: Each component should have a single, well-defined purpose

## Monorepo Best Practices
- **Shared packages**: Use `@just-one-job/*` packages for shared code (theme, utils, etc.)
- **Workspace dependencies**: Use `workspace:*` syntax for internal package dependencies
- **Bun compatibility**: Prefer `bun` and `bunx` commands over `npm` and `npx`
- **Path aliases**: Use TypeScript path mappings (`@just-one-job/*`) for imports from shared packages

## TypeScript Best Practices
- **Strict mode**: Always use TypeScript strict mode
- **Type definitions**: Define types in dedicated `types/` directories or co-located with components
- **Avoid `any`**: Use proper types or `unknown` when type is truly unknown
- **Interface vs Type**: Prefer `interface` for object shapes, use `type` for unions, intersections, and computed types

## React/React Native Best Practices
- **Hooks**: Use custom hooks to extract reusable logic
- **Memoization**: Use `React.memo`, `useMemo`, and `useCallback` judiciously (only when performance is actually needed)
- **Error boundaries**: Implement error boundaries for better error handling
- **Accessibility**: Include accessibility props (`accessibilityLabel`, `accessibilityRole`, etc.)
- **Performance**: Avoid unnecessary re-renders by properly managing state and props

## File Organization
- **Co-location**: Keep related files close together (components, hooks, types, tests)
- **Barrel exports**: Use `index.ts` files for clean imports from packages
- **Naming conventions**: Use PascalCase for components, camelCase for utilities and hooks
- **File extensions**: Use `.tsx` for React components, `.ts` for utilities and types

## Testing
- **Test location**: Place tests next to the code they test (e.g., `__tests__/` directories)
- **Test naming**: Use descriptive test names that explain what is being tested
- **Test coverage**: Aim for meaningful test coverage, especially for business logic

## Code Style
- **Consistent formatting**: Use Prettier for consistent code formatting
- **ESLint**: Follow ESLint rules and fix warnings
- **Comments**: Write self-documenting code; add comments only when necessary to explain "why", not "what"
- **Imports**: Organize imports: external packages first, then internal packages, then relative imports

