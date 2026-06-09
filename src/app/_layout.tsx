import React from "react";
import { Stack } from "expo-router";
import ThemeProvider from "../components/layout/ThemeProvider";
import AppShell from "../components/layout/AppShell";
import { AuthProvider } from "../context/AuthContext";

export default function Layout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppShell>
          <Stack screenOptions={{ headerShown: false }} />
        </AppShell>
      </ThemeProvider>
    </AuthProvider>
  );
}
