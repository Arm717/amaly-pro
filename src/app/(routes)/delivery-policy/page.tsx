import Section from "@/app/_components/section/Section";
import Text from "@/app/_components/text/Text";
import TitleImage from "@/app/_components/title/title-image/TitleImage";
import Image from "next/image";
import React from "react";

function DeliveryPolicyPage() {
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center ">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-[97px] px-[20px] mb-[40px] lg:mt-[155px] lg:mb-[92px] ">
          <div className="border-2 border-[var(--yellow)] p-6">
            <TitleImage
              as="h1"
              cloudVariant="oneCloud"
              value="Условия доставки"
            />
            <div className="px-[24px] pb-[24px]">
              <Text
                className="space-y-2 font-firaGo"
                value={`Приём заказов с 10:00 до 19:00.
                Время работы ресторана для самовывоза с 10:00 до 19:00.

                Доставка 500 рублей. Бесплатная доставка при заказе от 5000 рублей
                Среднее время доставки 80-120 минут с момента приёма заказа.
                При доставке в отдалённые районы Москвы и в часы пик время доставки может быть увеличено.

                Самовывоз от любой суммы по адресу г. Москва, Митинская ул. 24Ас1`}
              />
            </div>
          </div>
          <div>
            <Image
              className="w-full h-full"
              width={610}
              height={326}
              src="/deliveryImage.png"
              alt="deliveryImage"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default DeliveryPolicyPage;
