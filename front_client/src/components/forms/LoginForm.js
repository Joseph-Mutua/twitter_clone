import React from 'react'

const LoginForm = () => {
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
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkRemember"
            />
            <label className="form-check-label" htmlFor="checkRemember">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
}
export default LoginForm;