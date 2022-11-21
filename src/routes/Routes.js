import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import BlogDetails from "../Pages/Shared/BlogDetails/BlogDetails";
import SignUp from "../Pages/SignUp/SignUp";
import UsersBlog from "../Pages/UsersBlog/UsersBlog";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/hombeblog/${params.id}`),
      },
      { path: "/allblogs", element: <AllBlogs /> },
      {
        path: "/addblogs",
        element: (
          <PrivateRoutes>
            <AddBlogs />
          </PrivateRoutes>
        ),
      },
      {
        path: "/users-blog",
        element: (
          <PrivateRoutes>
            <UsersBlog />
          </PrivateRoutes>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <SignUp /> },
    ],
  },
]);
