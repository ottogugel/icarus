import React from 'react'
import Helmet from "react-helmet";
import axios from 'axios'
import { useState } from 'react';

function SignUp() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {

  }

  return (
    <div className="container">
      <Helmet title="Icarus - Sign Up" />
      <h3 className="text-center text-uppercase pt-4">Create an Account</h3>
      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
        <form onSubmit={() => signup()}>
          <div className="mb-3">
            <label htmlFor="Firstname" className="form-label">
              First name
            </label>
            <input
              onChange={}
              type="text"
              className="form-control"
              id="Firstname"
              placeholder="Icarus"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Lastname" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="Lastname"
              placeholder="School"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Contact no.
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="+13212801486"
            />
          </div>
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
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp