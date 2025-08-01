"use client";

import React, { useState } from "react";
import ButtonIcon from "@/app/_components/button/buttonIcon/ButtonIcon";
import Section from "@/app/_components/section/Section";
import TitleImage from "@/app/_components/title/title-image/TitleImage";
import { ICategoryPageDatas } from "@/app/types";
import ProductCard from "@/app/(routes)/(home)/_components/products/ProductCard";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface ICategoryComponent {
  categoryData: ICategoryPageDatas;
}

function Category({ categoryData }: ICategoryComponent) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortByName, setSortByName] = useState("По возрастанию цены");
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
    <div className="flex flex-col items-center justify-center font-firaGo">
      <Section>
        <div className="flex justify-center mt-[100px] ">
          <TitleImage
            as="h2"
            src="/maskGroup.png"
            value={categoryData.category.name}
            width={249}
            height={97}
            alt="mask group"
          />
        </div>

        <div className="flex relative">
          <ButtonIcon
            width={16}
            height={16}
            variant="headerNavBtn"
            icon={menuOpen ? "/chevron-up.png" : "/chevron-down.png"}
            title={`Сортировать :${sortByName}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            iconPosition="right"
          />

          {menuOpen && (
            <div className="absolute top-[30px] left-[100px]  px-[10px] py-[5px] bg-white border-2 border-yellow-400 rounded  w-[260px]  z-30">
              <ul className="font-firaGo  gap-y-6 text-[#A4A4A4]">
                {sortBy.map((item) => (
                  <li className="font-medium" key={item.id}>
                    <button
                      className="block "
                      onClick={() => {
                        handleSortChange(item.sortby);
                        setSortByName(item.name);
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

        <div className="grid grid-cols-2 gap-4  mt-[30px]   lg:grid-cols-3 mx-5 sxl:grid-cols-4  ">
          {categoryData.product.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-[40px] ">
          <TitleImage
            as="h6"
            src="/smallVector.png"
            width={22}
            height={16}
            value="1"
            alt="small vector"
          />
        </div>

        <div className="flex justify-center mt-[100px]">
          <TitleImage
            as="h1"
            src="/maskGroup.png"
            value="Рекомендуемые продукты"
            repeat
            width={495}
            height={102}
            imageWidth={490}
            imageHeight={300}
            // className="
            // w-[273px]
            // h-[64px]
            // xsm:w-[273px]
            // xsm:h-[64px]
            // lg:w-[495px]
            // lg:h-[102px]
            // "
            alt="mask group"
            // imageClassName="
            // w-[150px]
            // h-[64px]
            // xsm:w-[150px]
            // xsm:h-[64px]
            // lg:w-[250px]
            // lg:h-[100px]
            // "
          />
        </div>

        {/* <div className="flex flex-wrap  gap-4 mt-[30px]">
          {categoryData.product_related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
      </Section>
    </div>
  );
}

export default Category;
