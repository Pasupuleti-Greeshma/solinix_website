import React from "react";
import "./app1.css";

export default function About() {
    const teamMembers = [
        { name: 'Sarath Chandra', role: 'Founder & CEO' },
        { name: 'Karthik M', role: 'CTO' },
        { name: 'Naveen R', role: 'Lead Developer' },
        { name: 'Divya N', role: 'UI/UX Designer' },
        { name: 'Sandeep K', role: 'Marketing Lead' },
    ];

    const focusItems = [
        { title: 'Client Success', desc: 'We build solutions that solve real business problems.' },
        { title: 'Quality & Security', desc: 'Clean code, best practices and security in everything we build.' },
        { title: 'Innovation', desc: 'We embrace new technologies to deliver smarter solutions.' },
        { title: 'Partnership', desc: 'We work as your partner, not just a service provider.' },
        { title: 'Support', desc: "We're with you even after delivery." },
    ];

    return (
        <div className="about-page-container" id="about">
            {/* ABOUT HERO SECTION */}
            <section className="hero-section">
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
                        <button className="btn-primary">
                            Our Story <span className="arrow">→</span>
                        </button>
                        <button className="btn-secondary">
                            Our Work <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* OUR STORY SECTION */}
            <section className="our-story-section">
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

            {/* TEAM SECTION */}
            <section className="team-section">
                <div className="team-container">
                    <div className="team-header">
                        <div>
                            <span className="sub-heading">OUR TEAM</span>
                            <h2 className="main-heading">The People Behind Solinix</h2>
                        </div>
                        <button className="join-team-btn">
                            Join Our Team &rarr;
                        </button>
                    </div>

                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div className="team-card" key={index}>
                                <div className="team-image-box">
                                    <div className="placeholder-avatar"></div>
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                    <div className="social-icons">
                                        <span className="social-icon">in</span>
                                        <span className="social-icon">📸</span>
                                        <span className="social-icon">✉</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* WHAT WE FOCUS ON SECTION */}
                    <div className="focus-section">
                        <span className="sub-heading center">WHAT WE FOCUS ON</span>
                        <div className="focus-grid">
                            {focusItems.map((item, index) => (
                                <div className="focus-item" key={index}>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}