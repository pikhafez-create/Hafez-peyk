import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function ScreenHeader({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text.main,
  },
});
