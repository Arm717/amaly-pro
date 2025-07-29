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
        className="flex flex-col items-center justify-center gap-0 lg:gap-[10px] bg-white
        border border-black
        "
      >
        <Image
          width={213}
          height={200}
          className="
          w-[89px] h-[71px]          /* базовые — для самых маленьких экранов */
          xsm:w-[89px] xsm:h-[80px]
          lg:w-[190px] lg:h-[150px] /* для экранов от 375px */
          xl:w-[211px] xl:h-[170px]
          "
          src={`https://api.amalys.pro/storage/category/${productCategory.image}`}
          alt=""
        />
        <TitleImage
          width={213}
          height={39}
          imageWidth={200}
          imageHeight={100}
          as="h3"
          className="w-[89px] h-[59px] 
          xsm:w-[100px]
          xsm:h-[59px]
          xl:w-[213px]
          xl:full
          "
          imageClassName="
          w-[60px]
          h-[50px]
          xsm:w-[40px]
          h-[30px]
          xl:w-[200px]
          xl:h-[70px]
          "
          titleClassName="xsm:text-sm lg:text-2xl"
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
