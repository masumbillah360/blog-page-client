import React, { useEffect, useState } from "react";
import SignleBlog from "./SignleBlog";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data.map((blog, num) => (
        <SignleBlog key={blog.price} blog={blog} num ={num} />
      ))}
    </div>
  );
};

export default HomePage;
