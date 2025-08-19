"use server"

import { ILoginForm } from "../types/types";

async function getLoginData({email, password}:ILoginForm) {
  const data = await fetch("https://api.amalys.pro/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  const response = await data.json();
  return response;
}

export default getLoginData