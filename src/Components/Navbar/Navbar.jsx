import React, { useState } from "react";
import { Link } from "react-router-dom";
import solinix from "../../assets/solinix.png";
import "./Navbar.css";

// VIEW: Top navigation bar
export default function Navbar({ onBlogClick }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="logo">
                <img src={solinix} alt="Solinix Logo" />
            </div>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                )}
            </button>

            <nav className={isOpen ? "nav-open" : ""}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
                <Link to="/blog" onClick={(e) => { e.preventDefault(); onBlogClick(); setIsOpen(false); }}>Blog</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                <div className="mobile-only-action">
                    <Link
                        to="/contact"
                        className="consult-btn mobile-consult-btn"
                        onClick={() => setIsOpen(false)}
                    >
                        Let's talk
                    </Link>
                </div>
            </nav>
            <div className="nav-actions">
                <Link to="/contact" className="consult-btn">
                    Let's talk
                </Link>
            </div>
        </header>
    );
}
