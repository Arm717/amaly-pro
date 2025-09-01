"use client";
import ButtonVector from "@/components/button/button-vector/ButtonVector";
import FormInput from "@/components/input/form-input/FormInput";
import React, { useState, useTransition } from "react";
import Link from "next/link";
import { loginAction } from "../actions/loginAction";
import { ILoginActionData } from "../actions/types/types";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/useAuthContext";

function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  
  return (
    <form
      action={(formData) => {
        startTransition(async () => {
          const res: ILoginActionData = await loginAction(formData);
          
          if (res.success) {
            login(res.data)
            redirect("/personal-information");
          } else {
            setError(res.message);

            console.error("Login failed:", res.message);
          }
        });
      }}
    >
      <FormInput
        type="email"
        name="email"
        label="Эл. Адрес"
        variantForm="custom"
      />
      <FormInput
        type="password"
        name="password"
        label="Пароль"
        variantForm="password"
      />

      {error && <div className="text-red-500 mt-2 text-center">{error}</div>}

      <div className="flex w-full justify-center mt-[24px] mb-3">
        <ButtonVector
          type="submit"
          as="span"
          text={isPending ? "Входим..." : "Войти"}
          variant="bigFormVector"
        />
      </div>

      <div className="flex justify-between">
        <Link className="text-[var(--grey)]" href="/recover-password">
          Забыли пароль?
        </Link>
        <Link className="text-[var(--grey)]" href="/register">
          Зарегистрироваться
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
