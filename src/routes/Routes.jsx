import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../../ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import CreateToy from "../pages/CreateToy/CreateToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader:()=>fetch('http://localhost:5000/gallery')
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"registration",
            element:<Registration></Registration>
        },
        {
          path:'createToy',
          element:<CreateToy></CreateToy>
        }
      ]
    },
  ]);
  export default router;