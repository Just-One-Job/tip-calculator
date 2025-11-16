# Tip Calculator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A super clean, one-screen Tip Calculator app built with React Native and Expo. This is a "Just One Job" app—focused, simple, and polished.

## ✨ Features

### Core Functionality
- **Bill Amount Input** - Numeric keypad with real-time validation
- **Tip Percentage Selector** - Quick presets or custom percentage
- **Split Bill** - Divide the total between 1-10+ people
- **Real-time Calculations** - Instant updates as you input values
- **Summary Display** - Shows tip amount, total with tip, and per-person total

### User Experience
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 💾 **Persistent Preferences** - Remembers your last used tip percentage and split count
- 📳 **Haptic Feedback** - Tactile feedback on all button presses
- 📱 **Thumb-Friendly** - Large, easy-to-tap buttons optimized for mobile use
- ⚡ **Lightweight** - Fast launch time, no bloat

### Design Philosophy
- **No ads, no tracking, no analytics** - Privacy-first
- **No settings screen** - Everything you need is on one screen
- **No upsells** - Just a calculator that works
- **Super legible typography** - Easy to read in any lighting

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- Expo CLI (optional, but recommended)
- iOS Simulator (for Mac) or Android Emulator, or Expo Go app on your device

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tip-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your platform**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your device
   - Press `w` for web browser

## 📱 Usage

1. **Enter Bill Amount**: Tap the numeric keypad to enter your bill amount
2. **Select Tip Percentage**: Choose a preset percentage or tap "Custom" to enter your own
3. **Split Bill** (optional): Use the +/- buttons to split the bill between multiple people
4. **View Summary**: See the tip amount, total with tip, and per-person amount (if split)

### Tips
- Long-press the backspace button to clear the entire bill amount
- Your tip percentage and split count preferences are automatically saved
- Toggle dark mode using the switch in the top-right corner

## 🏗️ Project Structure

```
tip-calculator/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── BillInput.tsx
│   │   ├── TipPercentageSelector.tsx
│   │   ├── SplitSelector.tsx
│   │   ├── ResultSummary.tsx
│   │   └── ThemeToggle.tsx
│   ├── screens/             # Screen components
│   │   └── TipCalculatorScreen.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── useTipCalculator.ts
│   ├── theme/               # Theme configuration
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   └── ThemeContext.tsx
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   └── utils/               # Utility functions
│       └── haptics.ts
├── assets/                  # Images and icons
├── App.tsx                  # Root component
├── index.ts                 # Entry point
└── package.json
```

## 🛠️ Tech Stack

- **React Native** (0.81.5) - Mobile framework
- **Expo** (~54.0.23) - Development platform
- **TypeScript** (~5.9.2) - Type safety
- **React** (19.1.0) - UI library
- **React Native Safe Area Context** - Safe area handling
- **AsyncStorage** - Local data persistence
- **Expo Haptics** - Haptic feedback

## 🎨 Design Principles

1. **One Screen, One Purpose** - Everything you need is visible and accessible
2. **No Distractions** - No ads, tracking, or unnecessary features
3. **Fast & Responsive** - Instant calculations and smooth interactions
4. **Accessible** - Large touch targets, clear typography, dark mode support
5. **Privacy First** - No data collection, everything stored locally

## 🔧 Development

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser

### Code Style

- TypeScript with strict mode enabled
- Functional components with hooks
- Consistent spacing and color theming
- Component-based architecture

### Adding Features

The codebase is structured to be easily extensible:
- Add new components in `src/components/`
- Create custom hooks in `src/hooks/`
- Extend theme in `src/theme/`
- Add utilities in `src/utils/`

## 📦 Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

Or use EAS Build (recommended):
```bash
npm install -g eas-cli
eas build --platform ios
eas build --platform android
```

## 🤝 Contributing

This is a "Just One Job" app—focused and minimal. Contributions that maintain this philosophy are welcome:

1. Keep it simple
2. No feature bloat
3. Maintain privacy (no tracking/analytics)
4. Preserve the one-screen experience

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with the "Just One Job" philosophy—one app, one purpose, no BS.

---

**Made with ❤️ for people who just want to calculate tips quickly and accurately.**
