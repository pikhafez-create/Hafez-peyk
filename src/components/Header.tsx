import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 14,
    borderBottomWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  text: {
    color: colors.text.main,
    fontSize: 16,
    fontWeight: "700",
  },
});
