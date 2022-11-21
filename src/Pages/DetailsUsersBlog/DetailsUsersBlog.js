import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import CommentBox from "./CommentBox";
import UsersComments from "./UsersComments";

const DetailsUsersBlog = () => {
  const data = useLoaderData();
  const {
    date,
    description,
    thumbnail,
    title,
    userName,
    userThumbnail,
    userEmail,
    _id,
  } = data;
  const {
    data: userComments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userComments", _id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users-comments?id=${_id}`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <PhotoProvider>
      <div className="px-2 md:p-0">
        <div>
          <PhotoView src={thumbnail}>
            <img
              src={thumbnail}
              alt="blog-thumbnail"
              className="w-full md:w-2/5 mx-auto rounded-lg"
            />
          </PhotoView>
          <div>
            <h1 className="text-xl md:4xl font-bold my-2">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <div className="">
              <div className="flex justify-start mb-8">
                <div className="avatar mr-4">
                  <div className="w-12 mt-1 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                    <img src={userThumbnail} alt="" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">{userName}</h4>
                  <p>{date}</p>
                </div>
              </div>

              <>
                <CommentBox postId={_id} refetch={refetch} />
              </>
            </div>
          </div>
          <div className=" w-full grid grid-cols-1 gap-4 max-h-screen overflow-auto">
            {userComments.map((comment) => (
              <UsersComments key={comment._id} comments={comment} />
            ))}
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default DetailsUsersBlog;
