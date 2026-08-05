import React from "react";
import stayzyImg from "../../assets/stayzy.png";
import pgmoveImg from "../../assets/pgmove.png";

// VIEW: Premium alternating product showcase cards matching the custom layout
export default function ProductsShowcase({ onHrmsClick }) {
    return (
        <>
            <section className="products-section" id="products">
                <div className="container">
                    <div className="section-header">
                        <span className="sub-heading">OUR PRODUCTS</span>
                        <h2 className="main-heading">Products We Build & Own</h2>
                    </div>

                    <div className="showcase-container">
                        {/* CARD 1: PGMove.in (Image on Right) */}
                        <div className="showcase-card">
                            <div className="card-content">
                                <span className="badge live">● LIVE</span>
                                <h2 className="card-title">PGMove.in</h2>
                                <span className="card-subtitle">SMART PG & RENTAL MANAGEMENT PLATFORM</span>
                                <p className="card-description">
                                    A smart platform that connects people with PGs, hostels, and rental accommodations — while helping property owners manage listings and receive quality leads.
                                </p>
                                <div className="features-grid">
                                    <div className="feature-item"><span className="check-icon">✓</span> Smart Property Search</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Property Listings</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Lead Management</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Owner Dashboard</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Rental Discovery</div>
                                </div>
                                <button className="primary-btn">Visit PGMove.in &rarr;</button>
                            </div>
                            <div className="card-media mockup-browser">
                                <div className="browser-header">
                                    <div className="browser-dots"><span></span><span></span><span></span></div>
                                </div>
                                {/* Placeholder for Browser Mockup Image */}
                                <div className="mockup-screen-placeholder browser-screen" style={{ backgroundImage: `url(${pgmoveImg})` }}></div>
                            </div>
                        </div>

                        {/* CARD 2: Stayzy.in (Image on Left) */}
                        <div className="showcase-card">
                            <div className="card-media mockup-phone">
                                {/* Placeholder for Phone Mockup Image */}
                                <div className="mockup-screen-placeholder phone-screen" style={{ backgroundImage: `url(${stayzyImg})` }}></div>
                            </div>
                            <div className="card-content">
                                <span className="badge live">● LIVE</span>
                                <h2 className="card-title">Stayzy.in</h2>
                                <span className="card-subtitle">ADVANCED CO-LIVING MANAGEMENT SYSTEM</span>
                                <p className="card-description">
                                    A complete PG and hostel management platform built for property owners and tenants to handle rent, occupancy, and agreements.
                                </p>
                                <div className="features-grid">
                                    <div className="feature-item"><span className="check-icon">✓</span> Tenant Management</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Rent Collection</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Digital Rental Agreements</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Occupancy Management</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Maintenance Requests</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Mobile Application</div>
                                </div>
                                <button className="primary-btn">Explore Stayzy.in &rarr;</button>
                            </div>
                        </div>

                        {/* CARD 3: HRMS (Coming Soon box on Right) */}
                        <div className="showcase-card">
                            <div className="card-content">
                                <span className="badge coming-soon">● COMING SOON</span>
                                <h2 className="card-title">HRMS</h2>
                                <span className="card-subtitle">ENTERPRISE HUMAN RESOURCE PLATFORM</span>
                                <p className="card-description">
                                    An intelligent Human Resource Management System designed to simplify workforce operations, recruiting, payroll, and appraisals.
                                </p>
                                <div className="features-grid">
                                    <div className="feature-item"><span className="check-icon">✓</span> Employee Management</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Recruitment & Onboarding</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Attendance Tracking</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Payroll Processing</div>
                                    <div className="feature-item"><span className="check-icon">✓</span> Reports & Analytics</div>
                                </div>
                                <button className="primary-btn">Learn More &rarr;</button>
                            </div>
                            <div className="card-media coming-soon-box">
                                <div className="launching-content">
                                    <div className="launch-icon-circle">🚀</div>
                                    <h3>Launching Soon</h3>
                                    <p>Our enterprise Human Resource Management System is currently in active development. We are engineering a unified corporate dashboard to simplify directory rosters, recruitment funnels, and automated payroll operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    );
}
