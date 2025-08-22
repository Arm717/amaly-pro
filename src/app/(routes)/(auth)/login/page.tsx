"use server"
import React from 'react'
import LoginSection from './_components/LoginSection'
import CenteredContainer from '@/components/centered-container/CenteredContainer'

function LoginPage() {
  return (
    <CenteredContainer>
        <LoginSection />
    </CenteredContainer>
    
  )
}

export default LoginPage