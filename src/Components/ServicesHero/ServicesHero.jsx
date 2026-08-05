import React from "react";
import { services } from "../../data/services";
import { techStack } from "../../data/techStack";
import { processSteps } from "../../data/processSteps";

// VIEW: "Our Services" hero/intro section
export default function ServicesHero() {
    return (
        <>
            <section className="hero-section" id="services">
                <div className="hero-background"></div>
                <div className="hero-container">
                    <div className="hero-content">
                        <span className="sub-heading">OUR SERVICES</span>
                        <h1 className="main-heading">
                            Digital Solutions<br />
                            Built Around <span className="highlight">You.</span>
                        </h1>
                        <p className="description">
                            We build modern, scalable and reliable software solutions
                            that help businesses automate, grow and stay ahead
                            in a competitive world.
                        </p>
                        <button className="cta-button">
                            Let's Build Together <span className="arrow">→</span>
                        </button>
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
                            <a href="/#contact" className="lets-talk-white-btn" style={{ textDecoration: 'none' }}>Let's Talk &rarr;</a>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
