"use server"


import { allCategory } from "@/services/allCategory";
import GridCategory from "./_components/GridCategory";

async function CategoryPages() {
  const categorie = await allCategory();

  return (
    <GridCategory categorie={categorie} />
  )
}

export default CategoryPages;