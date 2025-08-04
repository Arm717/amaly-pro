import TitleImage from "@/app/_components/title/title-image/TitleImage";
import { ICategory } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProductCategory {
  productCategory: ICategory;
}

function ProductCategory({ productCategory }: IProductCategory) {
  return (
    <>
      <Link
        href={`/category/${productCategory.id}`}
        className="flex flex-col items-center max-w-[215px] min-w-[90px] justify-center gap-0 lg:gap-[10px] bg-white
        
        "
      >
        <Image
          width={213}
          height={200}
          src={`https://api.amalys.pro/storage/category/${productCategory.image}`}
          alt=""
        />
        <TitleImage
          as="h3"
          cloudVariant="categoryCloud"
          value={productCategory.name}
        />
      </Link>
    </>
  );
}

export default ProductCategory;
