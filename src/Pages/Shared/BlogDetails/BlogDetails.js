import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blogData = useLoaderData();
  const { name, picture, description } = blogData;
  return (
    <PhotoProvider>
      <div className="px-2 md:p-0">
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
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full text-center">
            <textarea
              className="textarea textarea-primary w-4/5 md:w-full px-1"
              placeholder="Bio"
            />
            <div className="my-2 text-center md:text-end">
                
            <button className="btn btn-primary">Add</button>
            </div>
          </div>
          <div className=" w-full grid grid-cols-1 gap-4 max-h-screen overflow-auto">
            <div className="flex justify-start items-start w-full">
              <div className="avatar mx-4">
                <div className="w-12 mt-1 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold">Md: Masum Billah</h4>
                <p>
                  Die seh mein um zauberhauch euch gleich nicht. Wie sonst ich
                  an bilder ich, unbestimmten irren ich mit wiederholt mein. Ein
                  einer zug ich steigen wohl es freundschaft froher fühl,.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start">
              <div className="avatar mx-4">
                <div className="w-12 mt-1 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold">Md: Masum Billah</h4>
                <p>
                  Die seh mein um zauberhauch euch gleich nicht. Wie sonst ich
                  an bilder ich, unbestimmten irren ich mit wiederholt mein. Ein
                  einer zug ich steigen wohl es freundschaft froher fühl,.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start">
              <div className="avatar mx-4">
                <div className="w-12 mt-1 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold">Md: Masum Billah</h4>
                <p>
                  Die seh mein um zauberhauch euch gleich nicht. Wie sonst ich
                  an bilder ich, unbestimmten irren ich mit wiederholt mein. Ein
                  einer zug ich steigen wohl es freundschaft froher fühl,.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default BlogDetails;
