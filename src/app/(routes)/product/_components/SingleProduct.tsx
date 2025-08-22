"use client";

import React from "react";
import SingleSectionLeft from "./SingleSectionLeft";
import SingleSectionRight from "./SingleSectionRight";
import { ISingleProductData } from "../types/types";
import Section from "@/components/section/Section";
import CenteredContainer from "@/components/centered-container/CenteredContainer";

function SingleProduct({
  singleProductData,
}: {
  singleProductData: ISingleProductData;
}) {
  return (
    <CenteredContainer>
      <Section>
        <div className="grid grid-cols-1 py-[100px] gap-[20px] lxl:[grid-template-columns:7fr_3fr] mx-6">
            <SingleSectionLeft singleProduct={singleProductData.product} />
            <SingleSectionRight singleRelatedProducts={singleProductData.product_related} />
        </div>
      </Section>
    </CenteredContainer>
  );
}

export default SingleProduct;
