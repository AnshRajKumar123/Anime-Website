import React from 'react';
import '../Styler/Status.css';
import { StatusTrackerData } from '../assets/assest';
import { Flame, Compass, Crown, Sparkles, ShieldCheck, Activity } from 'lucide-react';

const Status = () => {
    const statusIcons = [<Compass size={20} />, <Flame size={20} />, <Crown size={20} />, <Sparkles size={20} />, <ShieldCheck size={20} />];

    return (
        <section className="StatusSection" id="status">
            <div className="StatusHeader">
                {/* 🌟 Fixed: Replaced undefined ActivityIcon with Activity */}
                <div className="HeaderTagPulse"><Activity size={16} /> Existential Records</div>
                <h2 className="SectionTitle">Existential Status Registry</h2>
                <p className="SectionSubtitle">
                    Chronological evolutionary analysis tracking Wang Lin's titles, identities, and core milestones throughout his entire existential timeline.
                </p>
            </div>

            <div className="TimelineContainer">
                {StatusTrackerData.map((node, index) => (
                    <div className="TimelineNode" key={index}>
                        <div className="TimelineMarker">
                            <div className="InnerDot">{statusIcons[index] || <Flame size={14} />}</div>
                        </div>

                        <div className="StatusCard">
                            <div className="StatusContent">
                                <span className="TimelineEra">{node.era}</span>
                                <h3 className="TimelineTitle">{node.title}</h3>
                                <p className="TimelineDesc">{node.status}</p>
                            </div>

                            <div className="StatusImageWrapper">
                                <img src={node.image} alt={node.title} className="StatusEraImg" />
                                <div className="StatusImgFade"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Status;