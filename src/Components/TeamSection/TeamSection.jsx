import React from "react";
import { teamMembers } from "../../data/teamMembers";
import { focusItems } from "../../data/focusItems";

// VIEW: Team grid + "What We Focus On"
export default function TeamSection() {
    return (
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
    );
}
