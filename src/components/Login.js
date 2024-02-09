import React, { useState } from "react";
import Header from "./Header";
import { Form } from "react-router-dom";
const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="Backgroundimg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img>
      </div>
      <Form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-2">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700 rounded-lg border border-spacing-1 border-red-600 hover:border-spacing-4 "
          />
        )}
        <input
          type="text"
          placeholder="Email Or Phone Number"
          className="p-2 my-2 w-full bg-gray-700 rounded-lg border border-spacing-1 border-red-600 hover:border-spacing-4 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-gray-700 rounded-lg w-full  border  border-spacing-1  border-red-600 hover:border-spacing-4 "
        />
        <button className="p-4 my-2 bg-red-700  rounded-lg w-full text-sm cursor-pointer ">
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {signInForm
            ? "New To Netflix ? Sign Up Now"
            : "Allready registered.. Sign Up Now"}
        </p>
      </Form>
    </div>
  );
};

export default Login;