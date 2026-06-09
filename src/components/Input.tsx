import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function Input({ value, onChangeText, placeholder }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.muted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.sm,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    borderRadius: 8,
    fontSize: 16,
    color: colors.text.primary,
    backgroundColor: colors.card,
  },
});
