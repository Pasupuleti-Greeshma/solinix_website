import React from "react";
import solinix from "../../assets/solinix.png";

// VIEW: Top navigation bar
export default function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">
                <img src={solinix} alt="Solinix Logo" />
            </div>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#products">Products</a>
                <a href="javascript:void(0);" onClick="alert('Coming soon!!!');">Blog</a>
                <a href="#contact">Contact</a>
            </nav>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <a href="#contact" className="consult-btn">
                    Let's talk
                </a>
            </div>
        </header>
    );
}
