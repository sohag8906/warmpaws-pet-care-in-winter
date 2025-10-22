import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ExpertVets from "../layouts/ExpertVets";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    loader: () => fetch("/services.json"),
    children: [
      {
        index: true, // homepage
        element: null // HomeLayout থেকে Hero + WinterTips already দেখাবে
      },
      {
        path: 'vets',
        element: <ExpertVets />
      },
      {
        path: 'service',
        element: <h4>Service Page</h4>
      }
    ]
  },
  {
    path: '*',
    element: <h3>Error 404 - Page Not Found</h3>
  }
]);

export default router;
