"use client";
import ButtonVector from "@/app/_components/button/button-vector/ButtonVector";
import Section from "@/app/_components/section/Section";
import Text from "@/app/_components/text/Text";
import Title from "@/app/_components/title/Title";
import { ISingleProductData } from "@/app/types";
import Image from "next/image";
import React from "react";
import SingleSectionLeft from "./SingleSectionLeft";
import SingleSectionRight from "./SingleSectionRight";

function SingleProduct({
  singleProductData,
}: {
  singleProductData: ISingleProductData;
}) {
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
      <Section>
        <div className="grid py-[100px] gap-[20px] [grid-template-columns:7fr_2.5fr]">
            <SingleSectionLeft singleProduct={singleProductData.product} />
            <SingleSectionRight singleRelatedProducts={singleProductData.product_related} />
        </div>
      </Section>
    </div>
  );
}

export default SingleProduct;
