import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ExpertVets from "../layouts/ExpertVets";
import ServiceDetails from "../pages/ServiceDetails";
import BookNow from "../pages/BookNow";

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
      },
      {
  path: "/service/:id",
  element: <ServiceDetails />,
  loader: () => fetch("/services.json"),
  errorElement: (
    <div className="text-red-500 p-5">
      Could not load service. Please try again later.
    </div>
  )
},
{
  path:'/book',
  element:<BookNow></BookNow>
}
    ]
  },
  {
    path: '*',
    element: <h3>Error 404 - Page Not Found</h3>
  }
]);

export default router;
