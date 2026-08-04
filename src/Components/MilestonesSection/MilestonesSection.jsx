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

               
            </div>
        </section>
    );
}
