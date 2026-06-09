import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  label?: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder?: string;
};

export default function Input({ label, value, onChangeText, placeholder }: Props) {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
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
    gap: 6,
  },
  label: {
    fontSize: 12,
    color: colors.text.muted,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: colors.text.main,
  },
});
