import React from "react";
import { View, StyleSheet } from "react-native";
import { usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNav from "../ui/BottomNav";
import NavigationGuard from "./NavigationGuard";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNav =
    pathname.startsWith("/login") ||
    pathname.startsWith("/(auth)");

  return (
    <SafeAreaView style={styles.safe}>
      <NavigationGuard>
        <View style={styles.container}>
          <View style={styles.content}>{children}</View>
          {!hideNav && <BottomNav />}
        </View>
      </NavigationGuard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
