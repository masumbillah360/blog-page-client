import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const { handleGLogin } = useContext(AuthContext);
  const handleLogin = () => {
    handleGLogin(provider)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };
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
              <button
                onClick={handleLogin}
                className="btn rounded-lg text-4xl btn-primary my-1"
              >
                <FcGoogle></FcGoogle>{" "}
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
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover text-blue-600"
                  >
                    Don't have an account? SignUp
                  </Link>
                </label>
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

export default Login;
