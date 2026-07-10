import React, { useState, useEffect } from 'react'
import '../Styler/Navbar.css'

const Navbar = () => {
    // State to track which link is currently active
    const [activeLink, setActiveLink] = useState('#home');

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Status', path: '#status' },
        { name: 'Relationship', path: '#relationship' },
        { name: 'Skills', path: '#skills' },
        { name: 'Weapons', path: '#weapons' }
    ];

    // 🌟 Scroll Observer: Detects which section is active on screen 🌟
    useEffect(() => {
        const observerOptions = {
            root: null, // watches the viewport
            rootMargin: '-40% 0px -50% 0px', // triggers when section hits near the middle of the screen
            threshold: 0
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Update the active state to match the visible section's ID
                    setActiveLink(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        // Target all sections that correspond to our nav links
        navLinks.forEach((link) => {
            const targetSection = document.querySelector(link.path);
            if (targetSection) observer.observe(targetSection);
        });

        // Clean up observer when component unmounts
        return () => observer.disconnect();
    }, []);

    return (
        <nav className='Navbar'>
            {/* Logo Group */}
            <a href='#home' className="NameLogo" onClick={() => setActiveLink('#home')}>
                <span className="LogoBadge">RI</span>
                <h1>Wang Ling</h1>
            </a>

            {/* Dynamic Navigation Links */}
            <div className="Nav_links">
                {navLinks.map((link) => (
                    <a 
                        key={link.path}
                        href={link.path} 
                        className={activeLink === link.path ? 'active' : ''}
                        onClick={() => setActiveLink(link.path)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Right-hand Action Button */}
            <div className="NavActions">
                <a href="#cultivation" className="NavCtaBtn" onClick={() => setActiveLink('#cultivation')}>
                    <span>Codex Database</span>
                    <div className="BtnGlowLayer"></div>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;