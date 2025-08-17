"use server";

import { IHomeData } from "@/types/types";

export async function getHomeData(): Promise<IHomeData> {
  const data = await fetch("https://api.amalys.pro/api/home", {
    next: { revalidate: 3600 },
  });
  const response = await data.json();
  return response;
}
