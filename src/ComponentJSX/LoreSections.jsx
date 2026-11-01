import React, { useState } from 'react';
import '../Styler/LoreSections.css';
import { CultivationLoreData, RelationshipData } from '../assets/assest';
import { ChevronDown, ChevronUp, Layers, HeartHandshake, ShieldAlert } from 'lucide-react';

const LoreSections = () => {
    const [activeStep, setActiveStep] = useState(0);

    const toggleStep = (index) => {
        setActiveStep(activeStep === index ? null : index);
    };

    return (
        <div className="LoreContainer">
            {/* SECTION 1: CULTIVATION PATH */}
            <section className="LoreSectionBlock" id="cultivation">
                <div className="HeaderTagPulse"><Layers size={16} /> Daoist Ascension</div>
                <h2 className="SectionTitle">Cultivation Rules & Path</h2>
                <p className="SectionSubtitle">
                    In the world of Renegade Immortal, cultivation is a brutal plunder of the heavens across distinct existential Steps. Click a step to unveil its realms.
                </p>

                <div className="StepsWrapper">
                    {CultivationLoreData.map((step, stepIndex) => {
                        const isOpen = activeStep === stepIndex;

                        return (
                            <div className={`StepDropdown ${isOpen ? 'isOpen' : ''}`} key={stepIndex}>
                                <button className="DropdownHeader" onClick={() => toggleStep(stepIndex)}>
                                    <span className="StepTitleText">{step.stepName}</span>
                                    <div className="HeaderInteractiveGroup">
                                        <span className="RealmCount">{step.realms.length} Realms</span>
                                        <span className="DropdownArrow">{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
                                    </div>
                                </button>

                                <div className="DropdownBody">
                                    <div className="CultivationGridContainer">
                                        <div className="CultivationGrid">
                                            {step.realms.map((stage, stageIndex) => (
                                                <div className="CultivationCard" key={stageIndex}>
                                                    <div className="CardTopRow">
                                                        <div className="StageNumber">
                                                            S{stepIndex + 1} · {(stageIndex + 1).toString().padStart(2, '0')}
                                                        </div>
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
                <div className="HeaderTagPulse"><HeartHandshake size={16} /> Fates & Bonds</div>
                <h2 className="SectionTitle">Wang Lin's Relationships</h2>
                <p className="SectionSubtitle">A ruthless path walked mostly alone, yet shaped by key figures of fate.</p>

                <div className="RelationshipGrid">
                    {RelationshipData.map((char, index) => (
                        <div className="RelationCard" key={index}>
                            <div className="RelationImageWrapper">
                                <img src={char.image} alt={char.name} className="RelationAvatar" />
                                <div className="RelationImgOverlay"></div>
                            </div>

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