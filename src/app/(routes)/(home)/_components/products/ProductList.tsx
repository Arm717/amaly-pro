import { ICategory } from "@/app/types";
import React from "react";
import ProductCategory from "./ProductCategory";
import ProductCard from "./ProductCard";

interface IProductList {
  productData: ICategory;
}

function ProductList({ productData }: IProductList) {
  return (
    <div className="flex h-[421px] border border-black mb-[20px] bg-white">
      {/* Левый блок — не скроллится */}
      <div className="w-[213px] shrink-0 flex items-center justify-center">
        <ProductCategory productCategory={productData} />
      </div>

      {/* Правый блок — скроллится по горизонтали */}
      <div className="flex-1 h-full overflow-x-auto">
        <div className="flex gap-[20px] w-max h-full px-4 items-center">
          {productData.products.map((item, index) => {
            if (productData.id === item.category_id && index <= 2) {
              return <ProductCard key={item.id} product={item} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;

// function ProductList({ productData }: IProductList) {
//   return (
//     <div className="flex w-full h-[421px] items-center border border-black mb-[20px] bg-white overflow-hidden">
//       {/* Левая колонка (категория) — фикс ширина */}
//       <div className="w-[213px] ">
//         <ProductCategory productCategory={productData} />
//       </div>

//       {/* Правая часть с карточками — скроллируемая */}
//       <div className="relative flex-1 h-full overflow-x-auto">
//         <div className="flex gap-[20px] w-max h-full px-4">
//           {productData.products.map((item, index) => {
//             if (productData.id === item.category_id && index <= 4) {
//               return <ProductCard key={item.id} product={item} />;
//             }
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
