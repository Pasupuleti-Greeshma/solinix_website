import React, { useState } from "react";
import "./app1.css";

// Import assets as needed
import solinix from "./assets/solinix.png";
import hrmsImg from "./assets/hrms.png";
import pgImg from "./assets/pg.png";
import tenantImg from "./assets/pg.png";
import stayzyImg from "./assets/stayzy.png";
import sarathImg from './assets/sarath.png';
import karthikImg from './assets/karthik.png';
import naveenImg from './assets/naveen.png';
import divyaImg from './assets/divya.png';
import sandeepImg from './assets/sandeep.png';

export default function SingleScrollPage() {
    const handleConsultationSubmit = (e) => {
        e.preventDefault();
        alert("Consultation request submitted successfully madam!");
    };
    const coreservices = [
        {
            title: 'Software Development',
            description: 'Custom software solutions built for your unique business needs and goals.',
        },
        {
            title: 'Web & Mobile Apps',
            description: 'Responsive web and mobile applications that deliver smooth experiences.',
        },
        {
            title: 'Business Automation',
            description: 'Automate workflows and processes to improve efficiency and reduce costs.',
        },
        {
            title: 'Cloud & DevOps',
            description: 'Scalable cloud solutions and DevOps practices for speed, security and reliability.',
        },
        {
            title: 'AI & Automation',
            description: 'Leverage AI and automation to make smarter decisions and faster.',
        },
        {
            title: 'Cybersecurity',
            description: 'Protect your systems and data with industry-best security practices.',
        },
        {
            title: 'Digital Marketing',
            description: 'Data-driven marketing strategies that boost your brand, reach and conversions.',
        },
        {
            title: 'Support & Maintenance',
            description: "We're with you even after delivery to keep your systems running smoothly.",
        },
    ];
    const teamMembers = [
        { name: 'Sarath Chandra', role: 'Founder & CEO', imageUrl: sarathImg },
        { name: 'Karthik M', role: 'CTO', imageUrl: karthikImg },
        { name: 'Naveen R', role: 'Lead Developer', imageUrl: naveenImg },
        { name: 'Divya N', role: 'UI/UX Designer', imageUrl: divyaImg },
        { name: 'Sandeep K', role: 'Marketing Lead', imageUrl: sandeepImg },
    ];
    const focusItems = [
        { title: 'Client Success', desc: 'We build solutions that solve real business problems.' },
        { title: 'Quality & Security', desc: 'Clean code, best practices and security in everything we build.' },
        { title: 'Innovation', desc: 'We embrace new technologies to deliver smarter solutions.' },
        { title: 'Partnership', desc: 'We work as your partner, not just a service provider.' },
        { title: 'Support', desc: "We're with you even after delivery." },
    ];
    const milestones = [
        {
            year: '2020',
            title: 'The Beginning',
            desc: 'Solinix was founded with a vision to build innovative digital solutions.',
        },
        {
            year: '2021',
            title: 'First Milestone',
            desc: 'Delivered our first 10+ projects and built a strong client base.',
        },
        {
            year: '2022',
            title: 'Product Launch',
            desc: 'Launched our own products - Stayzzy and PGMove.',
        },
        {
            year: '2023',
            title: 'Scaling Up',
            desc: 'Expanded our team and served clients across multiple industries.',
        },
        {
            year: '2024+',
            title: 'Future Ahead',
            desc: 'Continuing our journey to create solutions that drive real impact.',
        },
    ];

    const techStack = [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ];

    const processSteps = [
        {
            step: '01',
            title: 'Discover',
            desc: 'We understand your business, goals and challenges.',
        },
        {
            step: '02',
            title: 'Plan',
            desc: 'We analyze and create a clear roadmap tailored to your needs.',
        },
        {
            step: '03',
            title: 'Build',
            desc: 'We design, develop and test with quality and attention to detail.',
        },
        {
            step: '04',
            title: 'Deliver',
            desc: 'We deliver on time and ensure a smooth implementation.',
        },
        {
            step: '05',
            title: 'Support',
            desc: 'We provide ongoing support and continuous improvement.',
        },
    ];
    const services = [
        {
            title: "UI/UX Design",
            description: "Creative and intuitive designs that enhance engagement. User-centered, conversion-optimized and beautifully crafted.",
            features: ["Wireframing", "Prototyping", "Design Systems", "User Research"],
            technologies: ["Figma", "Wireframing", "Design Systems", "Prototyping"]
        },
        {
            title: "Digital Marketing",
            description: "Result-driven marketing strategies to grow your brand and reach. SEO, social media, paid campaigns and more.",
            features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"],
            technologies: ["Google Analytics", "Google Ads", "SEO Suite", "Meta Ads"]
        },
        {
            title: "Cloud & Maintenance",
            description: "Secure hosting, cloud deployment and ongoing support to keep your software running at peak performance 24/7.",
            features: ["AWS & Azure", "DevOps & CI/CD", "Performance Monitoring", "24/7 Support"],
            technologies: ["AWS", "Docker", "Kubernetes", "Redis"]
        }
    ];

    const blogs = [
        {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
            category: "Web Development",
            title: "Why Every Business Needs a Professional Website",
            description: "Discover how a responsive, fast, and SEO-friendly website helps businesses grow, attract customers, and increase revenue.",
            date: "July 25, 2026",
            read: "5 min read"
        },
        {
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
            category: "Frontend",
            title: "React.js Best Practices for Modern Applications",
            description: "Learn how reusable components, hooks, and optimized rendering create scalable React applications.",
            date: "July 20, 2026",
            read: "7 min read"
        },
        {
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
            category: "Backend",
            title: "Building Secure REST APIs with Spring Boot",
            description: "Understand authentication, validation, JWT security, and REST API best practices for enterprise applications.",
            date: "July 15, 2026",
            read: "6 min read"
        },
    ];

    const servicesList = [
        {
            icon: "fa-solid fa-layer-group",
            title: "Web Development",
            description: "We build responsive, modern, and user-friendly interfaces using React.js, HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS to deliver exceptional user experiences."
        },
        {
            icon: "fa-solid fa-layer-group",
            title: "Android Development",
            description: "Develop secure and scalable backend applications using Java, Spring Boot, REST APIs, Hibernate, MySQL, and Microservices with enterprise-level architecture."
        },
        {
            icon: "fa-solid fa-layer-group",
            title: "AI-Assisted Development",
            description: "Complete end-to-end web application development combining React, Java, Spring Boot, MySQL, REST APIs, authentication, and deployment solutions."
        }, { icon: "fa-solid fa-layer-group", title: "Database Management", description: "Efficient database design, optimization, migration, backup, and performance tuning using MySQL and relational database technologies." }, { icon: "fa-solid fa-layer-group", title: "API Development", description: "Design and integrate secure RESTful APIs that enable seamless communication between frontend, backend, and third-party applications." }, { icon: "fa-solid fa-layer-group", title: "Deployment & Support", description: "Deploy applications on cloud platforms, maintain infrastructure, monitor performance, and provide continuous support and updates." }
    ];

    const roadmapSteps = [
        {
            number: "01",
            title: "Planning & Strategy",
            desc: "Understanding your business goals, target audience, and defining project requirements.",
            icon: "fa-solid fa-compass-drafting"
        },
        {
            number: "02",
            title: "UI / UX Design",
            desc: "Creating modern, intuitive, user-friendly, and responsive wireframes and prototypes.",
            icon: "fa-solid fa-wand-magic-sparkles"
        },
        {
            number: "03",
            title: "Development",
            desc: "Building robust, scalable, secure, and high-performance frontend and backend applications.",
            icon: "fa-solid fa-code"
        }, {
            number: "04",
            title: "Testing & QA",
            desc: "Ensuring flawless quality through rigorous cross-browser testing, debugging, and optimization.",
            icon: "fa-solid fa-shield-halved"
        },
        {
            number: "05",
            title: "Deployment & Support",
            desc: "Launching the product securely to cloud servers with continuous monitoring and maintenance.",
            icon: "fa-solid fa-rocket"
        }
    ];
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className={`solinx-single-scroll-page ${!isDarkMode ? "light-theme" : ""}`}>
            {/* INTEGRATED NAVBAR */}
            <header className="navbar">
                <div className="logo">
                    <img src={solinix} alt="Solinix Logo" />
                </div>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#products">Products</a>
                    <a href="#roadmap">Process</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                 
                    <a href="#consultation" className="consult-btn">
                        Let's talk
                    </a>
                </div>
            </header>

            {/* 1. HOME / HERO SECTION */}
            <section className="hero-section" id="home">
                <div className="home-hero-content">
                    <span className="hero-tag">BUILDING DIGITAL SOLUTIONS THAT MATTER</span>
                    <h1>We build software <br />that drives real <br /><span className="highlight">business growth</span></h1>
                    <p>Solinix helps startups and enterprises transform ideas into <br />powerful digital products with modern technologies and user-first approach.</p>
                    <div className="hero-buttons">
                        <a href="#services" className="primary-btn">Explore Our Services →</a>
                        <a href="#products" className="secondary-btn">View Our Work →</a>
                    </div>
                    {/* <div className="trusted-by">
                        <span className="trusted-title">TRUSTED BY GROWING BUSINESSES</span>
                        <div className="logos-row">
                            <span>✦ Vertex</span>
                            <span>✦ innova</span>
                            <span>✦ CloudPeak</span>
                            <span>✦ Brightline</span>
                            <span>✦ HexaLab</span>
                        </div>
                    </div> */}
                </div>

                {/* <div className="stats-bar">
                    <div className="stat-item">
                        <div className="stat-icon">🏆</div>
                        <div>
                            <h3>50+</h3>
                            <p>Projects Delivered</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon">🏆</div>
                        <div>
                            <h3>30+</h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon">🏆</div>
                        <div>
                            <h3>98%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon">🏆</div>
                        <div>
                            <h3>5+</h3>
                            <p>Industries Served</p>
                        </div>
                    </div>
                </div> */}
            </section>
            <section class="digital-solutions-section">
                <div class="container">
                    <div class="section-header">
                        <span class="sub-heading">What We Do</span>
                        <h2 class="main-heading">End-to-end Digital Solutions</h2>
                    </div>

                    <div class="cards-grid">

                        <div class="solution-card">
                            <div class="icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </div>
                            <div class="card-content">
                                <h3>Software Development</h3>
                                <p>Custom software built for your business needs.</p>
                            </div>
                        </div>


                        <div class="solution-card">
                            <div class="icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>
                            <div class="card-content">
                                <h3>Web & Mobile Apps</h3>
                                <p>Responsive, high performance apps that users love.</p>
                            </div>
                        </div>


                        <div class="solution-card">
                            <div class="icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                            </div>
                            <div class="card-content">
                                <h3>Business Automation</h3>
                                <p>Automate workflows and improve operational efficiency.</p>
                            </div>
                        </div>


                        <div class="solution-card">
                            <div class="icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                            </div>
                            <div class="card-content">
                                <h3>Digital Solutions</h3>
                                <p>Cloud, data and technology solutions for the future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="products-section">
                <div class="container">

                    <div class="section-header">
                        <span class="sub-heading">Our Products</span>
                        <h2 class="main-heading">Built to Simplify Your Business</h2>
                    </div>


                    <div class="products-grid">

                        <div class="product-card">
                            <div class="product-info">
                                <div className="product-title-area">
                                    <div className="product-icon stayzzy-icon">
                                        <img
                                            src={stayzyImg}
                                            alt="Stayzzy"
                                            className="product-logo"
                                        />
                                    </div>
                                    <h3>Stayzzy</h3>
                                </div>
                                <p>Complete PG management app for owners and tenants.</p>
                                <a href="#" class="learn-more">Learn More &rarr;</a>
                            </div>
                            <div class="product-mockup phone-mockup">
                                <div class="mockup-screen"></div>
                            </div>
                        </div>


                        <div class="product-card">
                            <div class="product-info">
                                <div class="product-title-area">
                                    <div class="product-icon pgmove-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <h3>PGMove</h3>
                                </div>
                                <p>Marketplace to discover and book PGs and flats easily.</p>
                                <a href="#" class="learn-more">Learn More &rarr;</a>
                            </div>
                            <div class="product-mockup tablet-mockup">
                                <div class="mockup-screen"></div>
                            </div>
                        </div>


                        <div class="product-card">
                            <div class="product-info">
                                <div class="product-title-area">
                                    <div class="product-icon hrms-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    </div>
                                    <h3>HRMS</h3>
                                </div>
                                <p>Smart HRMS to manage employees, payroll and operations.</p>
                                <a href="#" class="learn-more">Learn More &rarr;</a>
                            </div>
                            <div class="product-mockup tablet1-mockup">
                                <div class="mockup-screen"></div>
                            </div>
                        </div>
                    </div>


                    <div class="features-bar">
                        <div class="feature-item">
                            <div class="feature-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <div>
                                <h4>Reliable & Secure</h4>
                                <p>We build secure and scalable solutions you can rely on.</p>
                            </div>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </div>
                            <div>
                                <h4>Client First Approach</h4>
                                <p>Your goals are our priority. We work as your partner.</p>
                            </div>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                            </div>
                            <div>
                                <h4>Support That Cares</h4>
                                <p>We're with you even after delivery.</p>
                            </div>
                        </div>
                    </div>


                    <div class="cta-banner">
                        <div class="cta-left">
                            <div class="cta-rocket-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3"></path></svg>
                            </div>
                            <div>
                                <h3>Have an idea? Let's build it together.</h3>
                                <p>Tell us about your project and we'll help you turn it into reality.</p>
                            </div>
                        </div>
                        <button class="lets-talk-btn">Let's Talk &rarr;</button>
                    </div>

                </div>
            </section>
            <section className="hero-section">
                {/* Background image container with gradient fades */}
                <div className="hero-background"></div>

                {/* Left side content */}
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

                {/* Right side floating text
                <div className="hero-right-text">
                    <span>Code.</span>
                    <span>Build.</span>
                    <span>Solve.</span>
                    <span>Repeat.</span>
                </div> */}
            </section>

            <section className="our-story-section">
                <div className="our-story-container">

                    {/* Left Side: Text Content */}
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

                    {/* Right Side: Mission, Vision, Values Cards */}
                    <div className="story-right">

                        {/* Mission */}
                        <div className="story-card">
                            <div className="story-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                            </div>
                            <h3>Mission</h3>
                            <p>To empower businesses with smart, scalable and reliable digital solutions.</p>
                        </div>

                        {/* Vision */}
                        <div className="story-card">
                            <div className="story-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                            <h3>Vision</h3>
                            <p>To be a global technology partner driving innovation and digital transformation.</p>
                        </div>

                        {/* Values */}
                        <div className="story-card">
                            <div className="story-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon></svg>
                            </div>
                            <h3>Values</h3>
                            <p>Integrity, Innovation, Collaboration and Customer Success.</p>
                        </div>

                    </div>

                </div>
            </section>

            <section className="team-section">
                <div className="team-container">

                    {/* Top Header */}
                    <div className="team-header">
                        <div>
                            <span className="sub-heading">OUR TEAM</span>
                            <h2 className="main-heading">The People Behind Solinix</h2>
                        </div>
                        <button className="join-team-btn">
                            Join Our Team &rarr;
                        </button>
                    </div>

                    {/* Team Cards Grid */}
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div className="team-card" key={index}>
                                <div className="team-image-box">
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="team-member-photo"
                                    />
                                    {/* Replace with actual image src */}
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

                    {/* What We Focus On Section */}
                    <div className="focus-section">
                        <span className="sub-heading center">WHAT WE FOCUS ON</span>
                        <div className="focus-grid">
                            {focusItems.map((item, index) => (
                                <div className="focus-item" key={index}>
                                    <div className="focus-icon-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon></svg>
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

                    {/* Section Header */}
                    <div className="milestones-header">
                        <span className="sub-heading">OUR JOURNEY</span>
                        <h2 className="main-heading">Milestones That Define Our Growth</h2>
                    </div>

                    {/* Timeline Row */}
                    <div className="timeline-wrapper">
                        <div className="timeline-line"></div>
                        <div className="timeline-items">
                            {milestones.map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-icon-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                                    </div>
                                    <span className="timeline-year">{item.year}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA Banner */}
                    <div className="cta-banner-card">
                        <div className="cta-left">
                            <div className="cta-icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </div>
                            <div>
                                <h3>Let's Build Something Amazing Together!</h3>
                                <p>Have a project in mind? We'd love to hear about it.</p>
                            </div>
                        </div>

                        <div className="cta-right">
                            <button className="lets-talk-btn">
                                Let's Talk &rarr;
                            </button>
                            <div className="cta-team-avatars">
                                {/* Replace with actual avatar images if needed */}
                                <div className="avatar"></div>
                                <div className="avatar"></div>
                                <div className="avatar"></div>
                            </div>
                            <span className="cta-ready-text">We're ready to<br />bring your ideas to life.</span>
                        </div>
                    </div>

                </div>
            </section>
            <section className="hero-section">
                {/* Background Image Layer with Gradient Fade */}
                <div className="hero-background"></div>

                {/* Content Container */}
                <div className="hero-container">
                    {/* Left Content Block */}
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

                    {/* Right Floating Text */}
                    {/* <div className="floating-text">
                        Code.<br />
                        Build.<br />
                        Solve.<br />
                        Repeat.
                    </div> */}
                </div>
            </section>
            <section className="core-services-section">
                <div className="core-services-container">

                    {/* Section Header */}
                    <div className="core-services-header">
                        <span className="sub-heading">WHAT WE DO</span>
                        <h2 className="main-heading">Our Core Services</h2>
                    </div>

                    {/* 4x2 Grid of Cards */}
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

                                    <a href="#consultation" className="explore-link">
                                        Explore Service →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="tech-process-section">
                <div className="container">

                    {/* Technology Stack Carousel Bar */}
                    <div className="tech-stack-wrapper">
                        <button className="slider-arrow left-arrow" aria-label="Previous">
                            &larr;
                        </button>

                        <div className="tech-stack-container">
                            <span className="tech-stack-title">TECHNOLOGY STACK WE USE</span>
                            <div className="tech-items-row">
                                {techStack.map((tech, index) => (
                                    <div className="tech-item" key={index}>
                                        <div className="tech-icon-circle"><img src={tech.icon} alt={tech.name} className="tech-logo" /></div>
                                        <span className="tech-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="slider-arrow right-arrow" aria-label="Next">
                            &rarr;
                        </button>
                    </div>

                    {/* Process Section */}
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

                    {/* Bottom CTA Banner */}
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
                            <button className="lets-talk-white-btn">
                                Let's Talk &rarr;
                            </button>
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

            <section className="smart-products-section">
                <div className="smart-products-container">

                    {/* Left Content Area */}
                    <div className="smart-products-content">
                        <span className="sub-heading">OUR PRODUCTS</span>

                        <h2 className="main-heading">
                            Smart Products.<br />
                            Real <span className="highlight">Impact.</span>
                        </h2>

                        <p className="description">
                            We build and own digital products that solve real-world problems and make life easier for thousands of users every day.
                        </p>
                    </div>

                    {/* Right Mockup Area (Laptop, Phone, Coffee Mug setup) */}
                    <div className="smart-products-mockup-wrapper">
                        {/* Background image overlay or container */}
                        <div className="mockup-bg-image"></div>
                    </div>

                </div>
            </section>
            <section className="products-build-section">
                <div className="products-build-container">

                    {/* Section Header */}
                    <div className="products-build-header">
                        <span className="sub-heading">OUR PRODUCTS</span>
                        <h2 className="main-heading">
                            Products We Build <span className="highlight">&amp; Own</span>
                        </h2>
                    </div>

                    {/* 3-Column Grid */}
                    <div className="products-grid">

                        {/* Card 1: Stayzy.in */}
                        <div className="product-card">
                            <div className="product-image-box stayzy-bg"></div>
                            <div className="product-content">
                                <h3>Stayzy.in</h3>
                                <p className="product-subtitle">Tenant Management App for PG Owners</p>
                                <p className="product-desc">
                                    A complete solution for PG owners to manage tenants, rent collection, notices, agreements, and much more — all in one place.
                                </p>

                                <ul className="product-features-list">
                                    <li><span className="checkmark">&#10003;</span> Tenant Onboarding</li>
                                    <li><span className="checkmark">&#10003;</span> Rent &amp; Payment Management</li>
                                    <li><span className="checkmark">&#10003;</span> Notices &amp; Communication</li>
                                    <li><span className="checkmark">&#10003;</span> Digital Agreements</li>
                                    <li><span className="checkmark">&#10003;</span> Maintenance Tracking</li>
                                </ul>

                                <div className="product-action-area store-badges">
                                    <div className="store-badge-placeholder google-play">Google Play</div>
                                    <div className="store-badge-placeholder app-store">App Store</div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: PGMove.in */}
                        <div className="product-card">
                            <div className="product-image-box pgmove-bg"></div>
                            <div className="product-content">
                                <h3>PGMove.in</h3>
                                <p className="product-subtitle">PG &amp; Flat Discovery Platform</p>
                                <p className="product-desc">
                                    Helping users find the best PGs and flats near their preferred location with verified listings and real photos.
                                </p>

                                <ul className="product-features-list">
                                    <li><span className="checkmark">&#10003;</span> Verified Listings</li>
                                    <li><span className="checkmark">&#10003;</span> Advanced Search &amp; Filters</li>
                                    <li><span className="checkmark">&#10003;</span> Property Details &amp; Photos</li>
                                    <li><span className="checkmark">&#10003;</span> Direct Contact / Enquiry</li>
                                    <li><span className="checkmark">&#10003;</span> Easy &amp; Fast Discovery</li>
                                </ul>

                                <div className="product-action-area">
                                    <button className="product-btn visit-btn">
                                        Visit Website &rarr;
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: HRMS */}
                        <div className="product-card">
                            <div className="product-image-box hrms-bg"></div>
                            <div className="product-content">
                                <h3>HRMS <span className="coming-soon-tag">(Coming Soon)</span></h3>
                                <p className="product-subtitle">Next-Gen HR Management System</p>
                                <p className="product-desc">
                                    A powerful HRMS to streamline HR operations like employee management, leave, payroll, and performance — all in one platform.
                                </p>

                                <ul className="product-features-list">
                                    <li><span className="checkmark">&#10003;</span> Employee Lifecycle Management</li>
                                    <li><span className="checkmark">&#10003;</span> Leave &amp; Attendance</li>
                                    <li><span className="checkmark">&#10003;</span> Payroll Management</li>
                                    <li><span className="checkmark">&#10003;</span> Performance Tracking</li>
                                    <li><span className="checkmark">&#10003;</span> Analytics &amp; Reports</li>
                                </ul>

                                <div className="product-action-area">
                                    <button className="product-btn disabled-btn" disabled>
                                        Coming Soon
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="building-next-section">
                {/* Background Image / Overlay Container */}
                <div className="building-next-bg"></div>

                <div className="building-next-container">

                    {/* Top Content & Floating Cards Grid */}
                    <div className="building-next-top-row">

                        {/* Left Text Content */}
                        <div className="building-next-content">
                            <span className="sub-heading">OUR FUTURE</span>
                            <h2 className="main-heading">
                                Building What's <span className="highlight">Next</span>
                            </h2>
                            <p className="description">
                                We are constantly ideating and building new products that bring efficiency, automation and simplicity to businesses and everyday life.
                            </p>
                        </div>

                        {/* Right Floating Feature Cards */}
                        <div className="floating-cards-group">
                            <div className="feature-pill-card">
                                <div className="pill-icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                                </div>
                                <span className="pill-text">More Innovative<br />Solutions</span>
                            </div>

                            <div className="feature-pill-card">
                                <div className="pill-icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                                </div>
                                <span className="pill-text">Deeper Industry<br />Impact</span>
                            </div>

                            <div className="feature-pill-card">
                                <div className="pill-icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                </div>
                                <span className="pill-text">Better Everyday<br />Experiences</span>
                            </div>
                        </div>

                    </div>

                    {/* Bottom CTA Banner */}
                    <div className="building-next-cta-banner">
                        <div className="cta-left-side">
                            <div className="cta-paper-plane-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </div>
                            <div>
                                <h3>Have an Idea for the Next Big Thing?</h3>
                                <p>Let's collaborate and build something amazing together.</p>
                            </div>
                        </div>

                        <div className="cta-right-side">
                            <button className="lets-talk-white-btn">
                                Let's Talk &rarr;
                            </button>
                        </div>
                    </div>

                </div>
            </section>
            <section className="contact-section">
                {/* Background Image Layer with Fade */}
                <div className="contact-bg-layer"></div>

                <div className="contact-container">
                    <div className="contact-content-box">

                        <span className="sub-heading">CONTACT US</span>

                        <h2 className="main-heading">
                            Let's Build Something<br />
                            Amazing <span className="highlight">Together.</span>
                        </h2>

                        <p className="description">
                            Have a project in mind or want to learn more about our services and products? We'd love to hear from you. Our team is ready to help you bring your ideas to life.
                        </p>

                        <div className="contact-features-row">
                            <div className="contact-feature-item">
                                <div className="feature-icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                                </div>
                                <div>
                                    <h4>Quick Response</h4>
                                    <p>We reply within 24 hours</p>
                                </div>
                            </div>

                            <div className="contact-feature-item">
                                <div className="feature-icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                </div>
                                <div>
                                    <h4>Expert Support</h4>
                                    <p>Our team is here to help</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className="contact-page-wrapper">

                {/* Top 4 Info Cards Grid */}
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

                {/* Main Form & Map Section */}
                <div className="contact-main-grid">

                    {/* Left Form Box */}
                    <div className="contact-form-box">
                        <h2 className="form-title">Send Us a Message</h2>
                        <p className="form-subtitle">Fill out the form below and we'll get back to you soon.</p>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" placeholder="Enter your name" />
                                </div>
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input type="email" placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" placeholder="Enter your phone number" />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="How can we help you?" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Tell us about your project or requirement..."></textarea>
                            </div>

                            <div className="form-checkbox">
                                <input type="checkbox" id="terms" />
                                <label htmlFor="terms">
                                    I agree to the <span className="link-text">Privacy Policy</span> and <span className="link-text">Terms &amp; Conditions</span>
                                </label>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message &rarr;
                            </button>
                        </form>
                    </div>

                    {/* Right Map Box */}
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
                            <button className="directions-btn">
                                Get Directions &rarr;
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom CTA Banner */}
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
                        <button className="schedule-call-btn">
                            Schedule a Call &rarr;
                        </button>
                        <div className="team-avatars-note">
                            <div className="avatars-group">
                                <span>👤</span><span>👤</span><span>👤</span>
                            </div>
                            <span>Our team is<br />ready to help</span>
                        </div>
                    </div>
                </div>

            </div>
            {/* 2. SERVICES SECTION */}
            {/* <section className="services-section" id="services">
                <div className="services-heading">
                    <h5>OUR SERVICES</h5>
                    <h2>Innovative Software Solutions For Every Business</h2>
                    <p>
                        Solinix Technologies delivers modern web solutions using
                        cutting-edge frontend, backend, and full-stack technologies
                        to help businesses accelerate digital transformation.
                    </p>
                </div>

                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div className="service-box" key={index}>
                            <div className="service-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <button
                                onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}
                                className="service-link-btn"
                            >
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </section> */}
            {/* <div className="testimonials-heading">
                <span>TESTIMONIALS & TRUST</span>
                <h2>Loved By Businesses Worldwide</h2>
                <p>See what our clients have to say about working with our development team.</p>
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

                            <a href="#consultation" className="explore-link">
                                Explore Service →
                            </a>
                        </div>
                    </div>
                ))}
            </div> */}

            {/* 3. PRODUCTS SECTION */}
            {/* <section className="products-section" id="products">
                <div className="section-header-flex">
                    <div>
                        <span className="section-tag">OUR PRODUCTS</span>
                        <h2>Products built to <br />solve <span className="highlight">real problems</span></h2>
                    </div>
                    <p className="section-desc">Our in-house products are designed to simplify operations and deliver real impact.</p>
                    <a href="#consultation" className="outline-btn">Explore All Products →</a>
                </div>

                <div className="products-grid">
                    <a href="https://stayzzy.in" target="_blank" rel="noopener noreferrer" className="product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="product-img-box bg-purple">
                            <div className="mockup-ui">
                                <img src={tenantImg} alt="Tenant Dashboard" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-title-row">
                                <h3>Stayzzy <span className="arrow-icon">→</span></h3>
                            </div>
                            <p>Tenant management platform for PG owners and tenants.</p>
                        </div>
                    </a>

                    <a href="https://pgmove.in" target="_blank" rel="noopener noreferrer" className="product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="product-img-box bg-dark">
                            <div className="mockup-ui">
                                <img src={pgImg} alt="PG Dashboard" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-title-row">
                                <h3>PGMove <span className="arrow-icon">→</span></h3>
                            </div>
                            <p>PG discovery platform connecting tenants with the right stay.</p>
                        </div>
                    </a>

                    <div className="product-card">
                        <div className="product-img-box bg-light">
                            <div className="mockup-ui">
                                <img src={hrmsImg} alt="HRMS Dashboard" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-title-row">
                                <h3>HRMS <span
                                    className="arrow-icon"
                                    onClick={() => alert("HRMS is still under developing stage!")}
                                    style={{ cursor: "pointer" }}
                                >
                                    →
                                </span></h3>
                            </div>
                            <p>Smart HR management system to simplify workforce operations.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* 4. ABOUT SECTION */}
            {/* <section className="sol-about-page" id="about">
                <div className="sol-about-hero">
                    <div className="sol-about-hero-content">
                        <h1>About Solinix Technologies</h1>
                        <p>Empowering Businesses Through Innovation, Technology, and Digital Excellence.</p>
                    </div>
                </div>

                <div className="sol-about-company">
                    <div className="sol-about-wrapper">
                        <div className="sol-about-image">
                            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200" alt="Solinix Team" />
                        </div>
                        <div className="sol-about-content">
                            <span>WHO WE ARE</span>
                            <h2>Building Innovative Digital Solutions for Modern Businesses</h2>
                            <p>Solinix Technologies is a leading software development company committed to transforming innovative ideas into reliable digital products.</p>
                            <p>Our experienced team of developers, designers, testers, and consultants work together to create secure, scalable, and high-performance solutions.</p>
                            <a href="#consultation" className="sol-about-btn">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="sol-about-mission">
                    <div className="sol-about-card">
                        <h3>Our Mission</h3>
                        <p>To deliver world-class software solutions that help businesses innovate, automate processes, and achieve sustainable growth through technology.</p>
                    </div>
                    <div className="sol-about-card">
                        <h3>Our Vision</h3>
                        <p>To become a globally recognized technology partner known for innovation, quality, trust, and customer success.</p>
                    </div>
                </div>

                <div className="sol-about-values">
                    <div className="sol-about-section-header">
                        <span>WHAT DRIVES US</span>
                        <h2>Our Core Values</h2>
                        <p>The principles that guide our work, shape our culture, and define our commitment to excellence.</p>
                    </div>
                    <div className="sol-about-values-grid">
                        <div className="sol-about-value-card">
                            <h3>Innovation</h3>
                            <p>We embrace creativity and continuously explore emerging technologies to stay ahead.</p>
                        </div>
                        <div className="sol-about-value-card">
                            <h3>Integrity</h3>
                            <p>Transparency, honesty, and ethical practices form the foundation of every relationship.</p>
                        </div>
                        <div className="sol-about-value-card">
                            <h3>Quality</h3>
                            <p>We deliver reliable, secure, scalable, and high-performance software solutions.</p>
                        </div>
                        <div className="sol-about-value-card">
                            <h3>Customer First</h3>
                            <p>Every project is custom-designed around the distinct needs and success of our clients.</p>
                        </div>
                    </div>
                </div>
            </section> */}



            {/* 6. BLOG SECTION */}
            {/* <section className="blog-section-container" id="blog">
                <div className="blog-hero">
                    <h1>Technology Insights & Blogs</h1>
                    <p>Stay updated with the latest trends in software development, frontend technologies, backend engineering, cloud computing.</p>
                    <input type="text" placeholder="Search articles..." />
                </div>

                <div className="featured-blog">
                    <div className="featured-image">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900" alt="Featured" />
                    </div>
                    <div className="featured-content">
                        <span>FEATURED ARTICLE</span>
                        <h2>Why Digital Transformation is Essential for Modern Businesses</h2>
                        <p>Digital transformation is helping organizations automate processes, improve customer experience, and accelerate growth.</p>
                        <a href="#consultation" className="blog-read-btn">Read Article</a>
                    </div>
                </div>

                <div className="latest-blogs">
                    <div className="section-title">
                        <h2>Latest Articles</h2>
                    </div>
                    <div className="blog-grid">
                        {blogs.map((blog, index) => (
                            <div className="blog-card" key={index}>
                                <img src={blog.image} alt="" />
                                <div className="blog-content">
                                    <span>{blog.category}</span>
                                    <h3>{blog.title}</h3>
                                    <p>{blog.description}</p>
                                    <div className="blog-footer">
                                        <small>{blog.date}</small>
                                        <small>{blog.read}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            {/* 5. ROADMAP / PROCESS SECTION */}
            {/* <section className="roadmap-section" id="roadmap">
                <div className="roadmap-heading">
                    <span className="badge">OUR PROCESS</span>
                    <h2>How We Build Your Product</h2>
                    <p>From concept to continuous growth, we follow a structured, transparent, and agile development roadmap.</p>
                </div>

                <div className="timeline">
                    {roadmapSteps.map((step, index) => (
                        <div className={`step ${index % 2 === 0 ? "left" : "right"}`} key={index}>
                            <div className="circle">
                                <span>{step.number}</span>
                            </div>
                            <div className="card">
                                <div className="card-header-row">
                                    <div className="step-icon">
                                        <i className={step.icon}></i>
                                    </div>
                                    <span className="step-tag">Phase {step.number}</span>
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}
            {/* 7. CONSULTATION SECTION */}
            {/* <section className="consultation-page" id="consultation">
                <div className="consult-hero">
                    <div className="hero-content">
                        <h1>Let’s Build Something Amazing Together</h1>
                        <p>Share your ideas and challenges with us. Our experts will get back to you with the right solutions.</p>
                    </div>
                </div>

                <div className="consult-main">
                    <div className="consult-form-container">
                        <h2>Request a Free Consultation</h2>
                        <p>Please provide some basic details so we can understand your requirements better.</p>

                        <form className="consult-form" onSubmit={handleConsultationSubmit}>
                            <div className="form-grid">
                                <div>
                                    <label>Full Name*</label>
                                    <input type="text" placeholder="Enter your full name" required />
                                </div>
                                <div>
                                    <label>Email Address*</label>
                                    <input type="email" placeholder="Enter your email address" required />
                                </div>
                                <div>
                                    <label>Phone Number*</label>
                                    <input type="tel" placeholder="Enter your phone number" required />
                                </div>
                                <div>
                                    <label>Company Name</label>
                                    <input type="text" placeholder="Enter your company name" />
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">Submit Request</button>
                        </form>
                    </div>
                </div>
            </section> */}

            {/* 8. CONTACT SECTION */}
            {/* <section className="contact-section-container" id="contact">
                <div className="contact-hero">
                    <div className="contact-hero-content">
                        <h1>Let's Build Something Amazing</h1>
                        <p>We'd love to hear about your project. Whether custom software, website, mobile app, or IT consultation.</p>
                    </div>
                </div>

                <div className="contact-section">
                    <div className="contact-left">
                        <h5>GET IN TOUCH</h5>
                        <h2>Have a Project in Mind?</h2>
                        <p>Tell us about your idea and we'll help transform it into an innovative digital solution.</p>
                        <div className="contact-card">
                            <div>
                                <h4>Office Address</h4>
                                <p>Hyderabad, Telangana, India</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div>
                                <h4>Phone Number</h4>
                                <p>+91 12345 67890</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div>
                                <h4>Email Address</h4>
                                <p>hello@solinix.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-right">
                        <h3>Send us a Message</h3>
                        <form onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully madam!"); }}>
                            <input type="text" placeholder="Full Name" required />
                            <input type="email" placeholder="Email Address" required />
                            <textarea rows="6" placeholder="Tell us about your project..." required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </section> */}

            {/* <section className="sol-about-tech">
                <h2>Technologies We Use</h2>
                <div className="sol-about-tech-grid">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>React JS</span>
                    <span>Node JS</span>
                    <span>Express JS</span>
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>MySQL</span>
                    <span>MongoDB</span>
                    <span>AWS</span>
                    <span>Git & GitHub</span>

                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>React JS</span>
                    <span>Node JS</span>
                    <span>Express JS</span>
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>MySQL</span>
                    <span>MongoDB</span>
                    <span>AWS</span>
                    <span>Git & GitHub</span>
                </div>
            </section> */}

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-col brand-col">
                        <h2 className="footer-logo">SOLI<span>NIX</span></h2>
                        <p className="footer-desc">Solinix is a software development company passionate about building innovative digital solutions that drive business growth.</p>
                        <div className="social-icons">
                            <a href="#linkedin" aria-label="LinkedIn">🔗</a>
                            <a href="#instagram" aria-label="Instagram">📷</a>
                            <a href="#twitter" aria-label="Twitter">🐦</a>
                            <a href="#email" aria-label="Email">✉️</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#services">Web Development</a></li>
                            <li><a href="#services">Mobile Development</a></li>
                            <li><a href="#services">AI &amp; Automation</a></li>
                            <li><a href="#services">Digital Marketing</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Products</h3>
                        <ul>
                            <li><a href="#products">Stayzzy</a></li>
                            <li><a href="#products">PGMove</a></li>
                            <li><a href="#products">HRMS</a></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><span className="icon">📞</span> +91 91084 21609</li>
                            <li><span className="icon">✉️</span> hello@solinix.com</li>
                            <li><span className="icon">📍</span> Hyderabad, India</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Solinix. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms &amp; Conditions</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}