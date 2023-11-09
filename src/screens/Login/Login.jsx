import React from "react";
import Helmet from "react-helmet";

function Login() {
  return (
    <div className="container">
      <Helmet title="Icarus - Login" />
      <h3 className="text-center text-uppercase pt-4">Please login below</h3>
      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="icarus@gmail.com"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-warning bg-gradient">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
