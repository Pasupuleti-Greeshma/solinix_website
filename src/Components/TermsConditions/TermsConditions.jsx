import React from "react";
import "./TermsConditions.css";

export default function TermsConditions() {
    // ScrollToTop component handles page scroll reset globally

    return (
        <section className="policy-section">
            <div className="policy-container">
                <span className="sub-heading">TERMS & CONDITIONS</span>
                <h1 className="main-heading">Terms & Conditions</h1>
                <p className="policy-date">Last updated: August 4, 2026</p>

                <div className="policy-content">
                    <p>
                        Welcome to Solinix! These terms and conditions outline the rules and regulations for the use of Solinix's Website.
                    </p>
                    <p>
                        By accessing this website we assume you accept these terms and conditions. Do not continue to use Solinix if you do not agree to take all of the terms and conditions stated on this page.
                    </p>

                    <h2>1. License</h2>
                    <p>
                        Unless otherwise stated, Solinix and/or its licensors own the intellectual property rights for all material on Solinix. All intellectual property rights are reserved. You may access this from Solinix for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                    <p>You must not:</p>
                    <ul>
                        <li>Republish material from Solinix</li>
                        <li>Sell, rent or sub-license material from Solinix</li>
                        <li>Reproduce, duplicate or copy material from Solinix</li>
                        <li>Redistribute content from Solinix</li>
                    </ul>

                    <h2>2. Hyperlinking to our Content</h2>
                    <p>
                        Organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
                    </p>

                    <h2>3. Liability Disclaimer</h2>
                    <p>
                        To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                    </p>
                    <ul>
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    </ul>

                    <h2>4. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and defined in accordance with the laws of India. Solinix and yourself irrevocably consent that the courts of Hyderabad, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>

                    <h2>5. Contact Us</h2>
                    <p>
                        If you have any questions or suggestions about our Terms & Conditions, do not hesitate to contact us at: <strong>solinix.tech@gmail.com</strong>
                    </p>
                </div>
            </div>
        </section>
    );
}
