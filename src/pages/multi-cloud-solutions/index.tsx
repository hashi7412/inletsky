import React from "react";
import HeroSection from "./sections/hero";
import DeliveringSection from "./sections/delivering";
import SolutionSection from "./sections/solutions";
import RecentWorkSection from "./sections/recent-work";
import EnvironmentSection from "./sections/environment";
import { BgSection } from "./style";
import ContactSection from "../../components/page/contact-page";

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
