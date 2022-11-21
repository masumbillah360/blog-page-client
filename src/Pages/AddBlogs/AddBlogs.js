import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const AddBlogs = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formData = new FormData();
  const date = new Date();
  const handleBlogs = (data) => {
    const postDate = date.toDateString();
    const thumbnail = data?.thumbnail[0];
    formData.append("thumbnail", thumbnail);
    const blogData = {
      userName: user.displayName,
      userEmail: user.email,
      userThumbnail: user.photoURL,
      date: postDate,
      time: date.getTime(),
      title: data.title,
      description: data.description,
      thumbnail: thumbnail,
    };
    console.log(blogData);
  };
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
