import React from "react";

// VIEW: "Our Services" hero/intro section
export default function ServicesHero() {
    return (
        <section className="hero-section" id="services">
            <div className="hero-background"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <span className="sub-heading">OUR SERVICES</span>
                    <h1 className="main-heading">
                        Digital Solutions<br />
                        Built Around <span className="highlight">You.</span>
                    </h1>
                    <p className="description">
                        We build modern, scalable and reliable software solutions
                        that help businesses automate, grow and stay ahead
                        in a competitive world.
                    </p>
                    <button className="cta-button">
                        Let's Build Together <span className="arrow">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
