import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import SignleBlog from "./SignleBlog";

const HomePage = () => {
  const { data: home = [], isLoading } = useQuery({
    queryKey: ["home"],
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
      {home.map((blog, num) => (
        <SignleBlog key={blog._id} blog={blog} num={num} />
      ))}
      <div className="text-center">
        <Link to="/allblogs" className="btn btn-primary mb-10">
          See More
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
