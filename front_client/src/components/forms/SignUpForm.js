import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { Link } from "react-router-dom";


const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const SignUpForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="inputEmail">
          Email
        </label>
        <input
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
          type="submit"
          className="btn btn-primary rounded-pill w-100"
        >
          Next
        </button>
      </Link>
    </form>
  );
};
export default SignUpForm;
