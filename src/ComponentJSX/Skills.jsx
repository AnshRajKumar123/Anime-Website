import React from 'react';
import '../Styler/Skills.css';
import { SkillsData } from '../assets/assest';
import { Zap, Sparkles } from 'lucide-react';

const Skills = () => {
    return (
        <section className="SkillsSection" id="skills">
            <div className="SkillsHeader">
                <div className="HeaderTagPulse"><Zap size={16} /> Divine Mastery</div>
                <h2 className="SectionTitle">Divine Abilities & Spells</h2>
                <p className="SectionSubtitle">
                    Explore the terrifying arsenal, ancient god lineages, and heaven-defying domains mastered by Wang Lin throughout his path of blood and dao.
                </p>
            </div>

            <div className="SkillsGrid">
                {SkillsData.map((skill, index) => (
                    <div 
                        className="SkillCard" 
                        key={index}
                        style={{ backgroundImage: `url(${skill.image})` }}
                    >
                        <div className="SkillCardContent">
                            <div className="SkillTypeBadge"><Sparkles size={12} /> {skill.type}</div>
                            <h3 className="SkillName">{skill.name}</h3>
                            <div className="SkillDivider"></div>
                            <p className="SkillDesc">{skill.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;