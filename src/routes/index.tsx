import { createBrowserRouter, Navigate } from "react-router-dom";
import _ROUTERS from "../constants/menu.constant";

import PublicLayout from "../layouts/public";

import HomePage from "../pages/home";
import ServicesPage from "../pages/services";
import GeospatialAiPage from "../pages/geospatial-ai";
import MultiCouldSolutionsPage from "../pages/multi-cloud-solutions";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: _ROUTERS.home,
                element: <HomePage />
            },
            {
                path: _ROUTERS.services,
                element: <ServicesPage />
            },
            {
                path: _ROUTERS.geospatial_ai,
                element: <GeospatialAiPage />
            },
            {
                path: _ROUTERS.solutions,
                element: <MultiCouldSolutionsPage />
            }
        ],
    },
    {
        path: "*",
        element: <></>
    }
])

export default routers;
