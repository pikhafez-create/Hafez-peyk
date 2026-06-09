import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function Screen({ children }: { children: React.ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
