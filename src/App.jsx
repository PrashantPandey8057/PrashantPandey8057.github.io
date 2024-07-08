import ButtonGradient from "./assets/svg/ButtonGradient";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OpenSource from "./components/OpenSource";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <OpenSource />
        {/* <Pricing /> */}
        <Projects />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
