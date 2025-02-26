"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const openRoutes = [
  "/login",
  "/signup",
  "/forgot-password",
  "/set-password",
  "/verify-email",
  "/complete-account-details",
];

export const IsLoggedIn = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthRoute = openRoutes.includes(pathname);

  useEffect(() => {
    if (window && window.localStorage) {
      const token = window.localStorage.getItem("token");
      if (!token) {
        router.push(`/login`);
      } else {
        router.push(pathname);
      }
      if (!token && !isAuthRoute) {
        router.push(`/login`);
      } else {
        router.push(pathname);
      }
    }
  }, [pathname, router]);

  return null;
};
