import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-col brand-col">
                    <h2 className="footer-logo">
                        SOLI<span>NIX</span>
                    </h2>

                    <p>
                        Solinix is a software development company passionate about building
                        innovative digital solutions that drive business growth.
                    </p>
                </div>

                <div className="footer-col">
                    <h3>Company</h3>

                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Services</h3>

                    <ul>
                        <li>Web Development</li>
                        <li>Mobile Development</li>
                        <li>AI & Automation</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Products</h3>

                    <ul>
                        <li>Stayzzy</li>
                        <li>PGMove</li>
                        <li>HRMS</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact</h3>

                    <p>+91 91084 21609</p>
                    <p>hello@solinix.com</p>
                    <p>Hyderabad</p>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 Solinix. All rights reserved.
            </div>
        </footer>
    );
}