import React from "react";
import HeroSection from "./sections/hero";
import DevServicesSection from "./sections/dev-services";
import TechSection from "./sections/tech";
import ProjectScopeSection from "./sections/project-scope";
import AppDevProcessSection from "./sections/app-dev-process";
import PortfolioSection from "./sections/portfolio";
import FaqsSection from "./sections/faqs";
import ContactSection from "../../components/page/contact-page";

const ServicesPage: React.FC = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <DevServicesSection />
            <TechSection />
            <ProjectScopeSection />
            <AppDevProcessSection />
            <PortfolioSection />
            <FaqsSection />
            <ContactSection />
        </React.Fragment>
    )
}

export default ServicesPage;
