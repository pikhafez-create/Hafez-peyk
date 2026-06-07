import { View, Text, Pressable } from "react-native";
import { setUser } from "../../utils/auth";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const loginAs = async (role) => {
    await setUser({
      id: role === "driver" ? "d1" : role,
      name:
        role === "admin"
          ? "مدیر"
          : role === "driver"
          ? "راننده"
          : "مشتری",
      role
    });

    router.replace("/");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        ورود به سیستم
      </Text>

      <Pressable onPress={() => loginAs("admin")}>
        <Text>ورود مدیر</Text>
      </Pressable>

      <Pressable onPress={() => loginAs("driver")}>
        <Text>ورود راننده</Text>
      </Pressable>

      <Pressable onPress={() => loginAs("customer")}>
        <Text>ورود مشتری</Text>
      </Pressable>
    </View>
  );
}
