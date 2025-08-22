"use server";

import ProductsSection from "./(routes)/(home)/_components/products/ProductsSection";
import AboutUsSection from "./(routes)/(home)/_components/about-us/AboutUsSection";
import { getHomeData } from "@/services/getHomeData";
import Section from "@/components/section/Section";
import CenteredContainer from "@/components/centered-container/CenteredContainer";

export default async function Home() {
    const homeData = await getHomeData();

  return (
    <CenteredContainer>
  
        <Section>
          <AboutUsSection homeData={homeData} />
          <ProductsSection homeData={homeData} />
        </Section>
      
    </CenteredContainer>
  );
}
