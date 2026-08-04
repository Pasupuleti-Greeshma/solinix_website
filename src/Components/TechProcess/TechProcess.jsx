import React from "react";
import { techStack } from "../../data/techStack";
import { processSteps } from "../../data/processSteps";

// VIEW: Auto-scrolling tech stack bar + "How We Work" process timeline
export default function TechProcess() {
    return (
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
                        <div className="cta-avatars-group">
                            <div className="avatar-img"></div>
                            <div className="avatar-img"></div>
                            <div className="avatar-img"></div>
                        </div>
                        <span className="cta-footer-text">We're ready to<br />bring your ideas to life.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
