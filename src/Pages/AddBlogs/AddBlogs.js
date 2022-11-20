import React from "react";

const AddBlogs = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center">Add Your Blogs</h1>
      <div>
        <form>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title here..."
              className="input input-bordered input-primary w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-primary w-4/5 md:w-full px-1"
              rows="4"
              placeholder="Add Blogs Content..."
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image/Photo</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full"
            />
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
