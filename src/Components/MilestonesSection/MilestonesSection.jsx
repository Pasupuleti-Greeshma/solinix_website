import React from "react";
import { milestones } from "../../data/milestones";

// VIEW: "Our Journey" timeline + CTA banner
export default function MilestonesSection() {
    return (
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

                <div className="cta-banner-card">
                    <div className="cta-left">
                        <div className="cta-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </div>
                        <div>
                            <h3>Let's Build Something Amazing Together!</h3>
                            <p>Have a project in mind? We'd love to hear about it.</p>
                        </div>
                    </div>

                    <div className="cta-right">
                        <a href="/#contact" className="lets-talk-btn" style={{ textDecoration: 'none' }}>Let's Talk &rarr;</a>
                        <div className="cta-team-avatars">
                            <div className="avatar"></div>
                            <div className="avatar"></div>
                            <div className="avatar"></div>
                        </div>
                        <span className="cta-ready-text">We're ready to<br />bring your ideas to life.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
