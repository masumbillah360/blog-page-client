import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../Components/Spinner/Spinner";
import SignleBlog from "../HomePage/SignleBlog";

const UsersBlog = () => {
  //   const usersBlog = [1, 2, 3];
  const { data: usersBlog = [], isLoading } = useQuery({
    queryKey: ["usersBlogs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/homedata");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      {usersBlog.map((blog, num) => (
        <SignleBlog blog={blog} num={num} key={blog._id} />
      ))}
    </div>
  );
};

export default UsersBlog;
