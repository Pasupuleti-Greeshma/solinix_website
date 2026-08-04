import React from "react";
import stayzyImg from "../../assets/stayzy.png";

// VIEW: "Our Products" cards + features bar + CTA banner
export default function ProductsShowcase() {
    return (
        <section className="products-section">
            <div className="container">
                <div className="section-header">
                    <span className="sub-heading">Our Products</span>
                    <h2 className="main-heading">Built to Simplify Your Business</h2>
                </div>

                <div className="products-grid">
                    <div className="product-card">
                        <div className="product-info">
                            <div className="product-title-area">
                                <div className="product-icon stayzzy-icon">
                                    <img src={stayzyImg} alt="Stayzzy" className="product-logo" />
                                </div>
                                <h3>Stayzzy</h3>
                            </div>
                            <p>Complete PG management app for owners and tenants.</p>
                            <a href="https://stayzzy.in" className="learn-more">Learn More &rarr;</a>
                        </div>
                        <div className="product-mockup phone-mockup">
                            <div className="mockup-screen"></div>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-info">
                            <div className="product-title-area">
                                <div className="product-icon pgmove-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <h3>PGMove</h3>
                            </div>
                            <p>Marketplace to discover and book PGs and flats easily.</p>
                            <a href="https://pgmove.in" className="learn-more">Learn More &rarr;</a>
                        </div>
                        <div className="product-mockup tablet-mockup">
                            <div className="mockup-screen"></div>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-info">
                            <div className="product-title-area">
                                <div className="product-icon hrms-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                </div>
                                <h3>HRMS</h3>
                            </div>
                            <p>Smart HRMS to manage employees, payroll and operations.</p>
                            <a href="#" className="learn-more">Learn More &rarr;</a>
                        </div>
                        <div className="product-mockup tablet1-mockup">
                            <div className="mockup-screen"></div>
                        </div>
                    </div>
                </div>

                <div className="features-bar">
                    <div className="feature-item">
                        <div className="feature-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <div>
                            <h4>Reliable & Secure</h4>
                            <p>We build secure and scalable solutions you can rely on.</p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <div>
                            <h4>Client First Approach</h4>
                            <p>Your goals are our priority. We work as your partner.</p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                        </div>
                        <div>
                            <h4>Support That Cares</h4>
                            <p>We're with you even after delivery.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-banner">
                    <div className="cta-left">
                        <div className="cta-rocket-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3"></path></svg>
                        </div>
                        <div>
                            <h3>Have an idea? Let's build it together.</h3>
                            <p>Tell us about your project and we'll help you turn it into reality.</p>
                        </div>
                    </div>
                    <button className="lets-talk-btn">Let's Talk &rarr;</button>
                </div>
            </div>
        </section>
    );
}
