import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout, RequireLayout } from "./routes/layout/Layout";
import ListPage from "./routes/list/ListPage";
import Home from "./routes/homePage/Home";
import SinglePage from "./routes/singlePage/SinglePage";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
import ProfilePage from "./routes/profilePage/ProfilePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage.jsx";
import NewPostPage from "./routes/newPostPage/NewPostPage.jsx";
import { ListPageLoader, profilePageLoader, SinglePageLoader } from "./lib/loaders.js";
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
          element: <ListPage/>,
          loader:ListPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
          loader:SinglePageLoader,
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
          element:<ProfilePage/>,
          loader:profilePageLoader,
         },
         {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
         },
         {
          path:"/add",
          element:<NewPostPage/>
         },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
