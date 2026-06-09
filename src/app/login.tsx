import React from "react";
import Page from "../components/layout/Page";
import Button from "../components/ui/Button";
import { View } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <Page title="ورود">
      <View style={{ padding: 16 }}>
        <Button title="ورود تستی" onPress={() => router.replace("/")} />
      </View>
    </Page>
  );
}
