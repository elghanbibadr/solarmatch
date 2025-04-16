import BrandsWeWorkWith from "./componenets/BrandsWeWorkWith";
import Callout from "./componenets/Callout";
import EnergySavingsBenefits from "./componenets/EnergySavingsBenefits";
import Footer from "./componenets/Footer";
import Hero from "./componenets/Hero";
import Navbar from "./componenets/Navbar";
import OurServices from "./componenets/OurServices";
import Services from "./componenets/Services";
import Solar101 from "./componenets/Solar101";
import WhyChoseUs from "./componenets/WhyChoseUs";

export default function Home() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <BrandsWeWorkWith />
      <OurServices />
      <WhyChoseUs />
      <EnergySavingsBenefits />
      <Services />
      <Solar101 />
      <Callout />
      <Footer />

      
    </>
  );
}
