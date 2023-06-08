import React from "react";
import HeroSection from "./sections/hero";
import DeliveringSection from "./sections/delivering";
import SolutionSection from "./sections/solutions";
import RecentWorkSection from "./sections/recent-work";
import EnvironmentSection from "./sections/environment";
import ContactSection from "../services/sections/contact";

const MultiCouldSolutionsPage = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <DeliveringSection />
            <SolutionSection />
            <RecentWorkSection />
            <EnvironmentSection />
            <ContactSection />
        </React.Fragment>
    )
}

export default MultiCouldSolutionsPage;
