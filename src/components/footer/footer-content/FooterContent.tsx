"use client";
import { ICategorys } from "@/types/types";
import React from "react";
import Text from "../../text/Text";
import Link from "next/link";
import LinkImage from "../../link-image/LinkImage";
import TextImage from "../../text/text-image/TextImage";
import Image from "next/image";

function FooterContent({ category }: ICategorys) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center  xl:items-start xl:flex-row">
        <div className="xl:grid xl:grid-cols-[1fr_1fr_auto]  gap-y-[10px] w-full xl:gap-x-[30px] 2xl:gap-x-[50px] xsm:hidden">
          {category.map((item, index) => (
            <Link
              key={index}
              className="w-max text-sm"
              href={`/category/${item.id}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start w-[236px] h-[92px] xsm:mb-[40px] xsm:items-center xl:items-start xl:mb-0 xl:ml-[40px] gap-y-3">
          <LinkImage
            url={"info@amalys.pro"}
            icon="/email.png"
            width={20}
            height={20}
            variant="withText"
            title="info@amalys.pro"
            alt="info@amalys.pro"
          />
          <TextImage
            as="span"
            icon="/location.png"
            width={20}
            height={20}
            variant="custom"
            title="г.Москва, ул. Кольская, д2к4"
            alt="location"
          />
          
          <LinkImage
            url={"tel:+7 (985) 648-66-81"}
            icon="/call.png"
            width={20}
            height={20}
            variant="withText"
            title="+7 (985) 648-66-81"
            alt="callNum"
          />
        </div>
        <div className="flex w-[172px] ml-3 mr-2 gap-[18px] 2xl:gap-[40px] justify-center">
          <LinkImage
            className="invert brightness-0"
            icon="/facebookIcon.svg"
            width={31}
            height={32}
            variant="img"
            url="https://www.facebook.com/"
            alt="facebook"
          />
          <LinkImage
            className="invert brightness-0"
            icon="/instagramIcon.svg"
            width={30}
            height={30}
            variant="img"
            url="https://www.instagram.com/amalys_cuisine?igsh=MW1qY2xndXBtcGJreg==insta"
            alt="insta"
          />
          <LinkImage
            className="invert brightness-0"
            icon="/LinkedInIcon.svg"
            width={30}
            height={30}
            variant="img"
            url="https://www.facebook.com/"
            alt="linkedIn"
          />
        </div>
      </div>

      <Image
        className="mt-[40px] mb-[20px]"
        src="/vector.png"
        width={1000}
        height={3}
        alt="vector"
      />
      <Text value="© 2023 Amaly's cuisine. Все права защищены." as="span" />
    </div>
  );
}

export default FooterContent;
