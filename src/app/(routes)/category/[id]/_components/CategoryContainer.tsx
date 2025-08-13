"use client";

import React, { useState } from "react";
import ButtonIcon from "@/app/_components/button/buttonIcon/ButtonIcon";
import Section from "@/app/_components/section/Section";
import TitleImage from "@/app/_components/title/title-image/TitleImage";

import ProductCard from "@/app/(routes)/(home)/_components/products/ProductCard";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import ButtonVector from "@/app/_components/button/button-vector/ButtonVector";
import { ICategoryPageDatas } from "../types/types";

interface ICategoryComponent {
  categoryData: ICategoryPageDatas;
}

function CategoryContainer({ categoryData }: ICategoryComponent) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortBarName, setSortBarName] = useState("По возрастанию цены");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const sortBy = [
    { id: 1, sortby: "max_price", name: "По возрастанию цены" },
    { id: 2, sortby: "min_price", name: "По убыванию цены" },
    { id: 3, sortby: "max_calories", name: "По возрастанию калорийности" },
    { id: 4, sortby: "min_calories", name: "По убыванию калорийности" },
  ];

  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sort);
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="flex justify-center mt-20 sm:mt-24 px-4 sm:px-6 w-full max-w-screen-md mx-auto">
        <TitleImage
          as="h2"
          cloudVariant="oneCloud"
          value={categoryData.category.name}
        />
      </div>
      <div className="flex flex-col mx-5 ">
        <div className="flex w-full mt-6 relative justify-center lg:justify-start">
          <ButtonIcon
            width={16}
            height={16}
            variant="headerNavBtn"
            icon={menuOpen ? "/chevron-up.png" : "/chevron-down.png"}
            title={`Сортировать : ${sortBarName}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            iconPosition="right"
          />
          {menuOpen && (
            <div className="absolute top-full  mt-2 px-4 py-3 bg-white border-2 border-yellow-400 rounded w-full max-w-xs shadow-lg z-30 lg:top-full lg:left-0">
              <ul className="font-firaGo space-y-3 text-[#A4A4A4]">
                {sortBy.map((item) => (
                  <li key={item.id} className="font-medium">
                    <button
                      className="block w-full text-left"
                      onClick={() => {
                        handleSortChange(item.sortby);
                        setSortBarName(item.name);
                      }}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 2xxs:grid-cols-2  lg:grid-cols-3 sxl:grid-cols-4 gap-6 mt-8 ">
          {categoryData.product.data.map((product) => (
            <div key={product.id} className="flex ">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-10 justify-center">
        <ButtonVector as="span" variant="smallVector" text="1" />
      </div>
      <div className="flex flex-col mx-5 ">
        <div className="flex justify-center mt-[24px]">
          <TitleImage
            as="h1"
            cloudVariant="twoCloud"
            value="Рекомендуемые продукты"
          />
        </div>

        <div className="grid grid-cols-1 2xxs:grid-cols-2  lg:grid-cols-3 sxl:grid-cols-4 gap-4 mt-[30px] mb-[40px]">
          {categoryData.product_related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryContainer;
