import React from "react";

// VIEW: Site footer
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col brand-col">
                    <h2 className="footer-logo">SOLI<span>NIX</span></h2>
                    <p className="footer-desc">Solinix is a software development company passionate about building innovative digital solutions that drive business growth.</p>
                    <div className="social-icons">
                        <a href="#linkedin" aria-label="LinkedIn">🔗</a>
                        <a href="#instagram" aria-label="Instagram">📷</a>
                        <a href="#twitter" aria-label="Twitter">🐦</a>
                        <a href="#email" aria-label="Email">✉️</a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#services">Web Development</a></li>
                        <li><a href="#services">Mobile Development</a></li>
                        <li><a href="#services">AI &amp; Automation</a></li>
                        <li><a href="#services">Digital Marketing</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="#products">Stayzzy</a></li>
                        <li><a href="#products">PGMove</a></li>
                        <li><a href="#products">HRMS</a></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><span className="icon">📞</span> +91 91084 21609</li>
                        <li><span className="icon">✉️</span> hello@solinix.com</li>
                        <li><span className="icon">📍</span> Hyderabad, India</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Solinix. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms &amp; Conditions</a>
                </div>
            </div>
        </footer>
    );
}
