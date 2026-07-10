import React, { useState } from 'react';
import '../Styler/LoreSections.css';
import { CultivationLoreData, RelationshipData } from '../assets/assest';

const LoreSections = () => {
    // Tracks which step dropdown is open. Default is 0 (First Step open initially)
    const [activeStep, setActiveStep] = useState(0);

    const toggleStep = (index) => {
        // If the clicked step is already open, close it (set to null), otherwise open it
        setActiveStep(activeStep === index ? null : index);
    };

    return (
        <div className="LoreContainer">
            {/* SECTION 1: CULTIVATION PATH */}
            <section className="LoreSectionBlock" id="cultivation">
                <h2 className="SectionTitle">Cultivation Rules & Path</h2>
                <p className="SectionSubtitle">
                    In the world of Renegade Immortal, cultivation is a brutal plunder of the heavens across distinct existential Steps. Click a step to unveil its realms.
                </p>

                <div className="StepsWrapper">
                    {CultivationLoreData.map((step, stepIndex) => {
                        const isOpen = activeStep === stepIndex;

                        return (
                            <div className={`StepDropdown ${isOpen ? 'isOpen' : ''}`} key={stepIndex}>
                                {/* Clickable Accordion Header */}
                                <button className="DropdownHeader" onClick={() => toggleStep(stepIndex)}>
                                    <span className="StepTitleText">{step.stepName}</span>
                                    <div className="HeaderInteractiveGroup">
                                        <span className="RealmCount">{step.realms.length} Realms</span>
                                        <span className="DropdownArrow">{isOpen ? '▲' : '▼'}</span>
                                    </div>
                                </button>

                                {/* Collapsible Body */}
                                <div className="DropdownBody">
                                    {/* 🌟 New Path Line Connection Effect */}
                                    <div className="CultivationGridContainer">
                                        <div className="CultivationPathLine"></div>

                                        <div className="CultivationGrid">
                                            {step.realms.map((stage, stageIndex) => (
                                                <div className="CultivationCard" key={stageIndex}>
                                                    <div className="CardTopRow">
                                                        <div className="StageNumber">
                                                            S{stepIndex + 1} · {(stageIndex + 1).toString().padStart(2, '0')}
                                                        </div>
                                                        {/* 🌟 Dynamic Lore Badge Type */}
                                                        <span className="RealmTypeBadge">{stage.type || "Dao Path"}</span>
                                                    </div>
                                                    <h3>{stage.level}</h3>
                                                    <p>{stage.desc}</p>
                                                    <div className="CardAuraGlow"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION 2: RELATIONSHIPS */}
            <section className="LoreSectionBlock" id="relationship">
                <h2 className="SectionTitle">Wang Lin's Relationships</h2>
                <p className="SectionSubtitle">A ruthless path walked mostly alone, yet shaped by key figures of fate.</p>

                <div className="RelationshipGrid">
                    {RelationshipData.map((char, index) => (
                        <div className="RelationCard" key={index}>
                            {/* Character Portrait Layer */}
                            <div className="RelationImageWrapper">
                                <img src={char.image} alt={char.name} className="RelationAvatar" />
                                <div className="RelationImgOverlay"></div>
                            </div>

                            {/* Content Details */}
                            <div className="RelationContent">
                                <div className="RelationHeader">
                                    <h3>{char.name}</h3>
                                    <span className="RelationTag">{char.role}</span>
                                </div>
                                <p className="RelationBondText">{char.bond}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LoreSections;