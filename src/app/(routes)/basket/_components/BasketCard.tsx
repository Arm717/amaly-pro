"use client";
import Button from "@/components/button/Button";
import ButtonVector from "@/components/button/button-vector/ButtonVector";
import Title from "@/components/title/Title";
import { IProductsItem } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBasketCard {
  basketItem: IProductsItem;
}

function BasketCard({ basketItem }: IBasketCard) {
  return (
    <div className="grid grid-cols-[100px_3fr_2fr_1fr_1fr] font-firaGo gap-x-[32px] rounded-[10px] border-2 border-[#a4a4a4] relative p-4 pr-12">
      <Link href={`/product?id=${basketItem.id}`}>
        <Image
          className="object-cover w-full h-full"
          src={`https://api.amalys.pro/storage/product/${basketItem.image}`}
          width={200}
          height={200}
          alt={basketItem.name}
        />
      </Link>
      <div className="flex items-center">
        <Link href={`/product?id=${basketItem.id}`}>
          <Title
            className="font-medium text-base"
            as="h4"
            value={basketItem.name}
          />
        </Link>
      </div>
      <div className="grid grid-cols-[auto_1fr_auto] gap-x-[15px] place-content-center">
        <ButtonVector as="p" variant="basketDecrementVector" />
        <Title
          className="font-medium text-base text-center"
          as="h4"
          value={1}
        />
        <ButtonVector as="p" variant="basketIncrementVector" />
      </div>
      <div className="flex text-center items-center justify-center">
        <Title
          className="font-medium text-base text-center"
          as="h4"
          value={basketItem.price}
        />
        <Image
          
          width={12}
          height={12}
          src="/rub.svg"
          alt="rub"
        />
      </div>
      <div className="flex text-center items-center justify-center">
        <Title
          className="font-bold text-base text-center"
          as="h4"
          value={basketItem.price}
        />
        <Image
          width={12}
          height={12}
          src="/rub.svg"
          alt="rub"
        />
      </div>
      <Button className="absolute right-[6px] top-[6px] cursor-pointer" variant="icon">
        <Image  src="/x.png" width={24} height={24} alt="close" />
      </Button>
      
    </div>
  );
}

export default BasketCard;
