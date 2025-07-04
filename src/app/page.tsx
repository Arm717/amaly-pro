import Section from "./_components/section/Section";
import TitleImage from "./_components/title-image/TitleImage";
import { getHomeData } from "./services/getHomeData";

async function Home() {
 
  // const homeData = await getHomeData();
  // console.log(homeData);
  
  return (
    <div className="flex w-full justify-center">
      <Section>
        <div className="flex justify-center pb-[27px]">
          <TitleImage
            as="h2"
            src="/maskGroup.png"
            value="О нас"
            width={249}
            height={97}
          />
        </div>
        <div className="flex w-full h-[474px] bg-slate-500 justify-between">
          {/* Левая часть — видео */}
          <div className="w-[680px] h-full bg-black flex items-center justify-center">
            <div className="w-full h-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/18x4rPVxQkQ?start=2&autoplay=1&mute=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Правая часть — под контент */}
          <div className="w-[677px] h-full bg-zinc-800  text-white">
            <p className="text-xl font-semibold">Описание или текст</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Home;