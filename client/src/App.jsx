import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/list/ListPage";
import Home from "./routes/homePage/Home";
import SinglePage from "./routes/singlePage/SinglePage";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
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
       }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}
export default App;
