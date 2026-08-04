import React from "react";

// VIEW: "Smart Products. Real Impact." intro banner
export default function SmartProducts() {
    return (
        <section className="smart-products-section" id="products">
            <div className="smart-products-container">
                <div className="smart-products-content">
                    <span className="sub-heading">OUR PRODUCTS</span>
                    <h2 className="main-heading">
                        Smart Products.<br />
                        Real <span className="highlight">Impact.</span>
                    </h2>
                    <p className="description">
                        We build and own digital products that solve real-world problems and make life easier for thousands of users every day.
                    </p>
                </div>
                <div className="smart-products-mockup-wrapper">
                    <div className="mockup-bg-image"></div>
                </div>
            </div>
        </section>
    );
}
