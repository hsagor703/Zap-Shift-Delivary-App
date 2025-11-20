import React, { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleBtn from "./GoogleBtn";

const Login = () => {
  const { loginUser, resetPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        alert ('check your email')
        console.log("password reset successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  mx-auto ">
        <div className="text-center mt-3">
          <h3 className="text-3xl font-semibold">Welcome Back</h3>
          <p>Login with ZapShift</p>
        </div>
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              ref={emailRef}
              className="input"
              placeholder="Email"
            />

            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is Required</p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                minLength: 6,
              })}
              className="input"
              placeholder="Password"
            />

            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}

            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must have 6 character or longer
              </p>
            )}

            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must contain 6 character and uppercase, lowercase,
                number & special character
              </p>
            )}

            <div>
              <a
                type="button"
                onClick={handleResetPassword}
                className="link link-hover"
              >
                Forgot password?
              </a>
            </div>
            <button className="btn btn-neutral mt-4 bgColor1 border-0 text-black">
              Login
            </button>
            <p>
              Don’t have any account?{" "}
              <Link
                state={location?.state}
                to="/register"
                className="underline font-bold textColor3"
              >
                Register
              </Link>
            </p>
          </fieldset>
          <GoogleBtn />
        </form>
      </div>
    </div>
  );
};

export default Login;
