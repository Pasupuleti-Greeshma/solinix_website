import React from "react";
import { useContactForm } from "../../controllers/useContactForm";

// VIEW: Contact intro section with background image
export default function ContactHero() {
    const { formData, handleChange, handleConsultationSubmit } = useContactForm();
    return (
        <>
            <section className="contact-section" id="contact">
                <div className="contact-bg-layer"></div>
                <div className="contact-container">
                    <div className="contact-content-box">
                        <span className="sub-heading">CONTACT US</span>
                        <h2 className="main-heading">
                            Let's Build Something<br />
                            Amazing <span className="highlight">Together.</span>
                        </h2>
                        <p className="description">
                            Have a project in mind or want to learn more about our services and products? We'd love to hear from you. Our team is ready to help you bring your ideas to life.
                        </p>

                        <div className="contact-features-row">
                            <div className="contact-feature-item">
                                <div className="feature-icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                                </div>
                                <div>
                                    <h4>Quick Response</h4>
                                    <p>We reply within 24 hours</p>
                                </div>
                            </div>

                            <div className="contact-feature-item">
                                <div className="feature-icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                </div>
                                <div>
                                    <h4>Expert Support</h4>
                                    <p>Our team is here to help</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-page-wrapper">
                <div className="contact-top-cards">
                    <div className="info-card">
                        <div className="card-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div>
                            <h4>Our Location</h4>
                            <p>Hyderabad, India<br />500081</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="card-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                            <h4>Call Us</h4>
                            <p>+91 91084 21609<br />Mon - Sat, 10:00 AM - 7:00 PM</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="card-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <div>
                            <h4>Email Us</h4>
                            <p><a href="mailto:solinix.tech@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>solinix.tech@gmail.com</a><br />We'll reply within 24 hours</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="card-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </div>
                        <div>
                            <h4>Follow Us</h4>
                            <div className="social-icons" style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
                                <a href="https://www.linkedin.com/in/sarath-chandra-30a251391/" target="_blank" rel="noopener noreferrer" style={{ color: "#523ee8" }}><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/pgmovein?igsh=dGN3MGJ6cjNmMTZs" target="_blank" rel="noopener noreferrer" style={{ color: "#523ee8" }}><i className="fab fa-instagram"></i></a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#523ee8" }}
                                >
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="mailto:solinix.tech@gmail.com"
                                    style={{ color: "#523ee8" }}
                                >
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-main-grid">
                    <div className="contact-form-box">
                        <h2 className="form-title">Send Us a Message</h2>
                        <p className="form-subtitle">Fill out the form below and we'll get back to you soon.</p>

                        <form onSubmit={handleConsultationSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" name="subject" placeholder="How can we help you?" value={formData.subject} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" placeholder="Tell us about your project or requirement..." value={formData.message} onChange={handleChange}></textarea>
                            </div>

                            <div className="form-checkbox">
                                <input type="checkbox" id="terms" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} required />
                                <label htmlFor="terms">
                                    I agree to the <span className="link-text">Privacy Policy</span> and <span className="link-text">Terms &amp; Conditions</span>
                                </label>
                            </div>

                            <button type="submit" className="submit-btn">Send Message &rarr;</button>
                        </form>
                    </div>

                    <div className="contact-map-box">
                        <iframe
                            title="Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.335079148303!2d78.3852!3d17.4435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzM2LjQiTiA3OMKwMjMnMDYuNyJF!5e0!3m2!1sen!2sin!4f1635000000000!5m2!1sen!2sin"
                            className="map-bg"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>

                        <div className="map-overlay-card">
                            <div className="map-card-text">
                                <h4>Visit Our Office</h4>
                                <p>We'd love to meet you in person. Schedule a visit or stop by our office.</p>
                            </div>
                            <button className="directions-btn">Get Directions &rarr;</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
