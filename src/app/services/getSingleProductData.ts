import { ISingleProductData } from "../types";

interface IGetSingleProductData {
  id: number;
}

export async function getSingleProductData({id}:IGetSingleProductData):Promise<ISingleProductData> {
    const data = await fetch(`https://api.amalys.pro/api/product/detail?id=${id}`, {next:{ revalidate:3600 }});
    const response = await data.json();
    return response;
}