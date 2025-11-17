import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@just-one-job/theme';
import { TipCalculatorScreen } from './src/screens/TipCalculatorScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider storageKey="@tip_calculator_theme">
        <TipCalculatorScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
