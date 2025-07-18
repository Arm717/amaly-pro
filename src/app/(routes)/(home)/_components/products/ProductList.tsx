import { ICategory } from "@/app/types";
import React from "react";
import ProductCategory from "./ProductCategory";
import ProductCard from "./ProductCard";

interface IProductList {
  productData: ICategory;
}

function ProductList({ productData }: IProductList) {
  // console.log(productData.products);

  return (
    <div className="flex w-full h-[421px] items-center justify-between border border-black mb-[20px]" >
      <ProductCategory productCategory={productData} />
      <div className="flex gap-[20px]" >
        {productData.products.map((item, index) => {
                if (productData.id === item.category_id && index <= 2) {
                  return <ProductCard key={item.id} product={item} />;
                }
              })}
      </div>
      
    </div>
  );
}

export default ProductList;
