import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

type Props = {
  value: string;
  onChangeText: (v: string) => void;
  placeholder?: string;
};

export default function SearchInput({ value, onChangeText, placeholder }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color={colors.text.muted} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.muted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: colors.text.main,
    fontSize: 13,
  },
});
