"use client";


import { useProductContext } from "@/context/useProductContext";
import { IProductsItem } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "../title/Title";
import Text from "../text/Text";
import ButtonIcon from "../button/buttonIcon/ButtonIcon";
import Button from "../button/Button";
import { useAuth } from "@/context/useAuthContext";
import addToBasketFetch from "./services/addToBasket";
import { log } from "node:console";

interface IProductCard {
  product: IProductsItem;
}

function ProductCard({ product }: IProductCard) {
  const { addToBasket, setBasketQuantity } = useProductContext();
  const { isAuthenticated } = useAuth();

  const handleAddToBasket = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
      addToBasketFetch({id:product.id, qty: 1}).then((response) => {
        if (response.success) { 
          setBasketQuantity(Number(response.qty_count));
          return;
         }
         else console.log('Failed to add to basket');
       
      }).catch((error) => {
        console.error('Error adding to basket:', error);
      });
  }

  return (
    <>
      <Link
        href={`/product?id=${product.id}`}
        className="flex  flex-col z-10  border-2 rounded-[20px] border-[var(--yellow)]
         h-full
         "
      >
        <div className="px-[10px] pt-[10px] h-full">
          <div className=" mb-[12px] max-h-full  overflow-hidden rounded-[12px] group lg:max-h-[204px]">  
            <Image
              width={306}
              height={204}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              src={`https://api.amalys.pro/storage/product/${product.image}`}
              alt={product.name}
            />
          </div>

          <Title
            as="h5"
            className="font-semibold mb-[6px] xsm:text-[13px] xl:text-base"
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
          <div className="text-sm line-clamp-2 font-firaGo mb-[6px]">
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
                alt="basketBtn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (isAuthenticated) {
                    handleAddToBasket(e);
                  }
                  addToBasket({id:product.id})
                }}
              />
            ) : (
              <>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  variant="custom"
                >
                  Будет Позже
                </Button>
              </>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
