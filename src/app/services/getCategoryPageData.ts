import { IAllCategory, ICategoryPageDatas } from "../types";

interface IGetCategoryPage {
  id: number;
  sort?:string;
}

export async function getCategoryPageData({id, sort}:IGetCategoryPage):Promise<ICategoryPageDatas> {
    const data = await fetch(`https://api.amalys.pro/api/product?id=${id}&sort=${sort}&page=1`, {next:{ revalidate:3600 }});
    const response = await data.json();
    return response;
}