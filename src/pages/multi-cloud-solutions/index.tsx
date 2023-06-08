import React from "react";
import HeroSection from "./sections/hero";
import DeliveringSection from "./sections/delivering";
import SolutionSection from "./sections/solutions";
import RecentWorkSection from "./sections/recent-work";
import EnvironmentSection from "./sections/environment";
import ContactSection from "../services/sections/contact";
import { BgSection } from "./style";

const MultiCouldSolutionsPage = () => {
    return (
        <React.Fragment>
            <BgSection>
                <HeroSection />
                <DeliveringSection />   
            </BgSection>
            <SolutionSection />
            <RecentWorkSection />
            <EnvironmentSection />
            <ContactSection />
        </React.Fragment>
    )
}

export default MultiCouldSolutionsPage;
