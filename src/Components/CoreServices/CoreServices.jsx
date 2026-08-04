import React from "react";
import { services } from "../../data/services";

// VIEW: "Our Core Services" cards
export default function CoreServices() {
    return (
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
    );
}
