import { createBrowserRouter, Navigate } from "react-router-dom";
import ServicesPage from "../pages/services";
import PublicLayout from "../layouts/public";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/services",
                element: <ServicesPage />
            }
        ],
    },
    {
        path: "*",
        element: <Navigate to={"/"} />
    }
])

export default routers;
