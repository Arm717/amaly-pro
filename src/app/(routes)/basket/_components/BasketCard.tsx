"use client";
import Button from "@/components/button/Button";
import ButtonVector from "@/components/button/button-vector/ButtonVector";
import Title from "@/components/title/Title";
import { useProductContext } from "@/context/useProductContext";
import { IProductsItem } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBasketCard {
  basketItem: IProductsItem;
}

function BasketCard({ basketItem }: IBasketCard) {
  const {products, addToBasket, decreaseQuantity, removeFromBasket} = useProductContext();
  const basketData = products.find(p => p.id === basketItem.id);
  const quantity = basketData?.qty ?? 1;

  return (
    <div className="grid grid-cols-[120px_40px_auto] font-firaGo
     rounded-[10px] border-2 border-[#a4a4a4] relative
     p-[6px] 
     lg:pl-4
     lg:pt-4
     lg:pr-12
     lg:pb-4
     lg:grid-cols-[100px_3fr_2fr_1fr_1fr]
     lg:gap-x-[32px] ">
      <Link className="row-span-3 col-[1] lg:row-span-1 lg:col-auto" href={`/product?id=${basketItem.id}`}>
        <Image
          className="object-cover w-full h-full"
          src={`https://api.amalys.pro/storage/product/${basketItem.image}`}
          width={200}
          height={200}
          alt={basketItem.name}
        />
      </Link>
      <div className="grid h-fit row-start-1 col-[span_2_/_4] w-fit lg:flex lg:w-auto lg:h-auto  lg:row-auto lg:col-auto  items-center">
        <Link href={`/product?id=${basketItem.id}`}>
          <Title
            className="font-medium text-base"
            as="h4"
            value={basketItem.name}
          />
        </Link>
      </div>
      <div className=" grid grid-cols-[auto_1fr_auto] row-[3] col-[3] w-fit ml-auto lg:row-auto lg:col-auto lg:w-auto gap-x-[15px] place-content-center">
        <ButtonVector
        
          as="p"
          variant="basketDecrementVector" 
          onClick={() => basketData && decreaseQuantity(basketData)}
          />
        <Title
          className="font-medium text-base text-center"
          as="h4"
          value={quantity}
        />
        <ButtonVector 
         as="p"
         variant="basketIncrementVector"
         onClick={() => basketData && addToBasket(basketData)}
         />
      </div>
      <div className="hidden lg:flex text-center items-center justify-center">
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
      <div className="row-start-3 col-start-2 flex text-center items-center justify-center lg:row-start-auto lg:col-start-auto">
        <Title
          className="font-bold text-base text-center"
          as="h4"
          value={basketData ? basketData.qty! * basketItem.price : basketItem.price}
        />
        <Image
          width={12}
          height={12}
          src="/rub.svg"
          alt="rub"
        />
      </div>
      <Button 
        className="absolute right-[6px] top-[6px] cursor-pointer"
        variant="icon"
        onClick={() => basketData && removeFromBasket(basketData.id)}
       >
        <Image  src="/x.png" width={24} height={24} alt="close" />
      </Button>
      
    </div>
  );
}

export default BasketCard;
