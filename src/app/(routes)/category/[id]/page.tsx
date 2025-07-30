"use server"
import Section from "@/app/_components/section/Section";
import CategoryContainer from "./_components/CategoryContainer";
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
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
  
        <Section>
          <CategoryContainer categoryData={categoryData} />
        </Section>
      
    </div>
  );
}

export default CategoryPage;
