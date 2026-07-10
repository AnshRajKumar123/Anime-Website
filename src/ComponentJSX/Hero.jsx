import React from 'react'
import '../Styler/Hero.css'
import { AnimeImage } from '../assets/assest'

const Hero = () => {
    return (
        <section className='HeroSection' id="home">
            {/* Background Layer */}
            <div className="BigImageBox">
                <img src={AnimeImage.BigBanner} alt="Background Banner" />
                <div className="HeroOverlay"></div>
                <div className="DarkEnergyParticles"></div>
            </div>

            {/* Content Wrapper */}
            <div className='Image_Detail'>
                {/* 🌟 OVERHAULED LEFT SIDE CONTENT PANEL 🌟 */}
                <div className="SecondLine">
                    <div className="LineageWrapper">
                        <span className="SubTitle">THE ULTIMATE LEGEND</span>
                        <h1>WANG LING</h1>
                        <p className="HeroDescription">
                            A comprehensive database tracking the ascension of a ruthless mortal who defied the heavens, 
                            mastered the Dao of Life and Death, and rewrote the rules of the universe.
                        </p>
                    </div>

                    {/* 🌟 New Interactive Quick-Stats Panel Matrix 🌟 */}
                    <div className="HeroQuickStats">
                        <div className="StatNode">
                            <span className="NodeCount">18+</span>
                            <span className="NodeTitle">Cultivation Realms</span>
                        </div>
                        <div className="StatNode">
                            <span className="NodeCount">06</span>
                            <span className="NodeTitle">Divine Spells</span>
                        </div>
                        <div className="StatNode">
                            <span className="NodeCount">04</span>
                            <span className="NodeTitle">Sacred Weapons</span>
                        </div>
                    </div>

                    <div className="HeroButtons">
                        <a href="#cultivation" className="BtnPrimary">Cultivation Path</a>
                        <a href="#relationship" className="BtnSecondary">Character Network</a>
                    </div>
                </div>

                {/* Right Side - Dynamic Animated Core Art Section */}
                <div className="FirstLine">
                    <div className="AncientAuraRing"></div>
                    <img className='MainImg' src={AnimeImage.Image2} alt="Wang Lin" />

                    <div className="CharacterStatWidget">
                        <div className="WidgetRow">
                            <span className="WidgetLabel">CURRENT EXISTENCE</span>
                            <span className="WidgetValue text-red">4TH STEP</span>
                        </div>
                        <div className="WidgetRow">
                            <span className="WidgetLabel">CORE DOMAIN</span>
                            <span className="WidgetValue">LIFE & DEATH</span>
                        </div>
                        <div className="WidgetRow">
                            <span className="WidgetLabel">PRIMORDIAL ARTIFACT</span>
                            <span className="WidgetValue">DEFYING BEAD</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Donghua_Banner'>
                <img src={AnimeImage.Donghua_Banner} alt="Donghua Icon" />
            </div>
        </section>
    )
}

export default Hero;