"use server";

import { cookies } from "next/headers";

interface IAddToBasket {
  success: boolean;
  get_basket_count: number;
  qty_count: string;
}

interface IAddToBasketParams {
  id: number;
  qty: number;
}

async function addToBasketFetch({
  id,
  qty,
}: IAddToBasketParams): Promise<IAddToBasket> {
  const cookieStore = cookies();
  const token = cookieStore.get("userToken")?.value;

  if (!token) {
    throw new Error("No auth token found in cookies");
  }

  const res = await fetch("https://api.amalys.pro/api/basket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id, qty }),
    cache: "no-store",
  });

  if (!res.ok) {
    // для отладки полезно выводить ответ целиком
    const text = await res.text();
    console.error("Basket API error:", res.status, text);
    throw new Error(`Failed to add to basket: ${res.status}`);
  }

  const data: IAddToBasket = await res.json();

  console.log("Basket response:", data);

  return data;
}

export default addToBasketFetch;
