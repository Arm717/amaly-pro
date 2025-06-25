"use client";
import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | "icon"
    | "headerNavBtn"
}

const BUTTON_VARIANT = {
  icon: "",
  headerNavBtn: ' text-black',
 
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
      className={`${BUTTON_VARIANT[variant]} button`}
      {...reset}
    >
      {children}
    </button>
  );
}

