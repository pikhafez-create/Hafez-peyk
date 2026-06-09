import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import Card from "./Card";
import { colors } from "../theme/colors";

export default function ProfileCard({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <Card>
      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.role}>
        {role}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  name: {
    textAlign: "right",
    fontSize: 22,
    fontWeight: "800",
    color: colors.text.primary,
  },

  role: {
    textAlign: "right",
    marginTop: 8,
    color: colors.text.secondary,
  },
});
