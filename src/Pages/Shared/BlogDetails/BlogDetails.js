import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blogData = useLoaderData();
  const { name, picture, description } = blogData;
  return (
    <PhotoProvider>
      <div className="">
        <div>
          <PhotoView src={picture}>
            <img
              src={picture}
              alt="blog-thumbnail"
              className="w-full md:w-2/5 mx-auto rounded-lg"
            />
          </PhotoView>
          <div>
            <h1 className="text-4xl font-bold my-2">{name}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div>
            
        </div>
      </div>
    </PhotoProvider>
  );
};

export default BlogDetails;
