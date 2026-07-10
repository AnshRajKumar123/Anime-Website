import React from 'react';
import '../Styler/Weapons.css';
import { WeaponsData } from '../assets/assest';

const Weapons = () => {
    return (
        <section className="WeaponsSection" id="weapons">
            <div className="WeaponsHeader">
                <h2 className="SectionTitle">Sacred Artifacts & Treasures</h2>
                <p className="SectionSubtitle">
                    The lethal weapons, soul-bound flying swords, and primordial world-breaking items utilized by Wang Lin.
                </p>
            </div>

            <div className="WeaponsGrid">
                {WeaponsData.map((item, index) => (
                    <div className="WeaponCard" key={index}>
                        <div className="WeaponImageContainer">
                            <img src={item.image} alt={item.name} className="WeaponCardImg" />
                            <div className="CardImgOverlay"></div>
                        </div>
                        
                        <div className="WeaponContent">
                            <div className="WeaponHeaderRow">
                                <span className="WeaponIndex">CRIMSON-{index+1}</span>
                                <span className="WeaponType">{item.type}</span>
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Weapons;