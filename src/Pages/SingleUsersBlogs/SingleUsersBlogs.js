import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const SingleUsersBlogs = ({ blog, num }) => {
  const { thumbnail, title, description, _id } = blog;
  return (
    <PhotoProvider>
      <div className="hero my-14 border border-primary rounded-lg">
        <div
          className={`hero-content flex-col lg:flex-row ${
            num % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <PhotoView src={thumbnail}>
            <img
              src={thumbnail}
              className="rounded-lg shadow-2xl md:w-1/2"
              alt="blogs-thumbnail"
            />
          </PhotoView>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">
              {title.length > 70 ? (
                <span>{title.slice(0, 70)}"..."</span>
              ) : (
                <span>{title}</span>
              )}
            </h1>
            <p className="py-6">
              {description.length > 400 ? (
                <span>{description.slice(0, 400)}...</span>
              ) : (
                <span>{description}</span>
              )}
            </p>
            <Link
              to={`/users-blogs/${_id}`}
              className="btn btn-secondary btn-sm"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default SingleUsersBlogs;
