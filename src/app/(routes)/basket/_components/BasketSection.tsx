"use client";
import Title from "@/components/title/Title";
import useLocalStorage from "@/context/hooks/useLocalStorage";
import { IProductBasket, IProductsItem } from "@/types/types";
import { getBasketProductData } from "../services/getBasketProductData";
import Section from "@/components/section/Section";
import { useEffect, useState } from "react";
import { useHasMounted } from "@/hooks/useHasMounted";
import BasketCard from "./BasketCard";
import Image from "next/image";
import ButtonVector from "@/components/button/button-vector/ButtonVector";

function BasketSection() {
  const [basketProduct, setBasketProduct] = useState<IProductsItem[]>([]);
  const [basketData] = useLocalStorage<IProductBasket[]>("guest_basket", []);
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!basketData?.length) return;
    getBasketProductData(basketData).then(setBasketProduct);
  }, [basketData]);

  if (!hasMounted) {
    return null;
  }

  if (!basketData.length) {
    return (
      <Title
        className="font-firaGo font-semibold text-[40px]"
        as="h2"
        value="Корзина пуста"
      />
    );
  }

  return (
    <Section className="mx-2">
      <div className="grid grid-cols-1 gap-x-[50px] pt-[80px] lg:mb-[64px] lg:grid lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="grid grid-cols-[100px_3fr_2fr_1fr_1fr] gap-x-[32px] pl-4 pr-[48px] mb-8 font-firaGo font-medium !text-2xl">
            <Title as="h6" value="Продукт" />
            <Title as="h6" value="" />
            <Title as="h6" value="Количество" />
            <Title as="h6" value="Цена" />
            <Title as="h6" value="Итог" />
          </div>
          <div className="grid gap-6">
            {basketProduct.map((basketItem) => (
                <BasketCard key={basketItem.id} basketItem={basketItem} />
            ))}
          </div>
          
        </div>
        <div className="lg:rounded-[10px] lg:border-2 lg:border-[#fc0] lg:px-8 pt-8 pb-[42px] lg:mt-[53px] lg:mb-9 h-fit">
          <div className="hidden lg:flex justify-center items-center mb-6 w-full h-full">
            <Title
              as="h2"
              className="text-[var(--yellow)] font-firaGoLight text-base flex items-center flex-wrap xl:text-2xl"
              value={`Продуктов в корзине : 1 на сумму 610`}
            />
            <Image
              className="w-4 h-4 yellow-filter"
              src="/rub.svg"
              
              width={20}
              height={20}
              alt="rubImg"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <Title className="font-semibold text-base" as="h5" value="Товары" />
            <div className="flex">
              <Title as="h4" value="1150" />
              <Image width={12} height={12} src="/rub.svg" alt="rub" />
            </div>
          </div>
          
          <div className="flex justify-center">
            <Image src="/basketVector.png" width={502} height={4} alt="vector"/>
          </div>
          
          <div className="flex justify-between items-center mt-4 mb-[22px]">
            <Title className="text-[var(--yellow)] text-2xl" as="h5" value="Итог" />
            <div className="flex justify-center text-center">
              <Title className="text-[var(--yellow)] text-2xl" as="h5" value="1150" />
              <Image
              src="/rub.svg"
              width={12}
              height={12}
              alt="rubImg"
            />
            </div>
          
          </div>
          <div className="flex justify-center ">
            <ButtonVector as="p" variant="bigFormVector" text="Оформить заказ" />
          </div>
          
        </div>
      </div>
    </Section>
  );
}

export default BasketSection;