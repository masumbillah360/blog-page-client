import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";
import DetailsusersBlog from "../DetailsUsersBlog/DetailsusersBlog";

const MyBlogs = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { data: myBlogs = [], isLoading } = useQuery({
    queryKey: ["myBlogs", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/my-blogs?email=${email}`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      {myBlogs.map((blog, num) => (
        <DetailsusersBlog num={num} blog={blog} key={blog._id} />
      ))}
    </div>
  );
};

export default MyBlogs;
