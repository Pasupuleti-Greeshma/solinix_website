import React from "react";
import stayzyImg from "../../assets/stayzy.png";
import pgmoveImg from "../../assets/pgmove.png";

// VIEW: Premium alternating product showcase cards matching the custom layout
export default function ProductsShowcase({ onHrmsClick }) {
    return (
        <section className="products-section" id="products">
            <div className="container">
                <div className="section-header">
                    <span className="sub-heading">OUR PRODUCTS</span>
                    <h2 className="main-heading">Products We Build & Own</h2>
                </div>

                <div className="products-list-wrapper">
                    {/* Card 1: PGMove.in */}
                    <div className="premium-product-card">
                        <div className="product-text-side">
                            <div className="status-badge live">
                                <span className="badge-dot"></span> LIVE
                            </div>
                            <h2 className="product-card-title">PGMove.in</h2>
                            <span className="product-card-subtitle">SMART PG & RENTAL MANAGEMENT PLATFORM</span>
                            <p className="product-card-desc">
                                A smart platform that connects people with PGs, hostels, and rental accommodations — while helping property owners manage listings and receive quality leads.
                            </p>
                            <div className="product-features-grid">
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Smart Property Search
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Property Listings
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Lead Management
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Owner Dashboard
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Rental Discovery
                                </div>
                            </div>
                            <a href="https://pgmove.in" className="product-cta-btn" target="_blank" rel="noopener noreferrer">
                                Visit PGMove.in &rarr;
                            </a>
                        </div>
                        <div className="product-image-side">
                            <img src={pgmoveImg} alt="PGMove.in Mockup" className="product-mockup-img" />
                        </div>
                    </div>

                    {/* Card 2: Stayzy.in */}
                    <div className="premium-product-card">
                        <div className="product-image-side">
                            <img src={stayzyImg} alt="Stayzy.in Mockup" className="product-mockup-img" />
                        </div>
                        <div className="product-text-side">
                            <div className="status-badge live">
                                <span className="badge-dot"></span> LIVE
                            </div>
                            <h2 className="product-card-title">Stayzy.in</h2>
                            <span className="product-card-subtitle">ADVANCED CO-LIVING MANAGEMENT SYSTEM</span>
                            <p className="product-card-desc">
                                A complete PG and hostel management platform built for property owners and tenants to handle rent, occupancy, and agreements.
                            </p>
                            <div className="product-features-grid">
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Tenant Management
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Rent Collection
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Digital Rental Agreements
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Occupancy Management
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Maintenance Requests
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Mobile Application
                                </div>
                            </div>
                            <a href="https://stayzzy.in" className="product-cta-btn" target="_blank" rel="noopener noreferrer">
                                Explore Stayzy.in &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Card 3: HRMS */}
                    <div className="premium-product-card">
                        <div className="product-text-side">
                            <div className="status-badge coming-soon">
                                <span className="badge-dot gray"></span> COMING SOON
                            </div>
                            <h2 className="product-card-title">HRMS</h2>
                            <span className="product-card-subtitle">ENTERPRISE HUMAN RESOURCE PLATFORM</span>
                            <p className="product-card-desc">
                                An intelligent Human Resource Management System designed to simplify workforce operations, recruiting, payroll, and appraisals.
                            </p>
                            <div className="product-features-grid">
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Employee Management
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Recruitment & Onboarding
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Attendance Tracking
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Payroll Processing
                                </div>
                                <div className="feature-bullet">
                                    <span className="bullet-check">✓</span> Reports & Analytics
                                </div>
                            </div>
                            <button className="product-cta-btn" onClick={onHrmsClick}>
                                Learn More &rarr;
                            </button>
                        </div>
                        <div className="product-image-side launching-soon-side">
                            <div className="dotted-launch-box">
                                <div className="rocket-icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rocket-svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3"></path></svg>
                                </div>
                                <h4>Launching Soon</h4>
                                <p>Our enterprise Human Resource Management System is currently in active development. We are engineering a unified corporate dashboard to simplify directory rosters, recruitment funnels, and automated payroll operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
