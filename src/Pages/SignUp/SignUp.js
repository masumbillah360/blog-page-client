import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen md:gap-5 justify-center items-center">
      <div className="col-span-12 md:col-span-4">
        <h1 className="text-5xl font-bold text-center md:text-end">
          Let's Play The Life Changing Game
        </h1>
        <p className="text-center md:text-end underline mt-5 font-bold text-green-500">
          Don't Hide Your Creativity From Other's
        </p>
      </div>
      <div className="col-span-12 md:col-span-8">
        <div className="card w-full shadow-2xl bg-base-100">
          <div className="card-body w-full">
            <div className="flex justify-around w-full">
              <button className="btn rounded-lg text-4xl btn-primary my-1">
                <FcGoogle />
              </button>
              <button className="btn rounded-lg text-4xl btn-primary my-1">
                <FaFacebook />
              </button>
              <button className="btn  rounded-lg text-4xl btn-primary my-1">
                <FaTwitter />
              </button>
            </div>
            <form>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name ..."
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password-cf"
                  placeholder="Confirm Password"
                  className="input input-bordered"
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
