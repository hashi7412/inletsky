import React from "react";
import FaqsSection from "./sections/faqs";
import NetworkingSection from "./sections/networking";
import ClientSection from "./sections/clients";
import NetworksSection from "./sections/networks";
import TestimonialsSection from "./sections/testimonials";
import ServicesSection from "./sections/services";
import HeroSection from "./sections/hero";
import GetStartedSection from "./sections/get-started";
import { BgSection } from "./style";

const BrainnetPage = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <NetworkingSection />
            <ClientSection />
            <BgSection>
                <NetworksSection />
                <TestimonialsSection />
                <ServicesSection />
            </BgSection>
            <FaqsSection />
            <GetStartedSection />
        </React.Fragment>
    )
}

export default BrainnetPage;
