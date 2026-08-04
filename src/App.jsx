import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/global.css";

// VIEW components (one per section) — MVC "View" layer
import Navbar from "./Components/Navbar/Navbar";
import HeroHome from "./Components/HeroHome/HeroHome";
import DigitalSolutions from "./Components/DigitalSolutions/DigitalSolutions";
import ProductsShowcase from "./Components/ProductsShowcase/ProductsShowcase";
import AboutHero from "./Components/AboutHero/AboutHero";
import OurStory from "./Components/OurStory/OurStory";
import TeamSection from "./Components/TeamSection/TeamSection";
import MilestonesSection from "./Components/MilestonesSection/MilestonesSection";
import ServicesHero from "./Components/ServicesHero/ServicesHero";
import CoreServices from "./Components/CoreServices/CoreServices";
import TechProcess from "./Components/TechProcess/TechProcess";
import BuildingNext from "./Components/BuildingNext/BuildingNext";
import ContactHero from "./Components/ContactHero/ContactHero";
import ContactPageSection from "./Components/ContactPageSection/ContactPageSection";
import Footer from "./Components/Footer/Footer";

// Subpages
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Components/TermsConditions/TermsConditions";

// Homepage Section Composition with Scroll Reveal Observer
function HomePage({ onHrmsClick }) {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach((el) => observer.observe(el));

        return () => {
            revealElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <>
            <HeroHome />
            <div className="reveal"><DigitalSolutions /></div>
            <div className="reveal"><ProductsShowcase onHrmsClick={onHrmsClick} /></div>
            <div className="reveal"><AboutHero /></div>
            <div className="reveal"><OurStory /></div>
            <div className="reveal"><TeamSection /></div>
            <div className="reveal"><MilestonesSection /></div>
            <div className="reveal"><ServicesHero /></div>
            <div className="reveal"><CoreServices /></div>
            <div className="reveal"><TechProcess /></div>
            <div className="reveal"><BuildingNext /></div>
            <div className="reveal"><ContactHero /></div>
            <div className="reveal"><ContactPageSection /></div>
        </>
    );
}

// App composition/layout with Routes
export default function SingleScrollPage() {
    const [showBlogModal, setShowBlogModal] = React.useState(false);
    const [showProductSoonModal, setShowProductSoonModal] = React.useState(false);

    return (
        <div className="solinx-single-scroll-page">
            <Navbar onBlogClick={() => setShowBlogModal(true)} />
            <Routes>
                <Route path="/" element={<HomePage onHrmsClick={() => setShowProductSoonModal(true)} />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
            </Routes>
            <Footer />

            {showBlogModal && (
                <div className="custom-modal-overlay" onClick={() => setShowBlogModal(false)}>
                    <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setShowBlogModal(false)}>&times;</button>
                        <div className="modal-icon">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h3>Blog Coming Soon</h3>
                        <p>We are currently working hard on crafting high-quality, insightful articles on technology, design, and business growth. Stay tuned!</p>
                        <button className="modal-action-btn" onClick={() => setShowBlogModal(false)}>Got it</button>
                    </div>
                </div>
            )}

            {showProductSoonModal && (
                <div className="custom-modal-overlay" onClick={() => setShowProductSoonModal(false)}>
                    <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setShowProductSoonModal(false)}>&times;</button>
                        <div className="modal-icon">
                            <i className="fas fa-tools"></i>
                        </div>
                        <h3>Product Under Construction</h3>
                        <p>Our Enterprise HRMS platform is currently in active development. We're building a seamless, high-performance experience to handle employee rosters, automated payroll, and applicant pipelines. Stay tuned!</p>
                        <button className="modal-action-btn" onClick={() => setShowProductSoonModal(false)}>Got it</button>
                    </div>
                </div>
            )}
        </div>
    );
}
