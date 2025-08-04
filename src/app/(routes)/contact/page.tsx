import LinkImage from "@/app/_components/link-image/LinkImage";
import Section from "@/app/_components/section/Section";
import Text from "@/app/_components/text/Text";
import TextImage from "@/app/_components/text/text-image/TextImage";
import TitleImage from "@/app/_components/title/title-image/TitleImage";
import Image from "next/image";
import React from "react";

function ContactPage() {
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
      <Section>
        <div className="flex flex-col justify-center mx-[16px] pt-[40px]">
          <TitleImage as="h1" cloudVariant="oneCloud" value="Контакты" />
          <div className="grid grid-cols-[1fr_2fr] gap-5 mt-6 mb-[32px]">
            <div className="rounded-[10px] px-8 py-[100px] border-2 border-yellow-400 flex items-center flex-col gap-[16px]">
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
              <Text className="text-sm lg:text-base" as="span" value="ИП Айвазян Амаля Норайровна." />
              <Text className="text-sm lg:text-base" as="span" value="ИНН 770971146940" />
              <Text className="text-sm lg:text-base" as="span" value="ОГРНИП 322774600601127" />
              <div className="flex justify-center items-center mt-[8px] gap-[18px]">
                <LinkImage
                  className="yellow-filter"
                  icon="/facebookIcon.svg"
                  width={31}
                  height={32}
                  variant="img"
                  url="https://www.facebook.com/"
                  alt="facebook"
                />
                <LinkImage
                  className="yellow-filter"
                  icon="/instagramIcon.svg"
                  width={30}
                  height={30}
                  variant="img"
                  url="https://www.instagram.com/amalys_cuisine?igsh=MW1qY2xndXBtcGJreg==insta"
                  alt="insta"
                />
                <LinkImage
                  className="yellow-filter"
                  icon="/LinkedInIcon.svg"
                  width={30}
                  height={30}
                  variant="img"
                  url="https://www.facebook.com/"
                  alt="linkedIn"
                />
              </div>
            </div>
            <div>
              <Image
                className="w-full h-full object-cover rounded-[16px]"
                width={680}
                height={474}
                src="/rectangle.png"
                alt="rectagle"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default ContactPage;
