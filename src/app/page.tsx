import { getHomeData } from "./services/getHomeData";

import Section from "./_components/section/Section";

import ProductsSection from "./(routes)/(home)/_components/products/ProductsSection";
import { ProductProvider } from "./context/useProductContext";
import AboutUsSection from "./(routes)/(home)/_components/about-us/AboutUsSection";

export default async function Home() {
  
  const homeData = await getHomeData();
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
      <ProductProvider initialCategorie={homeData.category}>
        <Section>
          <AboutUsSection description={homeData.about} />
          <ProductsSection category={homeData.category} />
        </Section>
      </ProductProvider>
    </div>
  );
}
