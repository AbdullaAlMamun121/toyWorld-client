import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../../ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import CreateToy from "../pages/CreateToy/CreateToy";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import ToyViewDetails from "../pages/AllToys/ToyViewDetails/ToyViewDetails";
import MyToys from "../pages/MyToys/MyToys";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader:()=>fetch('https://toy-assignment-server-omega.vercel.app/gallery')
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
          element:<PrivateRoute><CreateToy></CreateToy></PrivateRoute>
        },
        {
          path:'allToys',
          element:<AllToys></AllToys>
        },
        {
          path:'ToyViewDetails/:id',
          element:<PrivateRoute><ToyViewDetails></ToyViewDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://toy-assignment-server-omega.vercel.app/ToyViewDetails/${params.id}`)
        },
        {
          path:'myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    },
  ]);
  export default router;