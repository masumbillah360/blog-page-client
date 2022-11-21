import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../Components/Spinner/Spinner";
import SignleBlog from "../HomePage/SignleBlog";

const AllBlogs = () => {
  const { data: allBlogs = [], isLoading } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allblogs");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {allBlogs.map((blog, num) => (
        <SignleBlog key={blog._id} blog={blog} num={num} />
      ))}
    </div>
  );
};

export default AllBlogs;
