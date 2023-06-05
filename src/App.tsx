import React from "react";
import ProductPage from "./pages/product";
import { Container } from "./components/Container";

export const App: React.FC = () => {
    return (
        <Container>
            <ProductPage />
        </Container>
    )
}