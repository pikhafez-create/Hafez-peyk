import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function SearchBar({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="جستجو..."
        placeholderTextColor={colors.text.muted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    textAlign: "right",
  },
});
