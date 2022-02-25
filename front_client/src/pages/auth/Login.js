import React from 'react'
import SignUpForm from '../../components/forms/SignUpForm';

const Login = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 m-auto">
            <h1 className="m-4 text-center">Login Page</h1>
            <SignUpForm />
          </div>
        </div>
      </div>
    );
}

export default Login;