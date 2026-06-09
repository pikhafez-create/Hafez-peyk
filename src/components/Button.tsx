import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

type Props = {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "success" | "danger";
};

export default function Button({ title, onPress, variant = "primary" }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles[variant]]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
    alignItems: "center",
  },

  primary: {
    backgroundColor: colors.primary,
  },

  success: {
    backgroundColor: colors.success,
  },

  danger: {
    backgroundColor: colors.danger,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
