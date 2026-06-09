import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

type Props = {
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
};

export default function FAB({ onPress, icon = "add" }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.fab}>
      <Ionicons name={icon} size={24} color="#fff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 90,
    right: 16,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
