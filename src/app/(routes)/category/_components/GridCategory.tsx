"use client";
import CenteredContainer from "@/components/centered-container/CenteredContainer";
import Section from "@/components/section/Section";
import { IAllCategory } from "@/types/types";
import Link from "next/link";
import React from "react";

interface CategoryProps {
  categorie: IAllCategory;
}

function GridCategory({ categorie }: CategoryProps) {

  return (
    <CenteredContainer>
      <Section>
        <div className="grid grid-cols-1 justify-items-center lg:justify-items-start  lg:grid-cols-2 sxl:grid-cols-3 mx-3 my-[80px] gap-4">
          {categorie.map((item) => (
            <Link
              key={item.id}
              className="min-w-0 w-max text-xl font-bold text-center lg:text-start  xxl:min-w-[392px]:"
              href={`/category/${item.id}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Section>
    </CenteredContainer>
  );
}

export default GridCategory;
