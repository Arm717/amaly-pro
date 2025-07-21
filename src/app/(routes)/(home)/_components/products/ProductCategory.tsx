import LinkImage from "@/app/_components/link-image/LinkImage";
import TitleImage from "@/app/_components/title-image/TitleImage";
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
        className="flex flex-col items-center justify-center gap-[10px] max-w-[213px] h-[281px] border border-black bg-white"
      >
        <Image
          width={213}
          height={200}
          
          src={`https://api.amalys.pro/storage/category/${productCategory.image}`}
          alt=""
        />
        <TitleImage
          width={213}
          height={39}
          imageWidth={200}
          imageHeight={100}
          as="h3"
          src="/clipGroup.png"
          value={productCategory.name}
          repeat
          reverse
        />
      </Link>
    </>
  );
}

export default ProductCategory;
