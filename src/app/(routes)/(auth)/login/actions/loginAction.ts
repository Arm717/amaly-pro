"use server";

import { cookies } from "next/headers";
import {
  ILoginActionData
} from "./types/types";

export async function loginAction(formData: FormData): Promise<ILoginActionData> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { success: false, message: "Email и пароль обязательны." };
  }

  const reqData = { form: { email, password } };

  try {
    const res = await fetch("https://api.amalys.pro/api/login", {
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

    // 🍪 сохраняем токен
    cookies().set("userToken", data.access_token.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 дней
    });



    return {
      success: true,
      message: "Успешный вход",
      access_token: data.access_token,
      data: data.data,
    };
  } catch (err) {
    return { success: false, message: "Ошибка соединения с сервером" };
  }
}
