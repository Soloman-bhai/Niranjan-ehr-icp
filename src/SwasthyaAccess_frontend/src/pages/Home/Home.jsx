import Header from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Solutions from "../../components/Solutions/Solutions";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTA from "../../components/CTA/CTA";
import Contact from "../../components/Contact/Contact";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <Solutions />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
