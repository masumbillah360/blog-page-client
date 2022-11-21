import React from "react";

const UsersComments = ({ comments }) => {
  const { comment, userName, userThumb } = comments;
  console.log(comments);
  return (
    <>
      <div className="flex justify-start items-start w-full my-1">
        <div className="avatar mx-4">
          <div className="w-12 mt-1 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={userThumb} alt="" />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold">{userName}</h4>
          <p>{comment} </p>
        </div>
      </div>
    </>
  );
};

export default UsersComments;
