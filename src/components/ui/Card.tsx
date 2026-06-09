import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 12,
  },
});
