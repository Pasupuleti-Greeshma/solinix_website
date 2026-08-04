import React from "react";

// VIEW: "Building What's Next" section
export default function BuildingNext() {
    return (
        <section className="building-next-section">
            <div className="building-next-bg"></div>
            <div className="building-next-container">
                <div className="building-next-top-row">
                    <div className="building-next-content">
                        <span className="sub-heading">OUR FUTURE</span>
                        <h2 className="main-heading">
                            Building What's <span className="highlight">Next</span>
                        </h2>
                        <p className="description">
                            We are constantly ideating and building new products that bring efficiency, automation and simplicity to businesses and everyday life.
                        </p>
                    </div>

                    <div className="floating-cards-group">
                        <div className="feature-pill-card">
                            <div className="pill-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                            </div>
                            <span className="pill-text">More Innovative<br />Solutions</span>
                        </div>

                        <div className="feature-pill-card">
                            <div className="pill-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                            </div>
                            <span className="pill-text">Deeper Industry<br />Impact</span>
                        </div>

                        <div className="feature-pill-card">
                            <div className="pill-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </div>
                            <span className="pill-text">Better Everyday<br />Experiences</span>
                        </div>
                    </div>
                </div>

                <div className="building-next-cta-banner">
                    <div className="cta-left-side">
                        <div className="cta-paper-plane-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </div>
                        <div>
                            <h3>Have an Idea for the Next Big Thing?</h3>
                            <p>Let's collaborate and build something amazing together.</p>
                        </div>
                    </div>

                    <div className="cta-right-side">
                        <a href="/#contact" className="lets-talk-white-btn" style={{ textDecoration: 'none' }}>Let's Talk &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
