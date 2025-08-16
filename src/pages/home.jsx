import Hero from "../components/hero";
import Features from "../components/features";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import CarCategories from "../components/car-categories";

function Home() {
  return (
    <>
      <Hero />
      <CarCategories/>
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
