import React from "react";

// VIEW: About / hero section with background image
export default function AboutHero() {
    return (
        <section className="hero-section about-hero-section">
            <div className="hero-background"></div>
            <div className="hero-content">
                <span className="sub-heading">ABOUT SOLINIX</span>
                <h1 className="main-heading">
                    Building Digital<br />
                    Solutions That <span className="highlight">Matter</span>
                </h1>
                <p className="description">
                    We are a team of problem-solvers, innovators, and<br />
                    dreamers who love turning ideas into powerful<br />
                    digital products.
                </p>
                <div className="button-group">
                    <button className="btn-primary">Our Story <span className="arrow">→</span></button>
                    <button className="btn-secondary">Our Work <span className="arrow">→</span></button>
                </div>
            </div>
        </section>
    );
}
