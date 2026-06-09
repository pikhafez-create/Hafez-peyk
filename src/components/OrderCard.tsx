import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";

export default function OrderCard({
  id,
  customer,
  pickup,
  destination,
}: {
  id: string;
  customer: string;
  pickup: string;
  destination: string;
}) {
  return (
    <Card>
      <Text style={styles.id}>
        سفارش #{id}
      </Text>

      <Text style={styles.item}>
        مشتری: {customer}
      </Text>

      <Text style={styles.item}>
        مبدا: {pickup}
      </Text>

      <Text style={styles.item}>
        مقصد: {destination}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  id: {
    textAlign: "right",
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 12,
  },

  item: {
    textAlign: "right",
    marginBottom: 8,
  },
});
