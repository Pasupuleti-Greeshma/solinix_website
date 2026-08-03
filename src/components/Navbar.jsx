import { NavLink } from "react-router-dom";
import "./Navbar.css";
import solinix from "../assets/solinix.png";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">
                <img src={solinix} alt="Solinix Logo" />
            </div>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <a href="#consultation" className="consult-btn">
                Let's Talk
            </a>
        </header>
    );
}