import React, { useState } from "react";
import solinix from "../../assets/solinix.png";

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
                        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                        <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                        <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                )}
            </button>

            <nav className={isOpen ? "nav-open" : ""}>
                <a href="/#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="/#about" onClick={() => setIsOpen(false)}>About Us</a>
                <a href="/#services" onClick={() => setIsOpen(false)}>Services</a>
                <a href="/#products" onClick={() => setIsOpen(false)}>Products</a>
                <a href="#" onClick={(e) => { e.preventDefault(); onBlogClick(); setIsOpen(false); }}>Blog</a>
                <a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a>
                <div className="mobile-only-action">
                    <a href="/#contact" className="consult-btn mobile-consult-btn" onClick={() => setIsOpen(false)}>
                        Let's talk
                    </a>
                </div>
            </nav>
            <div className="nav-actions">
                <a href="/#contact" className="consult-btn">
                    Let's talk
                </a>
            </div>
        </header>
    );
}
