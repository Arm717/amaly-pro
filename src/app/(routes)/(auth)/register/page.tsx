"use server"
import CenteredContainer from '@/components/centered-container/CenteredContainer'
import Section from '@/components/section/Section'
import React from 'react'
import RegisterSection from './_components/RegisterSection'


function RegisterPage() {
  return (
    <CenteredContainer>
        <RegisterSection />
    </CenteredContainer>
  )
}

export default RegisterPage