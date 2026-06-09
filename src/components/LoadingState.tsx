import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function LoadingState() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },

  box: {
    height: 80,
    borderRadius: 12,
    backgroundColor: colors.border,
    marginBottom: 12,
  },
});
