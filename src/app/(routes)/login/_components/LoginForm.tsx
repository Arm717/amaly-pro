"use client"
import ButtonVector from '@/components/button/button-vector/ButtonVector'
import FormInput from '@/components/form-input/FormInput'
import React, { useEffect, useState } from 'react'
import { ILoginForm } from '../types/types'


function LoginForm() {
    const [loginForm, setLoginForm] = useState<ILoginForm>({
        email:'',
        password:''
    })

    const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const value = event.target.value;
      setLoginForm(data=>({...data,[name]:value}));
    }

    useEffect(()=> {
      console.log(loginForm);
      
    },[loginForm])


  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      console.log(loginForm);
    }}>
        <FormInput onChange={onChangeHandler}  type="email" name='email'  label="Эл. Адрес" variantForm="custom" />
        <FormInput onChange={onChangeHandler} type="password" name='password' label="Пароль" variantForm="password" />
        <div className="flex w-full justify-center mt-[24px]">
          <ButtonVector type="submit" as="span" text="Войти" variant="bigFormVector" />
        </div>
      </form>
  )
}

export default LoginForm