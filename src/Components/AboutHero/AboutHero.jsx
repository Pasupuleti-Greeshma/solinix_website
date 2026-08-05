import React from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "../../data/teamMembers";
import { focusItems } from "../../data/focusItems";
import { milestones } from "../../data/milestones";

// VIEW: About / hero section with background image
export default function AboutHero() {
    return (
        <>
            <section className="hero-section about-hero-section">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <span className="sub-heading">ABOUT SOLINIX</span>
                    <h1 className="main-heading">
                        Building Digital<br />
                        Solutions That <span className="highlight">Matter</span>
                    </h1>
                    <p className="description">
                        We are a team of problem-solvers, innovators, and<br />
                        dreamers who love turning ideas into powerful<br />
                        digital products.
                    </p>
                    <div className="button-group">
                        <button className="btn-primary">Our Story <span className="arrow">→</span></button>
                        <button className="btn-secondary">Our Work <span className="arrow">→</span></button>
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
        </>
    );
}
