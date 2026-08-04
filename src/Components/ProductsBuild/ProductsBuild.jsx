import React from "react";

// VIEW: "Products We Build & Own" - 3 detailed product cards
export default function ProductsBuild() {
    return (
        <section className="products-build-section" id="products">
            <div className="products-build-container">
                <div className="products-build-header">
                    <span className="sub-heading">OUR PRODUCTS</span>
                    <h2 className="main-heading">
                        Products We Build <span className="highlight">&amp; Own</span>
                    </h2>
                </div>

                <div className="products-grid">
                    <div className="product-card">
                        <div className="product-image-box stayzy-bg"></div>
                        <div className="product-content">
                            <h3>Stayzy.in</h3>
                            <p className="product-subtitle">Tenant Management App for PG Owners</p>
                            <p className="product-desc">
                                A complete solution for PG owners to manage tenants, rent collection, notices, agreements, and much more — all in one place.
                            </p>
                            <ul className="product-features-list">
                                <li><span className="checkmark">&#10003;</span> Tenant Onboarding</li>
                                <li><span className="checkmark">&#10003;</span> Rent &amp; Payment Management</li>
                                <li><span className="checkmark">&#10003;</span> Notices &amp; Communication</li>
                                <li><span className="checkmark">&#10003;</span> Digital Agreements</li>
                                <li><span className="checkmark">&#10003;</span> Maintenance Tracking</li>
                            </ul>
                            <div className="product-action-area store-badges">
                                <div className="store-badge-placeholder google-play">Google Play</div>
                                <div className="store-badge-placeholder app-store">App Store</div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image-box pgmove-bg"></div>
                        <div className="product-content">
                            <h3>PGMove.in</h3>
                            <p className="product-subtitle">PG &amp; Flat Discovery Platform</p>
                            <p className="product-desc">
                                Helping users find the best PGs and flats near their preferred location with verified listings and real photos.
                            </p>
                            <ul className="product-features-list">
                                <li><span className="checkmark">&#10003;</span> Verified Listings</li>
                                <li><span className="checkmark">&#10003;</span> Advanced Search &amp; Filters</li>
                                <li><span className="checkmark">&#10003;</span> Property Details &amp; Photos</li>
                                <li><span className="checkmark">&#10003;</span> Direct Contact / Enquiry</li>
                                <li><span className="checkmark">&#10003;</span> Easy &amp; Fast Discovery</li>
                            </ul>
                            <div className="product-action-area">
                                <button className="product-btn visit-btn">Visit Website &rarr;</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image-box hrms-bg"></div>
                        <div className="product-content">
                            <h3>HRMS <span className="coming-soon-tag">(Coming Soon)</span></h3>
                            <p className="product-subtitle">Next-Gen HR Management System</p>
                            <p className="product-desc">
                                A powerful HRMS to streamline HR operations like employee management, leave, payroll, and performance — all in one platform.
                            </p>
                            <ul className="product-features-list">
                                <li><span className="checkmark">&#10003;</span> Employee Lifecycle Management</li>
                                <li><span className="checkmark">&#10003;</span> Leave &amp; Attendance</li>
                                <li><span className="checkmark">&#10003;</span> Payroll Management</li>
                                <li><span className="checkmark">&#10003;</span> Performance Tracking</li>
                                <li><span className="checkmark">&#10003;</span> Analytics &amp; Reports</li>
                            </ul>
                            <div className="product-action-area">
                                <button className="product-btn disabled-btn" disabled>Coming Soon</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
