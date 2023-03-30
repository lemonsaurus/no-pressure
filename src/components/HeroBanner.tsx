import HeroBannerImg from "@/assets/hero-banner-1280px.png";

const HeroBanner = () => (
  <div className="relative h-96 scroll-mt-[136px]" id="home">
    <div className="absolute top-0 -translate-x-2/4 inset-x-1/2 w-full lg:w-screen max-w-screen-xl bg-dark h-full xl:rounded-2xl overflow-hidden">
      <img className="h-full w-full object-cover" src={HeroBannerImg} />
    </div>
  </div>
);

export default HeroBanner;
