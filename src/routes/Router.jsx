import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Hero from "../pages/Hero";
import WinterTips from "../pages/WinterTips";
import ExpertVets from "../layouts/ExpertVets";


const router = createBrowserRouter(
    [
        {
            path:'/',
            loader:() => fetch("/services.json"),
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:'/home',
                    element:<Home></Home>

                
                },
                {
                    path:'/popular',
                    element:<WinterTips></WinterTips>
                },
                {
                    path:"/",
                    
                }
            ]
        },
        {
            path:'/vets',
            element:<ExpertVets></ExpertVets>
        },
        {
            path:'/service',
            element: <h4>service</h4>
        },
        {
            path:'/*',
            element: <h3>Error404</h3>
        }
    ]
)

export default router;