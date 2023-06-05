import React from "react";
import Header from "../../components/layout/header";
import { Main } from "../../components/layout/main";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/footer";

const PublicLayout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    )
}

export default PublicLayout;
