import React, { useEffect } from "react";
import { usePathname, useRouter } from "expo-router";

const publicRoutes = ["/login"];

export default function NavigationGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const isPublic = publicRoutes.includes(pathname);

  useEffect(() => {
    const isAuthenticated = true;

    if (!isAuthenticated && !isPublic) {
      router.replace("/login");
    }
  }, [pathname]);

  return <>{children}</>;
}
