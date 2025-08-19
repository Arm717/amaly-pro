"use client";

import { ReactNode } from "react";
import { ProductProvider } from "../context/useProductContext";

export function Providers({ children }: { children: ReactNode }) {
  return <ProductProvider>{children}</ProductProvider>;
}
