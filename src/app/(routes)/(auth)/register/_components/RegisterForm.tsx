import ButtonVector from "@/components/button/button-vector/ButtonVector";
import FormInput from "@/components/input/form-input/FormInput";
import Input from "@/components/input/Input";
import Text from "@/components/text/Text";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { IRegisterActionData } from "../actions/types/types";
import { registerAction } from "../actions/RegisterAction";
import { useAuth } from "@/context/useAuthContext";
import { redirect } from "next/navigation";

function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      action={(formData) => {
        startTransition(async () => {
          const res: IRegisterActionData = await registerAction(formData);

          if (res.success) {
            login(res.data);
            redirect("/personal-information");
          } else {
            setError(res.message);

            console.error("Login failed:", res.message);
          }
        });
      }}
    >
      <FormInput type="text" name="FIO" label="ФИО" variantForm="custom" />

      <FormInput
        type="email"
        name="email"
        label="Эл. Адрес"
        variantForm="custom"
      />

      <div className="grid grid-cols-2 gap-x-6">
        <FormInput
          type="password"
          name="password"
          label="Пароль"
          variantForm="password"
        />
        <FormInput
          type="password"
          name="repeatPassword"
          label="Повторить Пароль"
          variantForm="password"
        />
      </div>
      <div className="flex mt-4 gap-2 ">
        <label className="relative inline-flex items-start cursor-pointer">
          <Input
            className="peer hidden"
            type="checkbox"
            name="privacy"
            value="true"
          />
          <span
            className="w-5 h-5 border border-black rounded block relative
               after:content-[''] after:w-[7px] after:h-[10px]
               after:border-solid after:border-gray-400 after:border-r-2 after:border-b-2
               after:absolute after:top-[1px] after:left-[5px]
               after:rotate-45 after:hidden peer-checked:after:block"
          ></span>
        </label>

        <div>
          <Text value="Соглашаюсь с " />

          <Link className="border-b border-black" href="/">
            политикой конфиденциальности
          </Link>
        </div>
      </div>

      {error && <div className="text-red-500 mt-2 text-center">{error}</div>}

      <div className="flex w-full justify-center mt-[24px] mb-3">
        <ButtonVector
          type="submit"
          as="span"
          text={isPending ? "Зарегестрироватся..." : "Зарегестрироватся"}
          variant="bigFormVector"
        />
      </div>
      <div className="flex justify-center">
        <Link className="text-[var(--grey)]" href="/login">
          Уже есть акаунт?
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;
