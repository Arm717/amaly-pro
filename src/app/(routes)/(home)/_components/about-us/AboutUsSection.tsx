"use client";

import React from "react";

import { IAbout } from "@/app/types";
import DOMPurify from 'isomorphic-dompurify';
import TitleImage from "@/app/_components/title-image/TitleImage";

interface IAboutUsSection {
  description: IAbout;
}

function AboutUsSection({ description }: IAboutUsSection) {
  const cleanHtml = DOMPurify.sanitize(description.text);

  return (
    <div className="mb-[100px]">
      <div className="flex justify-center pb-[27px]">
        <TitleImage
          as="h2"
          src="/maskGroup.png"
          value="О нас"
          width={249}
          height={97}
        />
      </div>
      <div id="aboutUs" className="flex flex-col items-center lg:flex-row w-full">
        {/* Видео */}
        <div className="w-full lg:w-1/2 max-w-[680px] h-[300px] lg:h-[510px] bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/18x4rPVxQkQ?start=2&autoplay=1&mute=1&loop=1&playlist=18x4rPVxQkQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Контент с HTML */}
        <div className="w-full lg:w-1/2 max-w-[680px] h-auto lg:h-[510px] px-4 flex justify-center overflow-y-auto">
          <div
            className="relative  prose prose-invert  font-firaGo font-semibold text-md"
            dangerouslySetInnerHTML={{ __html: cleanHtml }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;