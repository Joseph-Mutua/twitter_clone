import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { Link, Redirect, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const [values, setValues] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: "123456",
    birthDate: "2/2/2023",
  });

  const { name, email, password, birthDate, buttonText } = values;

  const onChange = (dateString) => {
    console.log("DateString", dateString);
    setValues({ ...values, birthDate: dateString });
  };

  const handleChange = (value) => (e) => {
    setValues({ ...values, [value]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API}/signup`,
      data: {
        name,
        email,
        password,
        birthDate,
      },
    })
      .then((res) => {
        console.log("SIGNUP SUCCESS", res);

        //Save the response (user, token) to localstorage/cookie
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          buttonText: "Submitted",
        });
        toast.success(`Hey ${res.data.user.name}, Welcome Back!`);
      })
      .catch((err) => {
        console.log("SIGNUP ERROR", err.response);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(err.response);
      });
  };

  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="inputEmail">
          Email
        </label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="inputPassword">
          Password
        </label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          <span>
            <b>Date of Birth</b>
          </span>
        </label>
        <p>
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
        <Space direction="horizontal">
          <DatePicker onChange={onChange} />
        </Space>
      </div>

      <Link to="#">
        {" "}
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary rounded-pill w-100"
        >
          Sign Up
        </button>
      </Link>
    </form>
  );
};
export default SignUpForm;
