import React, { useState } from 'react'
import { API_BASE_URL } from "../../config/constant";
import axios from "axios";
import Helmet from "react-helmet";

function SignUp() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // const [loader, setLoader] = useState(false);
 function alertFunction(message, type) {
   var wrapper = document.createElement("div");
   wrapper.innerHTML =
     '<div class="alert alert-' +
     type +
     ' alert-dismissible" role="alert">' +
     message +
     '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

   var alertPlaceholder = document.getElementById("alertMsg");
   alertPlaceholder.append(wrapper);
 }

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
        alertFunction('Registration Successfully, Please Proceed to Login!', 'success')
        setEmail("")
        setFname("");
        setLname("")
        setPassword("");
        setPhone("");

      })
      .catch((err) => {
        alertFunction('Some error occurred', 'danger')
        console.log(err);
      });
  }

  return (
    <div className="container">
      <Helmet title="Icarus - Sign Up" />
      <h3 className="text-center text-uppercase pt-4">Create an Account</h3>
      <div id="alertMsg"></div>
      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
        <form onSubmit={(ev) => signup(ev)}>
          <div className="mb-3">
            <label htmlFor="Firstname" className="form-label">
              First name
            </label>
            <input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              type="text"
              className="form-control"
              id="Firstname"
              placeholder="Icarus"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Lastname" className="form-label">
              Last name
            </label>
            <input
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              type="text"
              className="form-control"
              id="Lastname"
              placeholder="School"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Contact no.
            </label>
            <input
              value={phone}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="icarus@gmail.com"
              required
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
              value={password}
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