"use client";

import { ReactNode } from "react";
import { ProductProvider } from "../context/useProductContext";
import { AuthProvider } from "@/context/useAuthContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ProductProvider>
        {children}
      </ProductProvider>
    </AuthProvider>
  );
}
