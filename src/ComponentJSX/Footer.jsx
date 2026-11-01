import React from 'react';
import '../Styler/Footer.css';
import { Shield, Sparkles, Flame, Compass } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="FandomFooter" id="footer">
            <div className="FooterTopBar">
                <div className="FooterLogoGroup">
                    <span className="LogoBadge">RI</span>
                    <h2>Wang Lin Fandom</h2>
                </div>
                
                <div className="BottomNavLinks">
                    <a href="#home"><Compass size={14} /> Home</a>
                    <a href="#status"><Flame size={14} /> Status</a>
                    <a href="#cultivation"><Sparkles size={14} /> Cultivation</a>
                    <a href="#relationship"><Shield size={14} /> Relationships</a>
                </div>
            </div>

            <div className="FooterDivider"></div>

            <div className="FooterBottomBar">
                <p>&copy; 2026 Renegade Immortal Fandom Database. All celestial rights reserved.</p>
                <p className="FooterSubText">⚡ Built with absolute defiance against the heavens.</p>
            </div>
        </footer>
    );
};

export default Footer;