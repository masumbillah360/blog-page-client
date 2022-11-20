import React from "react";
import { Link } from "react-router-dom";

const SignleBlog = ({ blog, num }) => {
  const { name, picture, description } = blog;
  return (
    <div className="hero my-14">
      <div
        className={`hero-content flex-col lg:flex-row ${
          num % 2 === 0 ? "lg:flex-row-reverse" : ""
        }`}
      >
        <img
          src={picture}
          className="rounded-lg shadow-2xl md:w-1/2"
          alt="blogs-thumbnail"
        />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{description}</p>
          <Link className="btn btn-primary">See Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SignleBlog;
