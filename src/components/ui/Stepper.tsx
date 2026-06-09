import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Step = {
  label: string;
};

type Props = {
  steps: Step[];
  current: number;
};

export default function Stepper({ steps, current }: Props) {
  return (
    <View style={styles.container}>
      {steps.map((s, i) => {
        const active = i <= current;

        return (
          <View key={i} style={styles.step}>
            <View style={[styles.circle, active && styles.activeCircle]}>
              <Text style={styles.num}>{i + 1}</Text>
            </View>
            <Text style={[styles.label, active && styles.activeLabel]}>
              {s.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  step: {
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  activeCircle: {
    backgroundColor: colors.primary,
  },
  num: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
  label: {
    fontSize: 10,
    color: colors.text.muted,
  },
  activeLabel: {
    color: colors.text.main,
    fontWeight: "600",
  },
});
