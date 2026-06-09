import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  progress: number; // 0 - 1
};

export default function ProgressBar({ progress }: Props) {
  const width = Math.max(0, Math.min(progress, 1)) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${width}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 6,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    backgroundColor: colors.primary,
  },
});
