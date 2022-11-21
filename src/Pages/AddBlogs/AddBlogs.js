import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";

const AddBlogs = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const date = new Date();
  const formData = new FormData();
  const handleBlogs = (blogData) => {
    const postDate = date.toDateString();
    const blogThumbnail = blogData.thumbnail[0];
    formData.append("image", blogThumbnail);
    setLoading(true);
    fetch(
      "https://api.imgbb.com/1/upload?key=41136a0a245dfdbc419be792c0876eea",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const blogPost = {
          userName: user.displayName,
          userEmail: user.email,
          userThumbnail: user.photoURL,
          date: postDate,
          time: date.getTime(),
          title: blogData.title,
          description: blogData.description,
          thumbnail: data.data.url,
        };
        fetch("http://localhost:5000/users-bolg", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(blogPost),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            console.log(blogPost);
            setLoading(false);
            navigate("/myblogs");
          });
      });
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1 className="text-xl font-bold text-center">Add Your Blogs</h1>
      <div>
        <form onSubmit={handleSubmit(handleBlogs)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title here..."
              {...register("title", { required: "please add an title..." })}
              className="input input-bordered input-primary w-full"
            />
            {errors.title && <p>{errors.title?.message}</p>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-primary w-4/5 mx-auto md:w-full px-1"
              rows="4"
              placeholder="Add Blogs Content..."
              {...register("description", {
                required: "add a creative description",
              })}
            />
            {errors.description && <p>{errors.description?.message}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image/Photo</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full"
              {...register("thumbnail", { required: "add a relative image" })}
            />
            {errors.thumbnail && <p>{errors.thumbnail?.message}</p>}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
