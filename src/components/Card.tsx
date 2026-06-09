import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: spacing.sm,
  },
});
