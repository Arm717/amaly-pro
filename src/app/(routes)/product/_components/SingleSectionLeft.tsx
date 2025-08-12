import ButtonVector from "@/app/_components/button/button-vector/ButtonVector";
import Text from "@/app/_components/text/Text";
import Title from "@/app/_components/title/Title";
import { IProductsItem, ISingleProductData } from "@/app/types";
import Image from "next/image";
import React from "react";

function SingleSectionLeft({
  singleProduct,
}: {
  singleProduct: IProductsItem;
}) {
  return (
    <div>
      <Title as="h2" value={singleProduct.name} />
      <div className="grid gap-[20px] [grid-template-columns:4fr_3fr] mt-6">
        <div>
          <Image
            src={`https://api.amalys.pro/storage/product/${singleProduct.image}`}
            width={563}
            height={375}
            alt="single"
          />
        </div>
        <div>
          <div className="flex gap-2 mb-6 ">
            <Title
              as="h5"
              className="text-[var(--yellow)]"
              value={`Состав: `}
            />
            <div className="items-center">
              <Text
                as="span"
                className="text-sm"
                value={singleProduct.text}
              />
            </div>
          </div>
          <div className="flex gap-6 mb-6 ">
            <div className="flex gap-1">
              <Title as="h5" className="text-[var(--grey)] " value={`Белки:`} />
              <div className="items-center">
                <Text
                  as="span"
                  className="text-sm text-[var(--grey)]"
                  value={`${singleProduct.protein} гр.`}
                />
              </div>
            </div>

            <div className="flex gap-1">
              <Title as="h5" className="text-[var(--grey)] " value={`Жиры:`} />
              <div className="items-center">
                <Text
                  as="span"
                  className="text-sm text-[var(--grey)]"
                  value={`${singleProduct.fat} гр.`}
                />
              </div>
            </div>

            <div className="flex gap-1">
              <Title
                as="h5"
                className="text-[var(--grey)] "
                value={`Углеводы:`}
              />
              <div className="items-center">
                <Text
                  as="span"
                  className="text-sm text-[var(--grey)]"
                  value={`${singleProduct.carbohydrates} гр.`}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 mb-6 ">
            <Title
              as="h5"
              className="text-[var(--yellow)] "
              value={`Калорийность: `}
            />
            <div className="items-center">
              <Text
                as="span"
                className="text-sm"
                value={`${singleProduct.calories} ккал.`}
              />
            </div>
          </div>
          <div className="flex gap-2 mb-6 ">
            <Title as="h5" className="text-[var(--yellow)] " value={`Вес:: `} />
            <div className="items-center">
              <Text
                as="span"
                className="text-sm"
                value={`${singleProduct.weight} гр.`}
              />
            </div>
          </div>
          <div className="flex gap-2 mb-6 ">
            <Title as="h5" className="text-[var(--yellow)] " value={`Цена: `} />
            <div className="flex gap-1 items-center">
              <Text
                as="span"
                className="text-sm"
                value={`${singleProduct.price} `}
              />
              <Image
                className="mt-[2px]"
                width={12}
                height={12}
                src="/rub.svg"
                alt="rub"
              />
            </div>
          </div>
          <div className="flex ">
            <ButtonVector
              as="span"
              text={
                singleProduct.status ? "В корзину" : "Будет Позже"
              }
              variant="bigVector"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSectionLeft;
