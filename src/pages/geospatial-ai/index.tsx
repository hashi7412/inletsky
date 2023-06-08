import React from "react";
import HeroSection from "./sections/hero";
import DetectionSection from "./sections/detection";
import DataKindSection from "./sections/data-kind";
import IntelligenceSection from "./sections/intelligence";
import PatnersSection from "./sections/partners";
import AiMinuteSection from "./sections/ai-minute";
import ReachUsSection from "./sections/reach-us";

const GeospatialAiPage = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <DetectionSection />
            <DataKindSection />
            <IntelligenceSection />
            <PatnersSection />
            <AiMinuteSection />
            <ReachUsSection />
        </React.Fragment>
    )
}

export default GeospatialAiPage;
