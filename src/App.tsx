import "./App.css";
import Discord from "./components/Discord";
import FeatureList from "./components/FeatureList";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Nav from "./components/Nav";
import RaidProgression from "./components/RaidProgression";

const App = () => {
  return (
    <div className="App font-nunito h-full bg-purple text-gold overflow-x-hidden">
      <Nav />
      <main className="max-w-5xl mx-auto flex flex-col gap-y-8 pb-8 pt-24">
        <HeroBanner />
        <FeatureList />
        <Discord />
        <RaidProgression />
        <Footer />
      </main>
    </div>
  );
};

export default App;
