# Setup Guide

Quick setup instructions for getting the Tip Calculator app running on your machine.

## Prerequisites

### Required
- **Node.js** (v18 or later) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Recommended
- **Expo CLI** - Install globally: `npm install -g expo-cli`
- **Git** - For version control

### For iOS Development (Mac only)
- **Xcode** (latest version from App Store)
- **iOS Simulator** (comes with Xcode)
- **CocoaPods** - Install: `sudo gem install cocoapods`

### For Android Development
- **Android Studio** - [Download](https://developer.android.com/studio)
- **Android SDK** (comes with Android Studio)
- **Android Emulator** (set up through Android Studio)

### Alternative: Use Expo Go
- Install **Expo Go** app on your iOS or Android device
- No need for Xcode or Android Studio
- Scan QR code from terminal to run app

## Installation Steps

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd tip-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   If you encounter issues, try:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   - Press `i` in terminal for iOS Simulator
   - Press `a` for Android Emulator
   - Press `w` for web browser
   - Scan QR code with Expo Go app on your device

## Troubleshooting

### Common Issues

**Issue: Metro bundler won't start**
- Solution: Clear cache with `npm start -- --clear`

**Issue: Dependencies installation fails**
- Solution: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue: iOS Simulator not opening**
- Solution: Make sure Xcode is installed and Command Line Tools are set up: `xcode-select --install`

**Issue: Android Emulator not found**
- Solution: Make sure Android Studio is installed and ANDROID_HOME is set in your environment variables

**Issue: Expo Go can't connect**
- Solution: Make sure your device and computer are on the same Wi-Fi network

### Platform-Specific Setup

#### iOS (Mac only)
```bash
# Install CocoaPods if not already installed
sudo gem install cocoapods

# Navigate to ios folder (if it exists after running expo prebuild)
cd ios
pod install
cd ..
```

#### Android
1. Open Android Studio
2. Go to Tools → SDK Manager
3. Install Android SDK Platform 33 (or latest)
4. Set up an Android Virtual Device (AVD) in AVD Manager

### Environment Variables

No environment variables are required for basic development. The app works out of the box.

## Next Steps

- Read the [README.md](README.md) for usage instructions
- Check [CONTRIBUTING.md](CONTRIBUTING.md) if you want to contribute
- Explore the code in the `src/` directory

## Need Help?

- Check Expo documentation: https://docs.expo.dev/
- React Native docs: https://reactnative.dev/docs/getting-started
- Open an issue in the repository

Happy coding! 🚀

