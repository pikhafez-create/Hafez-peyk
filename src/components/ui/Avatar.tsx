import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  name: string;
  size?: number;
};

export default function Avatar({ name, size = 44 }: Props) {
  const initial = name?.charAt(0) ?? "?";

  return (
    <View style={[styles.base, { width: size, height: size, borderRadius: size / 2 }]}>
      <Text style={styles.text}>{initial}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "700",
  },
});
