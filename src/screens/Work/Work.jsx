import React from "react";
import Helmet from "react-helmet";
import './Work.css'

function Work() {
  return (
    <div className="container">
      <Helmet title="Icarus - Work with Us" />
      <h3 className="text-center text-uppercase pt-4">Work with Us</h3>
      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Icarus"
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
            <div id="emailHelp" className="form-text mb-3">
              We'll never share your email with anyone else.
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Choose the department
              </label>
              <select className="form-select" id="department">
                <option defaultValue=""></option>
                <option value="S">Student</option>
                <option value="T">Teacher</option>
                <option value="J">Janitor</option>
                <option value="DM">Doorman</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                When can we reach you?
              </label>
              <select className="form-select" id="department">
                <option defaultValue="">Best time to reach</option>
                <option value="M">Morning</option>
                <option value="A">Afternoon</option>
                <option value="E">Evening</option>
              </select>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-warning bg-gradient">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Work;
