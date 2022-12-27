import { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
import ContactUs from "../sections/ContactUs";
import Team from "../sections/Team";
import Technologies from "../sections/Technologies";
import Testimonials from "../sections/Testimonials";
import WhatWeHave from "../sections/WhatWeHave";
import WhyYouChooseUs from "../sections/WhyYouChooseUs";
import Work from "../sections/Work/Work";
import Testimonials2 from "../sections/testimonials2";

const mainUi = () => (
  <>
    <div className="bg-primary-black">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
      </div>

      <div className="">
        <Feedback />

        <div className="gradient-04 z-0" />
        <Work />
      </div>
      <div className="relative">
        <World />

        {/* <div className="gradient-04 z-0" /> */}
        <Technologies />
      </div>
      <div className="relative">
        <Testimonials2 />
        <WhatWeHave />
        <div className="gradient-04 z-0" />

        <WhyYouChooseUs />
      </div>
      <div className="relative">
        <Team />
        <div className="gradient-04 z-0" />
        <ContactUs />
      </div>
      <Footer />
    </div>
  </>
);

function Home() {
  const [screenType, setScreenType] = useState("mobile");
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setScreenType("mobile");
      // return "mobile";
    } else if (width < 1024) {
      setScreenType("tablet");
      // return "tablet";
    } else {
      setScreenType("desktop");
      // return "desktop";
    }
  }, []);

  return (
    <div className="">
      {screenType === "desktop" ? (
        <div className="bg-primary-black overflow-hidden">{mainUi()}</div>
      ) : (
        <div className="bg-primary-black overflow-hidden">{mainUi()}</div>
      )}
    </div>
  );
}

export default Home;
