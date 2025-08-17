"use client";

import type { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({
  className,
  ...rest
}: IInput) {

  return (
      <input
        {...rest}
        className={`w-full h-full outline-none bg-transparent ${className || ""}`}
      />

  );
}
