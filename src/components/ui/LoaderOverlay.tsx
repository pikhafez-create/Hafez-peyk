import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function LoaderOverlay() {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
});
