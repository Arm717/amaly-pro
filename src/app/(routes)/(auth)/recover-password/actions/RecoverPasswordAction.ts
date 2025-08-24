"use server";

import { IRecoverPasswordAction } from "./types/types";



export async function RecoverPasswordAction(formData: FormData):Promise<IRecoverPasswordAction> {
    const email = formData.get("email") as string;
   
    if (!email) {
      return { success: false, message: "Email обязателен" };
    }
  
    const reqData = { email } ;
  
    try {
      const res = await fetch("https://api.amalys.pro/api/reset-password/send-code", {
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
  
      return {
        success: true,
        message: "Успешно отправлено",
      };
    } catch (err) {
      return { success: false, message: "Ошибка соединения с сервером" };
    }
  }
  