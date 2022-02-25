import React from "react";
import { Navigate } from "react-router-dom";
import SignUpForm from "../../components/forms/SignUpForm";
import { isAuth } from "../../pages/auth/Helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify//dist/ReactToastify.min.css";

const SignUp = () => {
  return (
    <>
      <div className="col-d-6 offset-md-3">
        <ToastContainer />
        {isAuth() ? <Navigate replace to="/" /> : null}
        <h1 className="text-center p-5">Signup</h1>
        {SignUpForm()}
      </div>
    </>
  );
};

export default SignUp;
