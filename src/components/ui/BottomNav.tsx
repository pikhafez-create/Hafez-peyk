import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";
import { ROUTES } from "../layout/RouteConfig";
import TabBarBadge from "./TabBarBadge";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { label: "خانه", route: ROUTES.home, icon: "home-outline", activeIcon: "home", badge: 0 },
    { label: "سفارش", route: ROUTES.createOrder, icon: "add-outline", activeIcon: "add", badge: 0 },
    { label: "لیست", route: ROUTES.orders, icon: "list-outline", activeIcon: "list", badge: 3 },
    { label: "نقشه", route: ROUTES.map, icon: "map-outline", activeIcon: "map", badge: 0 },
    { label: "پروفایل", route: ROUTES.profile, icon: "person-outline", activeIcon: "person", badge: 0 },
  ];

  return (
    <View style={styles.container}>
      {items.map((item) => {
        const active = pathname === item.route;

        return (
          <Pressable
            key={item.route}
            onPress={() => router.replace(item.route)}
            style={styles.item}
          >
            <View>
              <Ionicons
                name={active ? item.activeIcon : item.icon}
                size={22}
                color={active ? colors.primary : colors.text.muted}
              />
              <TabBarBadge count={item.badge} />
            </View>

            <Text style={[styles.text, active && styles.activeText]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderColor: colors.border,
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  text: {
    fontSize: 11,
    color: colors.text.muted,
  },
  activeText: {
    color: colors.primary,
    fontWeight: "700",
  },
});
