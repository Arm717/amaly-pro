import { ICategory } from "@/app/types";
import React from "react";
import ProductCategory from "./ProductCategory";
import ProductCard from "./ProductCard";

interface IProductList {
  productData: ICategory;
}

function ProductList({ productData }: IProductList) {
  const filteredProducts = productData.products
    .filter((item) => item.category_id === productData.id)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-4 items-center h-[421px] mb-5 bg-white xsm:h-[431px] xsm:mx-4 2xxl:mx-0 ">
      
      <div className="bg-white col-span-1  xsm:mr-[16px] lg:mr-[116px]">
        <ProductCategory productCategory={productData} />
      </div>

      
      <div className="col-span-3 w-full overflow-x-auto lg:overflow-visible">
        <div
          className="
                      flex gap-3 h-full xsm:mx-4 lg:mx-0
                      lg:grid lg:grid-cols-3 xl:gap-6
                    "
        >
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="
                          flex-shrink-0 
                          max-w-[215px]
                          min-w-[215px] 
                          md:min-w-[300px] 
                          lg:min-w-0 lg:max-w-full lg:w-full
                        "
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
