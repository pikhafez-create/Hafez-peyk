import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "./Screen";
import Header from "../Header";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Page({ title, children }: Props) {
  return (
    <Screen>
      <Header title={title} />
      <View style={styles.body}>{children}</View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
