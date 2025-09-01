"use server"
import CenteredContainer from '@/components/centered-container/CenteredContainer'
import React from 'react'
import BasketSection from './_components/BasketSection'
import Section from '@/components/section/Section'

function BasketPage() {
  
  return (
    <CenteredContainer>
      <Section className='items-center'>
        <BasketSection />
      </Section>
    </CenteredContainer>
  )
}

export default BasketPage