"use server"

import CenteredContainer from "@/components/centered-container/CenteredContainer"
import Section from "@/components/section/Section"
import PersonalSection from "./_components/PersonalSection"

function PersonalInformation() {
  return (
    <CenteredContainer>
      <Section className=" font-firaGo font-semibold text-3xl">
        <PersonalSection />
      </Section>
    </CenteredContainer>
  )
}

export default PersonalInformation