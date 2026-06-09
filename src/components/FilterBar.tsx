import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function FilterBar() {
  return (
    <View style={styles.row}>
      <Pressable style={styles.active}>
        <Text style={styles.activeText}>همه</Text>
      </Pressable>

      <Pressable style={styles.item}>
        <Text>فعال</Text>
      </Pressable>

      <Pressable style={styles.item}>
        <Text>تکمیل شده</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row-reverse",
    marginBottom: 16,
  },

  item: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginLeft: 8,
  },

  active: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginLeft: 8,
  },

  activeText: {
    color: "#fff",
  },
});
