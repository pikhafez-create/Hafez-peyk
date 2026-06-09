import React from "react";
import Page from "../components/layout/Page";
import FAB from "../components/ui/FAB";
import EmptyState from "../components/ui/EmptyState";
import { View } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <Page title="خانه">
      <View style={{ flex: 1 }}>
        <EmptyState title="داشبورد آماده است" />
        <FAB onPress={() => router.push("/customer/create-order")} />
      </View>
    </Page>
  );
}
