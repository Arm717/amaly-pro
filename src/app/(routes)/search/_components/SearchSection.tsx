"use client";
import React from "react";
import { ISearchPageData } from "../types/types";
import SearchBar from "./search-bar/SearchBar";
import Section from "@/components/section/Section";
import ButtonVector from "@/components/button/button-vector/ButtonVector";
import ProductCard from "@/components/product-card/ProductCard";
import useSearchHook from "@/hooks/useSearchHook";
import Button from "@/components/button/Button";
import Text from "@/components/text/Text";
import getPaginationRange from "./utils/getPaginationRange";
import CenteredContainer from "@/components/centered-container/CenteredContainer";

interface ISearchSection {
  searchData: ISearchPageData;
}

function SearchSection({ searchData }: ISearchSection) {
  const currentPage = Number(searchData.current_page);
  const totalPages = Number(searchData.last_page);
  const pages = getPaginationRange(currentPage, totalPages);
  const {  setSearchValue, handleSearch } = useSearchHook();

  return (
    <CenteredContainer>
      <Section className="mx-3">
        <div className="mt-[48px] mb-[11px] lg:mt-[83px] lg:mb-[64px] ">
          <SearchBar
            onChange={(e) => setSearchValue(e.target.value)}
            onLeftIconClick={() => handleSearch()}
            onRightIconClick={() => handleSearch()}
          />
        </div>
        <div className="flex  mb-[40px] justify-center lg:hidden">
          <ButtonVector as="span" variant="mediumVector" text="Поиск" />
        </div>
        <div className="grid grid-cols-1 justify-center  4xxs:grid-cols-2 lg:grid-cols-3 lxl:grid-cols-4 gap-2.5 mb-10">
          {searchData.data.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>

        <div className="flex w-full gap-[12px] items-center justify-center">
          {pages.map((page, i) => {
            if (page === "...") {
              return <Text key={`dots-${i}`} as="span" value="..." />;
            }
            if (page === currentPage) {
              return (
                <ButtonVector
                  key={page}
                  as="span"
                  variant="smallVector"
                  text={`${page}`}
                />
              );
            }
            return (
              <Button
                key={page}
                variant="custom"
                onClick={() => {
                  handleSearch(Number(page));
                }}
              >
                {page}
              </Button>
            );
          })}
        </div>
      </Section>
    </CenteredContainer>
  );
}

export default SearchSection;
