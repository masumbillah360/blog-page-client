import { useQuery } from "@tanstack/react-query";
import React from "react";
import SignleBlog from "./SignleBlog";

const HomePage = () => {
  const { data: home = [] } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/homedata");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      {home.map((blog, num) => (
        <SignleBlog key={blog.price} blog={blog} num={num} />
      ))}
      <div className="text-center">
        <button className="btn btn-primary mb-10">See More</button>
      </div>
    </div>
  );
};

export default HomePage;
