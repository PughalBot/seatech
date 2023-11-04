import React from "react";
import Router from "next/router";

export default function Login() {
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    Router.push("/dashboard");
  };

  return (
    <div className="h-screen w-screen bg-customGray">
      <div className=" flex h-full w-screen flex-col justify-center md:flex-row">
        {/* Left Side */}
        <div className="fixed top-0 w-full items-center justify-center bg-black md:static md:flex md:w-2/5">
          <h1 className="md:0 px-6 py-3 font-montserrat text-2xl font-bold text-white md:text-7xl">
            Ressilience.
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex w-full items-center justify-center md:w-3/5">
          <div className="flex flex-col p-5">
            <h2 className="font-montserrat text-black  text-4xl font-bold">Sign In</h2>
            <p className="mt-2 text-black font-lato">Sign in to your account</p>

            {/* Buttons */}
            <div className="my-6 flex w-full flex-1 flex-wrap gap-6 md:w-auto">
              <button
                className="flex w-full items-center gap-x-2.5 rounded-[10px] bg-white px-6 py-3 transition-[box-shadow] hover:shadow-md md:w-auto md:px-5 md:py-2"
                onClick={onSubmitHandler}
              >
                <div className="w-full text-center font-montserrat text-xs text-[#858585] ">
                  Sign in with Google
                </div>
              </button>
              <button onClick={onSubmitHandler} className="flex w-full items-center gap-x-2.5 rounded-[10px] bg-white px-6 py-3 transition-[box-shadow] hover:shadow-md md:w-auto md:px-5 md:py-2">
                <div className="w-full text-center font-montserrat text-xs text-[#858585]">
                  Sign in with Apple
                </div>
              </button>
            </div>

            {/* Login Card */}
            <div className="flex flex-col rounded-2xl md:w-  bg-white p-4 shadow-md md:p-7">
              <form
                action=""
                className="flex flex-col gap-y-5 "
                onSubmit={onSubmitHandler}
              >
                <div className="flex flex-col gap-y-2.5 ">
                  <label htmlFor="email" className="font-lato text-black">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="eamil"
                    placeholder="johndoe@gmail.com"
                    className="rounded-[10px] bg-customGray py-2 pl-4 font-lato transition-[background] focus:bg-customGray focus:outline-1"
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 ">
                  <label htmlFor="password" className="font-lato text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    className="rounded-[10px] bg-customGray py-2 pl-4 font-lato text-black focus:bg-customGray focus:outline-1 focus:transition-[background]"
                  />
                </div>
                <div className="font-lato text-sm text-[#346BD5] ">
                  Forgot password?
                </div>
                <button
                  type="submit"
                  className="w-full rounded-[10px] bg-black py-2.5 font-montserrat text-sm font-bold text-white"  
                >
                  Sign In
                </button>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}