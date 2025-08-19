"use client"
import ButtonVector from '@/components/button/button-vector/ButtonVector'
import FormInput from '@/components/form-input/FormInput'
import React, { useState } from 'react'
import { ILoginForm } from '../types/types'


function LoginForm() {
    const [loginForm, setLoginForm] = useState<ILoginForm>({
        email:'',
        password:''
    })
  return (
    <form onSubmit={()=>{}}>
        <FormInput type="email" label="Эл. Адрес" variantForm="custom" />
        <FormInput type="password" label="Пароль" variantForm="password" />
        <div className="flex w-full justify-center mt-[24px]">
          <ButtonVector type="submit" as="span" text="Войти" variant="bigFormVector" />
        </div>
      </form>
  )
}

export default LoginForm