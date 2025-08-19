"use server"
import React from 'react'
import LoginSection from './_components/LoginSection'

function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
        <LoginSection />
    </div>
    
  )
}

export default LoginPage