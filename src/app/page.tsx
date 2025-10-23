import Image from "next/image";
import LandingPageMenu from "./components/LandingPageMenu";
import RightDecoratorLP from "./components/RightDecoratorLP";
import LeftDecoratorLP from "./components/LeftDecoratorLP";
import Hero from "./components/Hero";
import SocialButtonsGroup from "./components/SocialButtonsGroup";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Passion+One:wght@400;700;900&display=swap" rel="stylesheet"></link>
    </head>
     <LandingPageMenu />
     <Hero />
     <LeftDecoratorLP />
     <RightDecoratorLP />
     <Footer />
    </>
  );
}
