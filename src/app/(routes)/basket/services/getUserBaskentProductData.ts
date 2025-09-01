"use server";

import { cookies } from "next/headers";
import { IUserBasketData } from "../types/types";

async function getUserBaskentProductData(): Promise<IUserBasketData> {
  const cookieStore = cookies();
  const token = cookieStore.get("userToken")?.value;

  if (!token) {
    throw new Error("No token found in cookies");
  }

  const res = await fetch("https://api.amalys.pro/api/basket-user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store", // чтобы всегда получать свежие данные
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user basket");
  }

  const response: IUserBasketData = await res.json();
  return response;
}

export default getUserBaskentProductData;
