import Section from "./_components/section/Section";
import ProductsSection from "./(routes)/(home)/_components/products/ProductsSection";
import AboutUsSection from "./(routes)/(home)/_components/about-us/AboutUsSection";

export default async function Home() {
  
  return (
    <div className="flex min-h-[calc(100vh-450px)] flex-grow w-full justify-center">
  
        <Section>
          <AboutUsSection  />
          <ProductsSection />
        </Section>
      
    </div>
  );
}
