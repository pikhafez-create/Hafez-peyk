import React from "react";
import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

export default function Button({ title, onPress, loading }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "700",
  },
});
