import React from "react";

// VIEW: Contact intro section with background image
export default function ContactHero() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-bg-layer"></div>
            <div className="contact-container">
                <div className="contact-content-box">
                    <span className="sub-heading">CONTACT US</span>
                    <h2 className="main-heading">
                        Let's Build Something<br />
                        Amazing <span className="highlight">Together.</span>
                    </h2>
                    <p className="description">
                        Have a project in mind or want to learn more about our services and products? We'd love to hear from you. Our team is ready to help you bring your ideas to life.
                    </p>

                    <div className="contact-features-row">
                        <div className="contact-feature-item">
                            <div className="feature-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                            </div>
                            <div>
                                <h4>Quick Response</h4>
                                <p>We reply within 24 hours</p>
                            </div>
                        </div>

                        <div className="contact-feature-item">
                            <div className="feature-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <div>
                                <h4>Expert Support</h4>
                                <p>Our team is here to help</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
