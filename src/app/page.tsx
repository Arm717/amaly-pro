import AboutUsSection from "./_components/about-us-section/AboutUsSection";
import ProductsSection from "./_components/products-section/ProductsSection";
import Section from "./_components/section/Section";
import TitleImage from "./_components/title-image/TitleImage";
import { getHomeData } from "./services/getHomeData";

async function Home() {
 
  const homeData = await getHomeData();
  console.log(homeData);
  
  return (
    <div className="flex w-full justify-center">
      <Section>
        <AboutUsSection description={homeData.about} />
        <ProductsSection />
      </Section>
    </div>
  );
}

export default Home;

