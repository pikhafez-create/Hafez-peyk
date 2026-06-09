import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  label: string;
  variant?: "success" | "warning" | "error";
};

export default function Badge({ label, variant = "success" }: Props) {
  return (
    <View style={[styles.base, styles[variant]]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  success: { backgroundColor: colors.primary },
  warning: { backgroundColor: "#f59e0b" },
  error: { backgroundColor: "#ef4444" },
  text: {
    color: "#fff",
    fontSize: 11,
  },
});
