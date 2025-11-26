import { spacing, useTheme } from '@just-one-job/theme';
import { triggerHaptic } from '@just-one-job/utils';
import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

interface TipPercentageSelectorProps {
  value: number;
  onChange: (percent: number) => void;
}

const PRESET_PERCENTAGES = [15, 18, 20, 22];

export const TipPercentageSelector: React.FC<TipPercentageSelectorProps> = ({
  value,
  onChange,
}) => {
  const { width } = useWindowDimensions();
  const isSmallDevice = width < 421;

  const { colors } = useTheme();
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customValue, setCustomValue] = useState('');

  const handlePresetPress = (percent: number) => {
    triggerHaptic('light');
    onChange(percent);
  };

  const handleCustomPress = () => {
    triggerHaptic('light');
    setCustomValue(value.toString());
    setShowCustomModal(true);
  };

  const handleCustomSubmit = () => {
    const numericValue = parseFloat(customValue);
    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 500) {
      triggerHaptic('success');
      onChange(numericValue);
      setShowCustomModal(false);
      setCustomValue('');
    }
  };

  const isPresetSelected = PRESET_PERCENTAGES.includes(value);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          { color: colors.text },
          isSmallDevice && styles.labelSmall,
        ]}
      >
        Tip Percentage
      </Text>
      <View style={styles.buttonContainer}>
        {PRESET_PERCENTAGES.map((percent) => (
          <TouchableOpacity
            key={percent}
            style={[
              isSmallDevice ? styles.buttonSmall : styles.button,
              { backgroundColor: colors.surface, borderColor: colors.border },
              value === percent && { backgroundColor: colors.primary, borderColor: colors.primary },
            ]}
            onPress={() => handlePresetPress(percent)}
          >
            <Text
              style={[
                styles.buttonText,
                { color: colors.text },
                isSmallDevice && styles.buttonTextSmall,
                value === percent && { color: colors.surface },
              ]}
            >
              {percent}%
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[
            isSmallDevice ? styles.buttonSmall : styles.button,
            { backgroundColor: colors.surface, borderColor: colors.border },
            !isPresetSelected && { backgroundColor: colors.primary, borderColor: colors.primary },
          ]}
          onPress={handleCustomPress}
        >
          <Text
            style={[
              styles.buttonText,
              { color: colors.text },
              isSmallDevice && styles.buttonTextSmall,
              !isPresetSelected && { color: colors.surface },
            ]}
          >
            Custom
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showCustomModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowCustomModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Enter Custom Tip %</Text>
            <TextInput
              style={[styles.modalInput, { borderColor: colors.border, color: colors.text }]}
              value={customValue}
              onChangeText={(text) => {
                // Allow numbers and one decimal point, max 500
                const numericText = text.replace(/[^0-9.]/g, '');
                const parts = numericText.split('.');
                // Prevent multiple decimals
                const cleaned = parts.length > 2
                  ? parts[0] + '.' + parts.slice(1).join('')
                  : numericText;
                // Limit to 500
                const numValue = parseFloat(cleaned);
                if (isNaN(numValue) || numValue <= 500) {
                  setCustomValue(cleaned);
                }
              }}
              placeholder="15.5"
              placeholderTextColor={colors.textSecondary}
              keyboardType="decimal-pad"
              autoFocus
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.background }]}
                onPress={() => {
                  triggerHaptic('light');
                  setShowCustomModal(false);
                }}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.primary }]}
                onPress={handleCustomSubmit}
              >
                <Text
                  style={[
                    styles.modalButtonText,
                    { color: colors.surface },
                  ]}
                >
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  labelSmall: {
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  button: {
    flex: 1,
    minWidth: 80,
    borderRadius: 12,
    paddingHorizontal: spacing.md - 2,
    paddingVertical: spacing.md - 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    height: 54,
  },
  buttonSmall: {
    flex: 1,
    minWidth: 72,
    borderRadius: 12,
    paddingHorizontal: spacing.md - 4,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    height: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSmall: {
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    borderRadius: 16,
    padding: spacing.lg,
    width: '80%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  modalInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: spacing.md,
    fontSize: 18,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  modalButton: {
    flex: 1,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
