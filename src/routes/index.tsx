import { createBrowserRouter, Navigate } from "react-router-dom";
import ServicesPage from "../pages/services";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={"/services"} />
    },
    {
        path: "/services",
        element: <ServicesPage />
    },
    {
        path: "*",
        element: <Navigate to={"/"} />
    }
])

export default routers;
