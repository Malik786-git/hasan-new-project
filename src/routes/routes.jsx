import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import FAQs from "../pages/FAQs";


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
        path: "/faqs",
        element: <FAQs/>
    }
])


export default publicRoutes;