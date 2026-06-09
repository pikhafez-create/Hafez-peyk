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

export default function SegmentedControl({ items, value, onChange }: Props) {
  return (
    <View style={styles.container}>
      {items.map((i) => {
        const active = i.value === value;

        return (
          <Pressable
            key={i.value}
            onPress={() => onChange(i.value)}
            style={[styles.item, active && styles.active]}
          >
            <Text style={[styles.text, active && styles.textActive]}>
              {i.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    overflow: "hidden",
  },
  item: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    backgroundColor: colors.card,
  },
  active: {
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.text.muted,
    fontSize: 12,
  },
  textActive: {
    color: "#fff",
    fontWeight: "700",
  },
});
