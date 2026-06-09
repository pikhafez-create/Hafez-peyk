import React from "react";
import { View, Text } from "react-native";
import LoaderOverlay from "./LoaderOverlay";

type Props = {
  loading?: boolean;
  empty?: boolean;
  children: React.ReactNode;
};

export default function StateView({ loading, empty, children }: Props) {
  if (loading) return <LoaderOverlay />;

  if (empty) {
    return (
      <View style={{ padding: 20, alignItems: "center" }}>
        <Text>موردی یافت نشد</Text>
      </View>
    );
  }

  return <>{children}</>;
}
