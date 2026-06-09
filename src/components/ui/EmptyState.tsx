import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  title: string;
  description?: string;
};

export default function EmptyState({ title, description }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.desc}>{description}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: colors.text.main,
    fontSize: 14,
    fontWeight: "700",
  },
  desc: {
    marginTop: 6,
    color: colors.text.muted,
    fontSize: 12,
  },
});
