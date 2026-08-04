import React from "react";
import { useContactForm } from "../../controllers/useContactForm";

// VIEW: Info cards + Contact form + Map + Bottom CTA
// Business logic (state, submit handler) comes from the CONTROLLER (useContactForm)
export default function ContactPageSection() {
    const { formData, handleChange, handleConsultationSubmit } = useContactForm();

    return (
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
                        <p>hello@solinix.com<br />We'll reply within 24 hours</p>
                    </div>
                </div>

                <div className="info-card">
                    <div className="card-icon-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </div>
                    <div>
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <span>in</span>
                            <span>📷</span>
                            <span>git</span>
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
                                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Subject</label>
                            <input type="text" name="subject" placeholder="How can we help you?" value={formData.subject} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" placeholder="Tell us about your project or requirement..." value={formData.message} onChange={handleChange}></textarea>
                        </div>

                        <div className="form-checkbox">
                            <input type="checkbox" id="terms" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
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

            <div className="bottom-cta-banner">
                <div className="cta-left">
                    <div className="cta-icon-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </div>
                    <div>
                        <h3>Ready to Start Your Next Project?</h3>
                        <p>Let's discuss how we can help you achieve your goals.</p>
                    </div>
                </div>

                <div className="cta-right">
                    <button className="schedule-call-btn">Schedule a Call &rarr;</button>
                    <div className="team-avatars-note">
                        <div className="avatars-group">
                            <span>👤</span><span>👤</span><span>👤</span>
                        </div>
                        <span>Our team is<br />ready to help</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
