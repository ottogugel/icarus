import React from 'react'
import Helmet from "react-helmet";
import axios from 'axios'
import { API_BASE_URL } from "../../config/constant";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  //const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // const [loader, setLoader] = useState(false);

  const signup = (event) => {
    event.preventDefault();
    //setLoader(true);

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const reqData = {
      name: fname+' '+lname,
      email: email,
      phone: phone,
      password: password
    }

    axios
      .post(`${API_BASE_URL}/users`, reqData, config)
      .then((response) => {
        console.log(response);
        setEmail("")
        setFname("");
        setLname("")
        setPassword("");
        setPhone("");

      })
      .catch((err) => { console.log(err); });
  }

  return (
    <div className="container">
      <Helmet title="Icarus - Sign Up" />
      <h3 className="text-center text-uppercase pt-4">Create an Account</h3>
      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
        <form onSubmit={(ev) => signup(ev)}>
          <div className="mb-3">
            <label htmlFor="Firstname" className="form-label">
              First name
            </label>
            <input
              onChange={(e) => setFname(e.target.value)}
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
              onChange={(e) => setLname(e.target.value)}
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
              onChange={(e) => setPhone(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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