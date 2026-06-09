import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

type Props = {
  label: string;
  type?: "success" | "warning" | "danger" | "primary";
};

export default function StatusBadge({ label, type = "primary" }: Props) {
  return (
    <View style={[styles.badge, styles[type]]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  primary: {
    backgroundColor: colors.primary,
  },

  success: {
    backgroundColor: colors.success,
  },

  warning: {
    backgroundColor: colors.warning,
  },

  danger: {
    backgroundColor: colors.danger,
  },

  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
