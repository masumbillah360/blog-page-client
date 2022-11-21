import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const CommentBox = ({ postId, refetch }) => {
  const { user } = useContext(AuthContext);
  const time = new Date().getTime().toString();
  const handleComents = async (e) => {
    e.preventDefault();
    const userComments = e.target.comment.value;
    const commentsInfo = {
      comment: userComments,
      postId,
      userName: user.displayName,
      time,
      userThumb: user.photoURL,
    };
    fetch("http://localhost:5000/users-comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleComents} className="">
      <textarea
        className="textarea textarea-primary mx-auto w-full px-1"
        rows="4"
        name="comment"
        placeholder="Add comments here..."
      />
      <div className="my-2 text-center md:text-end">
        <input
          type="submit"
          className="md:btn-primary md:btn btn btn-sm btn-primary"
          value="Add Comment"
        />
      </div>
    </form>
  );
};

export default CommentBox;
