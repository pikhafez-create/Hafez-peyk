import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Item = {
  label: string;
  value: string;
};

type Props = {
  items: Item[];
  value: string;
  onChange: (v: string) => void;
};

export default function RadioGroup({ items, value, onChange }: Props) {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        const active = item.value === value;

        return (
          <Pressable
            key={item.value}
            onPress={() => onChange(item.value)}
            style={styles.item}
          >
            <View style={[styles.circle, active && styles.activeCircle]} />
            <Text style={styles.text}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  item: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.border,
  },
  activeCircle: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    color: colors.text.main,
    fontSize: 13,
  },
});
