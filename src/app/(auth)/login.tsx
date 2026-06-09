import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/ui/Logo";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

type Role = "admin" | "driver" | "customer";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<Role>("customer");

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Logo />

        <Text style={styles.title}>پیک حافظ</Text>

        <Text style={styles.subtitle}>
          سامانه هوشمند مدیریت سفارش و حمل‌ونقل
        </Text>

        <Card>
          <Text style={styles.sectionTitle}>
            انتخاب نقش
          </Text>

          <View style={styles.roles}>
            <TouchableOpacity
              style={[
                styles.roleButton,
                role === "admin" && styles.roleActive,
              ]}
              onPress={() => setRole("admin")}
            >
              <Text
                style={[
                  styles.roleText,
                  role === "admin" && styles.roleTextActive,
                ]}
              >
                مدیر
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.roleButton,
                role === "driver" && styles.roleActive,
              ]}
              onPress={() => setRole("driver")}
            >
              <Text
                style={[
                  styles.roleText,
                  role === "driver" && styles.roleTextActive,
                ]}
              >
                راننده
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.roleButton,
                role === "customer" && styles.roleActive,
              ]}
              onPress={() => setRole("customer")}
            >
              <Text
                style={[
                  styles.roleText,
                  role === "customer" && styles.roleTextActive,
                ]}
              >
                مشتری
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>
            شماره موبایل
          </Text>

          <Input
            value={phone}
            onChangeText={setPhone}
            placeholder="09xxxxxxxxx"
          />

          <View style={{ marginTop: spacing.lg }}>
            <Button
              title="ورود به سامانه"
              onPress={() => {}}
            />
          </View>
        </Card>

        <Text style={styles.version}>
          Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: spacing.lg,
  },

  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "800",
    color: colors.primary,
    marginTop: spacing.sm,
  },

  subtitle: {
    textAlign: "center",
    color: colors.text.secondary,
    marginBottom: spacing.xl,
    marginTop: spacing.sm,
    fontSize: 14,
  },

  sectionTitle: {
    textAlign: "right",
    marginBottom: spacing.sm,
    fontSize: 15,
    fontWeight: "700",
    color: colors.text.primary,
  },

  roles: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },

  roleButton: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  roleActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  roleText: {
    color: colors.text.primary,
    fontWeight: "600",
  },

  roleTextActive: {
    color: "#fff",
  },

  version: {
    textAlign: "center",
    marginTop: spacing.xl,
    color: colors.text.muted,
    fontSize: 12,
  },
});
