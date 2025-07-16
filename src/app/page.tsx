import { getHomeData } from "./services/getHomeData";
import AboutUsSection from "./_components/about-us-section/AboutUsSection";
import Section from "./_components/section/Section";

import ProductsSection from "./_components/products-section/ProductsSection";
import { ProductProvider } from "./context/useContext";

export default async function Home() {
  
  const homeData = await getHomeData();

  return (
    <div className="flex w-full justify-center">
      <ProductProvider initialCategorie={homeData.category}>
        <Section>
          <AboutUsSection description={homeData.about} />
          <ProductsSection  />
        </Section>
      </ProductProvider>
    </div>
  );
}
