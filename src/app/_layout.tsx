import { Stack, useRouter, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { getUser } from "../utils/auth";

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const check = async () => {
      const user = await getUser();

      if (!user && pathname !== "/(auth)/login") {
        router.replace("/(auth)/login");
      }

      if (user) {
        if (pathname === "/(auth)/login") {
          router.replace("/");
        }
      }

      setChecked(true);
    };

    check();
  }, []);

  if (!checked) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
