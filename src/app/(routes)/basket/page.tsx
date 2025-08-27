"use server"
import CenteredContainer from '@/components/centered-container/CenteredContainer'
import React from 'react'
import BasketSection from './_components/BasketSection'

function BasketPage() {
  
  return (
    <CenteredContainer>
        <BasketSection />
    </CenteredContainer>
  )
}

export default BasketPage