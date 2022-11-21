import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import AllUsers from "../Pages/AllUsers/AllUsers";
import DateCalender from "../Pages/Calender/Calender";
import DetailsUsersBlog from "../Pages/DetailsUsersBlog/DetailsUsersBlog";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import MyBlogs from "../Pages/MyBlogs/MyBlogs";
import MyTodos from "../Pages/MyTodos/MyTodos";
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
      {
        path: "/users-blogs/:id",
        element: <DetailsUsersBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users-blog/${params.id}`),
      },
      { path: "/allusers", element: <AllUsers /> },
      { path: "/myblogs", element: <MyBlogs /> },
      { path: "/calender", element: <DateCalender /> },
      { path: "/my-todos", element: <MyTodos /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <SignUp /> },
    ],
  },
]);
