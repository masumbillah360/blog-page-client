import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
const SignleBlog = ({ blog, num }) => {
  const { name, picture, description, _id } = blog;
  return (
    <PhotoProvider>
      <div className="hero my-14 border border-primary rounded-lg">
        <div
          className={`hero-content flex-col lg:flex-row ${
            num % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <PhotoView src={picture}>
            <img
              src={picture}
              className="rounded-lg shadow-2xl md:w-1/2"
              alt="blogs-thumbnail"
            />
          </PhotoView>
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <Link to={`/blog/${_id}`} className="btn btn-secondary btn-sm">
              Details
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default SignleBlog;
