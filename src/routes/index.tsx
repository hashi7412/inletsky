import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicLayout from "../layouts/public";
import ServicesPage from "../pages/services";
import GeospatialAiPage from "../pages/geospatial-ai";
import MultiCouldSolutionsPage from "../pages/multi-cloud-solutions";
import BrainnetPage from "../pages/brainnet";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <></>
            },
            {
                path: "/services",
                element: <ServicesPage />
            },
            {
                path: "/geospatial-ai",
                element: <GeospatialAiPage />
            },
            {
                path: "/solutions",
                element: <MultiCouldSolutionsPage />
            },
            {
                path: "/brainnet",
                element: <BrainnetPage />
            }
        ],
    },
    {
        path: "*",
        element: <></>
    }
])

export default routers;
