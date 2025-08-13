// app/product/page.tsx
"use server";


import SingleProduct from "./_components/SingleProduct";
import { getSingleProductData } from "./services/getSingleProductData";


interface ISearchParams {
  id?: string;
}

export default async function SingleProductPage({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  const id = Number(searchParams.id);

  if (!id) {
    return <div>ID не указан</div>;
  }

  const singleProductData = await getSingleProductData({ id });
  console.log("SingleProductPage", singleProductData);
  

  return (
    <SingleProduct singleProductData={singleProductData} />
  );
}
