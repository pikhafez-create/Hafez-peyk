import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>پیک حافظ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },

  logo: {
    fontSize: 32,
    fontWeight: "700",
  },
});
