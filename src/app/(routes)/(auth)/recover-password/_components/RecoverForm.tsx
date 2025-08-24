import ButtonVector from '@/components/button/button-vector/ButtonVector';
import FormInput from '@/components/form-input/FormInput';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState, useTransition } from 'react'
import { IRecoverPasswordAction } from '../actions/types/types';
import { RecoverPasswordAction } from '../actions/RecoverPasswordAction';

function RecoverForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  
  return (
    <form action={(formData) => {
            startTransition(async () => {
              const res: IRecoverPasswordAction = await RecoverPasswordAction(formData);
              
              if (res.success) {
                redirect("/login");
              } else {
                setError(res.message);
    
                console.error("Recover Password failed:", res.message);
              }
            });
          }}
    >
      <FormInput
        type="email"
        name="email"
        label="Эл. Адрес"
        variantForm="custom"
      />
     
      {error && <div className="text-red-500 mt-2 text-center">{error}</div>}

      <div className="flex flex-col gap-2 w-full items-center mt-[24px] mb-3">
        <ButtonVector
          type="submit"
          as="span"
          text={isPending ? "Получение кода..." : "Получить код"}
          variant="bigFormVector"
        />

        <Link className="text-[var(--grey)]" href="/login">
          Отмена
        </Link>
      </div>
    </form>
  );
}

export default RecoverForm;




