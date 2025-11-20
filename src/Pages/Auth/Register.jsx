import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleBtn from "./GoogleBtn";
import axios from "axios";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate()


  const handleRegister = (data) => {
    console.log("from register", data.photo[0]);
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);

        // store the image and get the photo url
        const formImage = new FormData();
        formImage.append("image", profileImg);
        const imageUrlApi = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(imageUrlApi, formImage).then((res) => {
          console.log("after post", res.data.data.url);
          // update user profile
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then()
            .catch((err) => {
              console.log(err);
            });
        });
        navigate(location?.state || '/')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto ">
      <div className="text-center mt-3">
        <h3 className="text-3xl font-semibold">Create an Account</h3>
        <p>Register with ZapShift</p>
      </div>
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <fieldset className="fieldset ">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}
          {/* photo */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">Photo is required</p>
          )}

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500"> Password is Required</p>
          )}

          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 character or longer
            </p>
          )}

          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must contain 6 character and uppercase, lowercase, number
              & special character
            </p>
          )}
          
          <button className="btn btn-neutral mt-4 bgColor1 text-black border-0">
            register
          </button>
          <p>
            Already have an account?{" "}
            <Link state={location?.state} to="/login" className="underline font-bold textColor3">
              Login
            </Link>
          </p>
        </fieldset>
        <GoogleBtn />
      </form>
    </div>
  );
};

export default Register;
