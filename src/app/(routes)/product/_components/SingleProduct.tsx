"use client";
import Section from "@/app/_components/section/Section";
import { ISingleProductData } from "@/app/types";
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
        <div className="grid grid-cols-1 py-[100px] gap-[20px] lg:[grid-template-columns:7fr_2.5fr] mx-6">
            <SingleSectionLeft singleProduct={singleProductData.product} />
            <SingleSectionRight singleRelatedProducts={singleProductData.product_related} />
        </div>
      </Section>
    </div>
  );
}

export default SingleProduct;
