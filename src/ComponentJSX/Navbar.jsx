import React, { useState, useEffect } from 'react'
import '../Styler/Navbar.css'
import { Home, Activity, Users, Zap, ShieldAlert, Download } from 'lucide-react'

const Navbar = ({ position = 'top' }) => {
    const [activeLink, setActiveLink] = useState('#home');

    const navLinks = [
        { name: 'Home', path: '#home', icon: <Home size={18} /> },
        { name: 'Status', path: '#status', icon: <Activity size={18} /> },
        { name: 'Relationship', path: '#relationship', icon: <Users size={18} /> },
        { name: 'Skills', path: '#skills', icon: <Zap size={18} /> },
        { name: 'Weapons', path: '#weapons', icon: <ShieldAlert size={18} /> }
    ];

    useEffect(() => {
        if (position === 'bottom') {
            const observerOptions = {
                root: null,
                rootMargin: '-40% 0px -50% 0px',
                threshold: 0
            };

            const handleIntersect = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(`#${entry.target.id}`);
                    }
                });
            };

            const observer = new IntersectionObserver(handleIntersect, observerOptions);
            navLinks.forEach((link) => {
                const targetSection = document.querySelector(link.path);
                if (targetSection) observer.observe(targetSection);
            });

            return () => observer.disconnect();
        }
    }, [position]);

    // TOP NAVBAR: Logo on left, Download Button on right (No mid links)
    if (position === 'top') {
        return (
            <nav className='Navbar TopNavbar'>
                <a href='/' className="NameLogo" onClick={() => setActiveLink('#home')}>
                    <span className="LogoBadge">RI</span>
                    <h1>Wang Lin</h1>
                </a>

                {/* Right side Download Button (Add your image download link here later) */}
                <div className="NavActions">
                    <a 
                        href="#download" 
                        className="NavCtaBtn DownloadBtn" 
                        onClick={(e) => {
                            // e.preventDefault(); // Uncomment when you add your actual link
                            // alert("Add your image download link here!");
                        }}
                    >
                        <Download size={16} />
                        <div className="BtnGlowLayer"></div>
                    </a>
                </div>
            </nav>
        );
    }

    // BOTTOM NAVBAR: Mobile app dock with category links & icons
    return (
        <nav className='Navbar BottomNavbar'>
            <div className="Nav_links">
                {navLinks.map((link) => (
                    <a 
                        key={link.path}
                        href={link.path} 
                        className={activeLink === link.path ? 'active' : ''}
                        onClick={() => setActiveLink(link.path)}
                    >
                        <span className="NavLinkIcon">{link.icon}</span>
                        <span className="NavLinkText">{link.name}</span>
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;