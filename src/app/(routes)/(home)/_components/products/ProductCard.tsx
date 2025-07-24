"use client";

import Button from "@/app/_components/button/Button";
import ButtonIcon from "@/app/_components/button/buttonIcon/ButtonIcon";
import Text from "@/app/_components/text/Text";
import Title from "@/app/_components/title/Title";
import { useProductContext } from "@/app/context/useProductContext";
import { IProductsItem } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { handleAddToCart } from "./utils/handleAddToCard";

interface IProductCard {
  product: IProductsItem;
}

function ProductCard({ product }: IProductCard) {
  const { products, setProducts } = useProductContext();
  
  
  return (
    <>
      <Link
        href={`/product?id=${product.id}`}
        className="flex flex-col z-10  border-2 rounded-[20px] border-[var(--yellow)]
          w-[215px] h-[329px]
          xsm:w-[215px]
          xsm:h-[400px]
          lg:w-[260px]
          lg:h-[390px]
          xl:w-[330px]
          xl:h-[421px]
         "
      >
        <div className="p-[10px] h-full">
          <div className="mb-[12px] overflow-hidden rounded-[12px] group">
            <Image
              width={306}
              height={204}
              className="transition-transform duration-300 group-hover:scale-110"
              src={`https://api.amalys.pro/storage/product/${product.image}`}
              alt={product.name}
            />
          </div>

          <Title
            as="h5"
            className="font-semibold mb-[6px] xsm:text-[15px] lg:text-sm"
            value={product.name}
          />
          <div className="flex xsm:flex-wrap lg:flex-row gap-[18px] xsm:gap-[10px] text-[var(--grey)] mb-[6px]">
            <Text
              fontSize="sm"
              as="span"
              className=" lg:text-[10px] xl:text-sm"
              value={`Белки: ${product.protein} гр.`}
            />
            <Text
              fontSize="sm"
              className="lg:text-[10px] xl:text-sm"
              as="span"
              value={`Жиры: ${product.fat} гр.`}
            />
            <Text
              fontSize="sm"
              as="span"
              className="lg:text-[10px] xl:text-sm"
              value={`Углеводы: ${product.carbohydrates} гр.`}
            />
          </div>
          <div className="text-sm line-clamp-1 font-firaGo mb-[6px]">
            {product.text}
          </div>

          <div className="flex text-sm">
            {`${product.weight}г./${product.calories}ккал.`}
          </div>
        </div>
        <div className="flex font-firaGo items-center justify-between px-2 h-[52px] text-sm rounded-b-[18px] bg-[var(--yellow)]">
          <div className="flex font-firaGo font-bold ">
            {product.price}
            <Image
              className="mt-[2px]"
              width={14}
              height={14}
              src="/rub.svg"
              alt="rub"
            />
          </div>
          <div>
            {product.status ? (
              <ButtonIcon
                width={20}
                height={13}
                variant="card"
                icon="/cardBasket.svg"
                title="В корзину"
                textSize="sm"
                iconPosition="right"
                onClick={(e) => handleAddToCart(e, product, setProducts)}
              />
            ) : (
              <>
                <Button onClick={(e) =>{
                  e.preventDefault();
                  e.stopPropagation();
                }} variant="custom">Будет Позже</Button>
              </>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
