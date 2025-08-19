import React, { useState } from 'react';
import Input from '../input/Input';
import ButtonIcon from '../button/buttonIcon/ButtonIcon';
import Title from '../title/Title';

type variant = "custom" | "password"


function FormInput({
    type,
    variantForm,
    label
}:{
    type:React.HTMLInputTypeAttribute;
    variantForm:variant;
    label:string;
}) {
    const [eyeOpen, setEyeOpen] = useState(false)
    const inputType =
    variantForm === "password" ? (eyeOpen ? "text" : "password") : type;
  return (
    <div>
        <Title className='font-firaGo text-base font-semibold leading-[19.2px] mb-4 capitalize ml-2' as='h3' value={label} />
    <div className='relative flex p-4 mb-4 text-base rounded-lg border-2 border-[#a4a4a4] focus-within:border-black'>
        
        <Input type={inputType} required/>
       {variantForm === "password" && (
        <div className={`absolute inset-y-0 end-0 flex items-center pe-3`}>
          <ButtonIcon
            type='button'
            icon={eyeOpen? "/eyeOpen.png" : "eyeClose.png"}
            width={20}
            height={20}
            variant="headerNavBtn"
            onClick={() => {
                setEyeOpen((prev) => !prev);
            }}
            alt="see password"
          />
        </div>
      )}
       </div>
    </div>
  )
}

export default FormInput