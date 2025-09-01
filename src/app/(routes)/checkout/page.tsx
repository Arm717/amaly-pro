"use server"
import CenteredContainer from '@/components/centered-container/CenteredContainer'
import Section from '@/components/section/Section'
import React from 'react'
import CheckOutSection from './_components/CheckOutSection'

function CheckOutPage() {
  return (
    <CenteredContainer>
        <Section>
            <CheckOutSection />
        </Section>
    </CenteredContainer>
  )
}

export default CheckOutPage