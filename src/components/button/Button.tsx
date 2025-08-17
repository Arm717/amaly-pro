"use client";
import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "custom" | "icon" | "headerNavBtn" | "card";
}

const BUTTON_VARIANT = {
  custom: "",
  icon: "",
  headerNavBtn: "flex text-black gap-2 items-center",
  card: "flex text-black gap-2 items-center z-20",
} as const;

export default function Button({
  onClick,
  variant,
  children,
  ...reset
}: IButton) {
  return (
    <button
      onClick={onClick}
      className={`${BUTTON_VARIANT[variant]}`}
      {...reset}
    >
      {children}
    </button>
  );
}
