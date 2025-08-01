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
    <></>
    // <div className="flex h-[400px] mb-5 bg-white max-w-[300px] 3xxs:max-w-full mx-2 border border-black xsm:h-[431px] 2xxl:mx-0 ">
    //   {/* Левый блок — не скроллится */}
    //   <div className=" flex items-center  bg-white shrink-0 mr-[30px] xsm:mr-[10px] lg:mr-[22px] sxl:mr-[117px]">
    //     <ProductCategory productCategory={productData} />
    //   </div>

    //   {/* Правый блок — скроллится по x при малых экранах */}
    //   <div className="flex flex-1  overflow-x-auto w-full lg:overflow-visible  lg:grid lg:grid-cols-3 xl:gap-6 border border-yellow-400  gap-3 h-full">
    //     {filteredProducts.map((item) => (
    //       <div
    //         key={item.id}
    //         className="flex-shrink-0 xsm:min-w-[100px] xsm:max-w-[249px] md:max-w-[300px] lg:max-w-full lg:w-full lg:min-w-0"
    //       >
    //         <ProductCard product={item} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default ProductList;

// {/* <div className="flex h-[400px]  mb-5 bg-white   xsm:mx-4 2xxl:mx-0 border border-black xsm:h-[431px]">
//       {/* Левый блок — не скроллится */}
//       <div className=" flex items-center  bg-white shrink-0 mr-[30px] xsm:mr-[10px] lg:mr-[22px] sxl:mr-[117px]">
//         <ProductCategory productCategory={productData} />
//       </div>

//       {/* Правый блок — скроллится по x при малых экранах */}
//       <div className="flex flex-1 overflow-x-scroll w-full lg:overflow-visible mr-2 lg:grid lg:grid-cols-3 xl:gap-6 border border-yellow-400  gap-3 h-full">
//         {filteredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="flex-shrink-0 xsm:max-w-[300px] lg:max-w-full lg:w-full lg:min-w-0"
//           >
//             <ProductCard product={item} />
//           </div>
//         ))}
//       </div>
//     </div> */}
