import Hero from "@/app/components/sections/Hero";
import Services from "@/app/components/sections/Services";
import CaseStudies from "@/app/components/sections/CaseStudies";
import Tools from "@/app/components/sections/Tools";
import Contact from "@/app/components/sections/Contact";
import "./globals.css";
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Tools />
      <Contact />
    </>
  );
}
