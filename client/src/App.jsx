import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout, RequireLayout } from "./routes/layout/Layout";
import ListPage from "./routes/list/ListPage";
import Home from "./routes/homePage/Home";
import SinglePage from "./routes/singlePage/SinglePage";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
import ProfilePage from "./routes/profilePage/ProfilePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
       {
        path:"/register",
        element:<Register/>
       },
       {
        path:"/login",
        element:<Login/>
       },
      ],
    },
    {
      path:"/",
      element:<RequireLayout/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>
         },
         {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
         },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
