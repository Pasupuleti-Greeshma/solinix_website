import React from "react";

// VIEW: "Our Story" - mission / vision / values
export default function OurStory() {
    return (
        <section className="our-story-section" id="about">
            <div className="our-story-container">
                <div className="story-left">
                    <span className="story-sub-heading">OUR STORY</span>
                    <h2 className="story-main-heading">From Ideas to <span className="highlight">Impact</span></h2>
                    <p className="story-text">
                        Solinix was founded with a simple belief - technology should simplify complexity and create real impact.
                    </p>
                    <p className="story-text">
                        What started as a small team of passionate developers has grown into a trusted technology partner for startups and enterprises.
                    </p>
                    <p className="story-text">
                        We combine innovation, design and engineering to deliver products that are scalable, secure and future-ready.
                    </p>
                </div>

                <div className="story-right">
                    <div className="story-card">
                        <div className="story-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                        </div>
                        <h3>Mission</h3>
                        <p>To empower businesses with smart, scalable and reliable digital solutions.</p>
                    </div>

                    <div className="story-card">
                        <div className="story-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </div>
                        <h3>Vision</h3>
                        <p>To be a global technology partner driving innovation and digital transformation.</p>
                    </div>

                    <div className="story-card">
                        <div className="story-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon></svg>
                        </div>
                        <h3>Values</h3>
                        <p>Integrity, Innovation, Collaboration and Customer Success.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
