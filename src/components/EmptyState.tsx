import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function EmptyState({
  title,
}: {
  title: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📦</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: "center",
  },

  icon: {
    fontSize: 48,
  },

  title: {
    marginTop: 12,
    fontSize: 16,
    color: colors.text.secondary,
  },
});
