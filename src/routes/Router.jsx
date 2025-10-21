import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayout></HomeLayout>
        },
        {
            path:'/auth',
            element: <h3>Authentication layout</h3>
        },
        {
            path:'/service',
            element: <h3>Popular Winter Care Services
             </h3>
        },
        {
            path:'/*',
            element: <h3>Error404</h3>
        }
    ]
)

export default router;