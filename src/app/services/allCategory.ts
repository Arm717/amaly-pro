import { IAllCategory } from "../_components/header/header-nav/types";


export async function allCategory():Promise<IAllCategory> {
    const data = await fetch('https://api.amalys.pro/api/all-category', {next:{revalidate:3600}});
    const response = await data.json();
    
    return response;
}