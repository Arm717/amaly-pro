"use client";

import { ReactNode } from "react";
import { ProductProvider } from "../context/useProductContext";
import { AuthProvider } from "@/context/useAuthContext";
import { ConfigProvider } from "antd";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider>
      <AuthProvider>
        <ProductProvider>{children}</ProductProvider>
      </AuthProvider>
    </ConfigProvider>
  );
}
