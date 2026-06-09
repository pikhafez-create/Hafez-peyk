import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";
import { colors } from "../theme/colors";

export default function DashboardCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  value: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.primary,
  },

  label: {
    marginTop: 6,
    fontSize: 14,
  },
});
