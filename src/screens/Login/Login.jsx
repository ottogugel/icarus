import React, { useState } from "react";
import Helmet from "react-helmet";
import axios from "axios";
import { API_BASE_URL } from "../../config/constant";
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const login = (event) => {
    event.preventDefault();
    //setLoader(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const reqData = {
      email: email,
      password: password,
    };

    axios
      .post(`${API_BASE_URL}/users`, reqData, config)
      .then((response) => {
        //Assue user has successfully authenticated
        // Fetch the details of Authenticated user, In our case assume userId=1
        const userId = 1;
        fetch(`${API_BASE_URL}/users/${userId}`)
          .then((response) => response.json())
          .then((json) => {
            localStorage.setItem('user', JSON.stringify(json));
            localStorage.setItem('token', 'sdfgxzasmwlqoei');
            navigate('/posts');
          });
      })
      .catch((err) => {
        alertFunction("Some error occurred", "danger");
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Helmet title="Icarus - Login" />
      <h3 className="text-center text-uppercase pt-4">Please login below</h3>
      <div id="alertMsg"></div>
      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
        <form onSubmit={(e) => login(e)}>
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
