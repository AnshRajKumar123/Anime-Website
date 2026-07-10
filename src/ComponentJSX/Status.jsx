import React from 'react';
import '../Styler/Status.css';
import { StatusTrackerData } from '../assets/assest';

const Status = () => {
    return (
        <section className="StatusSection" id="status">
            <div className="StatusHeader">
                <h2 className="SectionTitle">Existential Status Registry</h2>
                <p className="SectionSubtitle">
                    Chronological evolutionary analysis tracking Wang Lin's titles, identities, and core milestones throughout his entire existential timeline.
                </p>
            </div>

            <div className="TimelineContainer">
                {StatusTrackerData.map((node, index) => (
                    <div className="TimelineNode" key={index}>
                        <div className="TimelineMarker">
                            <div className="InnerDot"></div>
                        </div>

                        {/* 🌟 Visual Split Status Card */}
                        <div className="StatusCard">
                            <div className="StatusContent">
                                <span className="TimelineEra">{node.era}</span>
                                <h3 className="TimelineTitle">{node.title}</h3>
                                <p className="TimelineDesc">{node.status}</p>
                            </div>

                            {/* 🌟 Interactive Timeline Era Image */}
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