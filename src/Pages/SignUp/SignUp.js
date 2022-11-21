import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { user, setUser, handleSignUp, handleUpdatUser } =
    useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const formData = new FormData();
  const handleCreateUser = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const cfpassword = data.cfpassword;
    const thumbnail = data.photo[0];
    formData.append("image", thumbnail);
    const userInfo = { name, email, password, cfpassword, formData };
    console.log(userInfo);
    fetch(
      "https://api.imgbb.com/1/upload?key=41136a0a245dfdbc419be792c0876eea",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        handleSignUp(email, password)
          .then((result) => {
            handleUpdatUser(name, data.data.url)
              .then(() => {
                console.log("result");
                toast.success("Congrates for create an account");
                navigate("/login");
              })
              .catch((err) => console.log(err));
            setUser(result.user);
          })
          .catch((err) => console.log(err));
      })
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
            <form onSubmit={handleSubmit(handleCreateUser)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name ..."
                  {...register("name", {
                    required: "Name must provide please",
                  })}
                  className="input input-bordered w-full"
                />
                {errors.name && <p>{errors.name?.message}</p>}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("email", {
                    required: "Please give your verified email address",
                  })}
                  className="input input-bordered w-full"
                />
                {errors.email && <p>{errors.email?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    required: "Please enter secure password",
                  })}
                  className="input input-bordered"
                />
                {errors.password && <p>{errors.password?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password-cf"
                  placeholder="Confirm Password"
                  {...register("cfpassword", {
                    required: "Please enter secure password",
                  })}
                  className="input input-bordered"
                />
                {errors.cfpassword && <p>{errors.cfpassword?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image/Photo</span>
                </label>
                <input
                  type="file"
                  {...register("photo", { required: "Select a photo" })}
                  className="file-input file-input-bordered file-input-primary w-full"
                />
                {errors.photo && <p>{errors.photo?.message}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
