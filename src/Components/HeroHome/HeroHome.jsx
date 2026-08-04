import React from "react";

// VIEW: Home / hero section
export default function HeroHome() {
    return (
        <section className="hero-section" id="home">
            <div className="home-hero-content">
                <span className="hero-tag">BUILDING DIGITAL SOLUTIONS THAT MATTER</span>
                <h1>
                    We build software <br />that drives real <br />
                    <span className="highlight">business growth</span>
                </h1>
                <p>
                    Solinix helps startups and enterprises transform ideas into <br />
                    powerful digital products with modern technologies and user-first approach.
                </p>
                <div className="hero-buttons">
                    <a href="#services" className="primary-btn">Explore Our Services →</a>
                    <a href="#products" className="secondary-btn">View Our Work →</a>
                </div>
            </div>
        </section>
    );
}
