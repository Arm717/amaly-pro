"use client";

import CheckOutInput from "@/components/input/form-input/checkout-input/CheckOutInput";
import Title from "@/components/title/Title";

export default function CheckOutSection() {
  return (
    <div className="grid grid-cols-[1.2fr_1fr] gap-x-[100px] py-16 font-firaGo">
      <div>
        <Title
          as="h2"
          value="Оформление заказа"
          className="font-bold text-4xl mb-6"
        />

        <div className="grid grid-cols-[1fr_1fr] mb-8 gap-x-[20px] gap-y-4">
          <div className="grid gap-x-[20px] gap-y-4">
            <CheckOutInput type="text" placeholder="ФИО" name="FIO" />
            <CheckOutInput type="text" placeholder="Номер телефона" name="Tel" />
            <CheckOutInput type="email" placeholder="E-mail" name="email" />
          </div>

          <div>
            <Title
              as="h3"
              value="Время доставки"
              className="font-semibold text-[32px] mb-4"
            />

            <div className="flex  gap-4">
              
                <input
                  type="radio"
                  id="deliveryTimeFast"
                  name="deliveryTime"
                  className="peer hidden"
                  defaultChecked
                />
                <label
                  htmlFor="deliveryTimeFast"
                  className="
                    relative pl-7 cursor-pointer
                    before:content-[''] before:block before:w-5 before:h-5 before:rounded-full
                    before:border before:border-[#fc0] before:transition-all before:duration-600 before:ease-in-out
                    after:content-[''] after:w-4 after:h-4 after:rounded-full
                    after:bg-[#fc0] after:absolute after:top-[2px] after:left-[2px]
                    after:opacity-0 after:transition-all after:duration-600 peer-checked:after:opacity-100
                  "
                >
                  Как можно скорее
                </label>
                
                <input
                  type="radio"
                  id="deliveryTimeOnTime"
                  name="deliveryTime"
                  className="peer hidden"
                />
                <label
                  htmlFor="deliveryTimeOnTime"
                  className="
                    relative pl-7 cursor-pointer
                    before:content-[''] before:block before:w-5 before:h-5 before:rounded-full
                    before:border before:border-[#fc0] before:transition-all before:duration-600 before:ease-in-out
                    after:content-[''] after:w-4 after:h-4 after:rounded-full
                    after:bg-[#fc0] after:absolute after:top-[2px] after:left-[2px]
                    after:opacity-0 after:transition-all after:duration-600 peer-checked:after:opacity-100
                  "
                >
                  К определённому времени
                </label>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
