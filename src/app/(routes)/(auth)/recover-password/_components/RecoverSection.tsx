"use client";
import Title from "@/components/title/Title";
import React from "react";
import RecoverForm from "./RecoverForm";

function RecoverSection() {
  return (
    <div
      className="w-full font-firaGo max-w-[700px] 
        mx-auto my-16 
        px-10 py-12 
        shadow-[0_2px_16px_0_rgba(163,163,163,0.3)] 
      bg-white 
        rounded-[10px]"
    >
      <Title
        className="text-center font-bold text-[32px] mb-8"
        as="h1"
        value="Восстановить пароль"
      />

      <RecoverForm />
    </div>
  );
}

export default RecoverSection;
