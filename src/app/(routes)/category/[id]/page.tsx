"use server";
import Section from "@/components/section/Section";
import CategoryContainer from "./_components/CategoryContainer";
import { getCategoryPageData } from "@/app/(routes)/category/[id]/services/getCategoryPageData";
import CenteredContainer from "@/components/centered-container/CenteredContainer";

interface IParams {
  id: string;
}

async function CategoryPage({
  params,
  searchParams,
}: {
  params: IParams;
  searchParams: { sort?: string };
}) {
  const id = Number(params.id);
  const sort = searchParams.sort;

  const categoryData = await getCategoryPageData({ id, sort });

  return (
    <CenteredContainer>
      <Section>
        <CategoryContainer categoryData={categoryData} />
      </Section>
    </CenteredContainer>
  );
}

export default CategoryPage;
