"use server"
import { ISearchPageData } from '../types/types';

interface ISearchParams {
  query: string;
  page: number;
}

async function getSearchPageData({query, page}:ISearchParams):Promise<ISearchPageData> {
    debugger;
    const data = await fetch(`https://api.amalys.pro/api/search?search=${query}&page=${page}`, {next:{ revalidate:3600 }});
    const response = await data.json();
    return response;
}

export default getSearchPageData;