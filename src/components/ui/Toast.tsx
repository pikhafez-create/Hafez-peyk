import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  visible: boolean;
  message: string;
  onHide: () => void;
};

export default function Toast({ visible, message, onHide }: Props) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onHide, 2000);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.toast}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "#e5e7eb",
    fontSize: 12,
  },
});
