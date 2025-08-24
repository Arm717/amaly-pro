"use server";

import { cookies } from "next/headers";
import { IRegisterActionData } from "./types/types";

export async function registerAction(
  formData: FormData
): Promise<IRegisterActionData> {
  const name = formData.get("FIO") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const repeatPassword = formData.get("repeatPassword") as string;
  const privacy = formData.get("privacy") === "true";

  if (!name && !email) {
    return { success: false, message: "Email и Fio обязательны." };
  } else if (!password && password !== repeatPassword) {
    return { success: false, message: "пароли не совподают." };
  } else if (!privacy) {
    return {
      success: false,
      message: "нажмите на Соглашаюсь с политикой конфиденциальности",
    };
  }

  const reqData = { form: { name, email, password, privacy } };

  try {
    const res = await fetch("https://api.amalys.pro/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqData),
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      return { success: false, message: `Ошибка API: ${res.status} ${text}` };
    }

    const data = await res.json();

    cookies().set("userToken", data.access_token.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 дней
    });

    return {
      success: true,
      message: "Успешная регистрация",
      access_token: data.access_token,
      data: data.data,
    };
  } catch (err) {
    return { success: false, message: "Ошибка соединения с сервером" };
  }
}
