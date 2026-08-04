import React from "react";
import { Link } from "react-router-dom";

// VIEW: Site footer
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col brand-col">
                    <h2 className="footer-logo">SOLI<span>NIX</span></h2>
                    <p className="footer-desc">Solinix is a software development company passionate about building innovative digital solutions that drive business growth.</p>
                    <div className="social-icons">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-x-twitter"></i>
                        </a>
                        <a href="mailto:solinix.tech@gmail.com" aria-label="Email">
                            <i className="far fa-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/#about">About Us</a></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/#products">Products</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="/#services">Web Development</a></li>
                        <li><a href="/#services">Mobile Development</a></li>
                        <li><a href="/#services">AI &amp; Automation</a></li>
                        <li><a href="/#services">Digital Marketing</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="/#products">Stayzzy</a></li>
                        <li><a href="/#products">PGMove</a></li>
                        <li><a href="/#products">HRMS</a></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><span className="icon"><i className="fas fa-phone-alt"></i></span> +91 91084 21609</li>
                        <li><span className="icon"><i className="far fa-envelope"></i></span> solinix.tech@gmail.com</li>
                        <li><span className="icon"><i className="fas fa-map-marker-alt"></i></span> Hyderabad, India</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Solinix. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms &amp; Conditions</Link>
                </div>
            </div>
        </footer>
    );
}
