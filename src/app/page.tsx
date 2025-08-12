"use server";
import Section from "./_components/section/Section";
import ProductsSection from "./(routes)/(home)/_components/products/ProductsSection";
import AboutUsSection from "./(routes)/(home)/_components/about-us/AboutUsSection";
import { getHomeData } from "./services/getHomeData";

export default async function Home() {
    const homeData = await getHomeData();

  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
  
        <Section>
          <AboutUsSection homeData={homeData} />
          <ProductsSection homeData={homeData} />
        </Section>
      
    </div>
  );
}
