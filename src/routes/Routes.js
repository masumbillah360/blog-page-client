import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import BlogDetails from "../Pages/Shared/BlogDetails/BlogDetails";
import SignUp from "../Pages/SignUp/SignUp";

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
      { path: "/login", element: <Login /> },
      { path: "/register", element: <SignUp /> },
    ],
  },
]);
