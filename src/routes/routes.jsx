import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import FAQs from "../pages/FAQs";
import Products from "../pages/Products";
import Team from "../pages/Team";


const  publicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/faqs",
        element: <FAQs/>
    },
    {
        path: "/team",
        element: <Team/>
    }
])


export default publicRoutes;