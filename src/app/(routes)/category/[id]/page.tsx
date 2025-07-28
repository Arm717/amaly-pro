"use server"
import Category from "./_components/Category";
import { getCategoryPageData } from "@/app/services/getCategoryPageData";

interface IParams {
  id: string;
}

async function CategoryPage({params,searchParams}: {params: IParams,searchParams: { sort?: string }}) {
  const id  = Number(params.id);
  const sort = searchParams.sort ; // Default to null if sort is not provided
  
  const categoryData = await getCategoryPageData({ id,sort }); // Replace with dynamic ID as needed
  
  console.log(searchParams, '++==========');
  
  
  return (
    <Category categoryData={categoryData} />
  );
}

export default CategoryPage;
