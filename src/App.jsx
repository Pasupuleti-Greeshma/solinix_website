import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/global.css";
import ScrollToTop from "./Components/ScrollToTop";

// Layout
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Pages
import Home from "./Components/HeroHome/HeroHome";
import About from "./Components/AboutHero/AboutHero";
import Services from "./Components/ServicesHero/ServicesHero";
import Products from "./Components/ProductsShowcase/ProductsShowcase";
import Contact from "./Components/ContactHero/ContactHero";

// Other Pages
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Components/TermsConditions/TermsConditions";

export default function App() {
    const [showBlogModal, setShowBlogModal] = React.useState(false);
    const [showProductSoonModal, setShowProductSoonModal] = React.useState(false);

    return (
        <div className="solinx-app">

            <ScrollToTop />

            {/* Navbar appears on every page */}
            <Navbar onBlogClick={() => setShowBlogModal(true)} />

            <Routes>

                {/* Home */}
                <Route
                    path="/"
                    element={
                        <Home
                            onHrmsClick={() =>
                                setShowProductSoonModal(true)
                            }
                        />
                    }
                />

                {/* About */}
                <Route path="/about" element={<About />} />

                {/* Services */}
                <Route path="/services" element={<Services />} />

                {/* Products */}
                <Route
                    path="/products"
                    element={
                        <Products
                            onHrmsClick={() => setShowProductSoonModal(true)}
                        />
                    }
                />

                {/* Contact */}
                <Route path="/contact" element={<Contact />} />

                {/* Footer Links */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />

            </Routes>

            {/* Footer appears on every page */}
            <Footer />

            {/* Blog Modal */}
            {showBlogModal && (
                <div
                    className="custom-modal-overlay"
                    onClick={() => setShowBlogModal(false)}
                >
                    <div
                        className="custom-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close-btn"
                            onClick={() => setShowBlogModal(false)}
                        >
                            &times;
                        </button>

                        <div className="modal-icon">
                            <i className="fas fa-rocket"></i>
                        </div>

                        <h3>Blog Coming Soon</h3>

                        <p>
                            We are currently working hard on crafting
                            high-quality, insightful articles on technology,
                            design, and business growth. Stay tuned!
                        </p>

                        <button
                            className="modal-action-btn"
                            onClick={() => setShowBlogModal(false)}
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}

            {/* Product Modal */}
            {showProductSoonModal && (
                <div
                    className="custom-modal-overlay"
                    onClick={() => setShowProductSoonModal(false)}
                >
                    <div
                        className="custom-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close-btn"
                            onClick={() => setShowProductSoonModal(false)}
                        >
                            &times;
                        </button>

                        <div className="modal-icon">
                            <i className="fas fa-tools"></i>
                        </div>

                        <h3>Product Under Development</h3>

                        <p>
                            Our Enterprise HRMS platform is currently in active
                            development. We're building a seamless,
                            high-performance experience to handle employee
                            rosters, automated payroll, and applicant pipelines.
                            Stay tuned!
                        </p>

                        <button
                            className="modal-action-btn"
                            onClick={() => setShowProductSoonModal(false)}
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}