import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  count: number;
};

export default function TabBarBadge({ count }: Props) {
  if (!count) return null;

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{count > 99 ? "99+" : count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -4,
    right: -10,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 18,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
});
