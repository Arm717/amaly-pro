import React, { useState } from 'react';
import Input from '../../Input';

function CheckOutInput({
    type,
    name,
    onChange,
    placeholder,
    ...rest
}:{
    type:React.HTMLInputTypeAttribute;
    name?:string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder:string
}) {

  return (
    <div className='relative flex p-[10px] rounded-lg border-2 border-[#a4a4a4] text-black text-[16px]  placeholder:text-[#a4a4a4] placeholder:font-[FiraGO-Light] placeholder:text-[16px] focus-within:border-black'>
        
        <Input placeholder={placeholder} onChange={onChange} name={name} type={type} {...rest} required/>
    
    </div>
  )
}

export default CheckOutInput