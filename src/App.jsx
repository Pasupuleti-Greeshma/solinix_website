import React from "react";
import "./styles/global.css";

// VIEW components (one per section) — MVC "View" layer
import Navbar from "./components/Navbar/Navbar";
import HeroHome from "./components/HeroHome/HeroHome";
import DigitalSolutions from "./components/DigitalSolutions/DigitalSolutions";
import ProductsShowcase from "./components/ProductsShowcase/ProductsShowcase";
import AboutHero from "./components/AboutHero/AboutHero";
import OurStory from "./components/OurStory/OurStory";
import TeamSection from "./components/TeamSection/TeamSection";
import MilestonesSection from "./components/MilestonesSection/MilestonesSection";
import ServicesHero from "./components/ServicesHero/ServicesHero";
import CoreServices from "./components/CoreServices/CoreServices";
import TechProcess from "./components/TechProcess/TechProcess";
import SmartProducts from "./components/SmartProducts/SmartProducts";
import ProductsBuild from "./components/ProductsBuild/ProductsBuild";
import BuildingNext from "./components/BuildingNext/BuildingNext";
import ContactHero from "./components/ContactHero/ContactHero";
import ContactPageSection from "./components/ContactPageSection/ContactPageSection";
import Footer from "./components/Footer/Footer";

// App.jsx is now ONLY responsible for page composition/layout.
// All markup, data and logic live in components/, data/, controllers/.
export default function SingleScrollPage() {
    return (
        <div className="solinx-single-scroll-page">
            <Navbar />
            <HeroHome />
            <DigitalSolutions />
            <ProductsShowcase />
            <AboutHero />
            <OurStory />
            <TeamSection />
            <MilestonesSection />
            <ServicesHero />
            <CoreServices />
            <TechProcess />
            <SmartProducts />
            <ProductsBuild />
            <BuildingNext />
            <ContactHero />
            <ContactPageSection />
            <Footer />
        </div>
    );
}
