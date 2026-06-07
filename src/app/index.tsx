import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { getUser } from "../utils/auth";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const user = await getUser();

      if (!user) {
        router.replace("/(auth)/login");
        return;
      }

      if (user.role === "admin") router.replace("/admin/orders");
      if (user.role === "driver") router.replace("/driver");
      if (user.role === "customer") router.replace("/customer/create-order");
    };

    check();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>در حال بررسی ورود...</Text>
    </View>
  );
}
