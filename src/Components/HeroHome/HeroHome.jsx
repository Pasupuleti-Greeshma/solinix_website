import React from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "../../data/teamMembers";
import { focusItems } from "../../data/focusItems";
import { milestones } from "../../data/milestones";
import { services } from "../../data/services";
import { techStack } from "../../data/techStack";
import { processSteps } from "../../data/processSteps";


export default function Home() {
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="hero-section" id="home">
                <div className="home-hero-content">
                    <span className="hero-tag">
                        BUILDING DIGITAL SOLUTIONS THAT MATTER
                    </span>

                    <h1>
                        We build software <br />
                        that drives real <br />
                        <span className="highlight">business growth</span>
                    </h1>

                    <p>
                        Solinix helps startups and enterprises transform ideas into
                        <br />
                        powerful digital products with modern technologies and
                        user-first approach.
                    </p>

                    <div className="hero-buttons">
                        <a href="#services" className="primary-btn">
                            Explore Our Services →
                        </a>

                        <Link to="/products" className="secondary-btn">
                            View Our Work →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= DIGITAL SOLUTIONS ================= */}
            <section className="digital-solutions-section">
                <div className="container">

                    <div className="section-header">
                        <span className="sub-heading">
                            What We Do
                        </span>

                        <h2 className="main-heading">
                            End-to-end Digital Solutions
                        </h2>
                    </div>

                    <div className="cards-grid">

                        <div className="solution-card">
                            <div className="icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </div>

                            <div className="card-content">
                                <h3>Software Development</h3>
                                <p>Custom software built for your business needs.</p>
                            </div>
                        </div>

                        <div className="solution-card">
                            <div className="icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                                </svg>
                            </div>

                            <div className="card-content">
                                <h3>Web & Mobile Apps</h3>
                                <p>Responsive, high performance apps that users love.</p>
                            </div>
                        </div>

                        <div className="solution-card">
                            <div className="icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82A1.65 1.65 0 0 0 3 13H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9h.09a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                </svg>
                            </div>

                            <div className="card-content">
                                <h3>Business Automation</h3>
                                <p>Automate workflows and improve operational efficiency.</p>
                            </div>
                        </div>

                        <div className="solution-card">
                            <div className="icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                                </svg>
                            </div>

                            <div className="card-content">
                                <h3>Digital Solutions</h3>
                                <p>Cloud, data and technology solutions for the future.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="our-story-section" id="about">
                <div className="our-story-container">
                    <div className="story-left">
                        <span className="story-sub-heading">OUR STORY</span>
                        <h2 className="story-main-heading">From Ideas to <span className="highlight">Impact</span></h2>
                        <p className="story-text">
                            Solinix was founded with a simple belief - technology should simplify complexity and create real impact.
                        </p>
                        <p className="story-text">
                            What started as a small team of passionate developers has grown into a trusted technology partner for startups and enterprises.
                        </p>
                        <p className="story-text">
                            We combine innovation, design and engineering to deliver products that are scalable, secure and future-ready.
                        </p>
                    </div>

                    <div className="story-right">
                        <div className="story-card">
                            <div className="story-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                            </div>
                            <h3>Mission</h3>
                            <p>To empower businesses with smart, scalable and reliable digital solutions.</p>
                        </div>

                        <div className="story-card">
                            <div className="story-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                            <h3>Vision</h3>
                            <p>To be a global technology partner driving innovation and digital transformation.</p>
                        </div>

                        <div className="story-card">
                            <div className="story-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon></svg>
                            </div>
                            <h3>Values</h3>
                            <p>Integrity, Innovation, Collaboration and Customer Success.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-section">
                <div className="team-container">
                    <div className="team-header">
                        <div>
                            <span className="sub-heading">OUR TEAM</span>
                            <h2 className="main-heading">The People Behind Solinix</h2>
                        </div>
                    </div>

                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div className="team-card" key={index}>
                                <div className="team-image-box">
                                    <img src={member.imageUrl} alt={member.name} className="team-member-photo" style={{ objectPosition: member.objectPosition || 'center' }} />
                                    <div className="placeholder-avatar"></div>
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                    <div className="social-icons">
                                        <span className="social-icon">in</span>
                                        <span className="social-icon">✉</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="focus-section">
                        <span className="sub-heading center">WHAT WE FOCUS ON</span>
                        <div className="focus-grid">
                            {focusItems.map((item, index) => (
                                <div className="focus-item" key={index}>
                                    <div className="focus-icon-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon></svg>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="milestones-section">
                <div className="milestones-container">
                    <div className="milestones-header">
                        <span className="sub-heading">OUR JOURNEY</span>
                        <h2 className="main-heading">Milestones That Define Our Growth</h2>
                    </div>

                    <div className="timeline-wrapper">
                        <div className="timeline-line"></div>
                        <div className="timeline-items">
                            {milestones.map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-icon-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                                    </div>
                                    <span className="timeline-year">{item.year}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </section>

            <section className="core-services-section" id="services">
                <div className="core-services-container">
                    <div className="core-services-header">
                        <span className="sub-heading">WHAT WE DO</span>
                        <h2 className="main-heading">Our Core Services</h2>
                    </div>

                    <div className="service-cards-container">
                        {services.map((service, index) => (
                            <div className="service-card" key={index}>
                                <div className="service-card-top">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                    <ul className="feature-list">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex}>
                                                <span className="check-icon">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-card-bottom">
                                    <div className="tech-section">
                                        <span className="tech-label">⚙ TECHNOLOGIES USED</span>
                                        <div className="tech-tags">
                                            {service.technologies.map((tech, tIndex) => (
                                                <span className="tech-tag" key={tIndex}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <a href="#consultation" className="explore-link">Explore Service →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="tech-process-section" id="process">
                <div className="container">
                    <div className="tech-stack-wrapper">
                        <div className="tech-stack-container">
                            <span className="tech-stack-title">TECHNOLOGY STACK WE USE</span>
                            <div className="tech-items-row">
                                {techStack.concat(techStack).map((tech, index) => (
                                    <div className="tech-item" key={`${tech.name}-${index}`}>
                                        <div className="tech-icon-circle">
                                            <img src={tech.icon} alt={tech.name} className="tech-logo" />
                                        </div>
                                        <span className="tech-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="process-header">
                        <span className="sub-heading">OUR PROCESS</span>
                        <h2 className="main-heading">How We Work</h2>
                    </div>

                    <div className="process-timeline-wrapper">
                        <div className="process-dashed-line"></div>
                        <div className="process-steps-grid">
                            {processSteps.map((item, index) => (
                                <div className="process-step-card" key={index}>
                                    <div className="process-number-badge">
                                        <span>{item.step}</span>
                                        <div className="process-icon-subcircle"></div>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="contact-top-cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '40px' }}>
                        <div className="info-card">
                            <div className="card-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <h4>Call Us</h4>
                                <p>+91 91084 21609<br />Mon - Sat, 10:00 AM - 7:00 PM</p>
                            </div>
                        </div>

                        <div className="info-card" >
                            <div className="card-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div>
                                <h4>Email Us</h4>
                                <p>solinix.tech@gmail.com<br />We'll reply within 24 hours</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="card-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </div>
                            <div>
                                <h4>Follow Us</h4>
                                <div className="social-icons" style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#523ee8" }}><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#523ee8" }}><i className="fab fa-instagram"></i></a>
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
                    <div className="transformation-cta-banner">
                        <div className="cta-left-content">
                            <div className="cta-paper-plane-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </div>
                            <div>
                                <h3>Ready to Transform Your Ideas into Reality?</h3>
                                <p>Let's build something amazing together.</p>
                            </div>
                        </div>

                        <div className="cta-right-content">
                            <Link to="/contact" className="lets-talk-white-btn" style={{ textDecoration: 'none' }}>Let's Talk &rarr;</Link>


                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}