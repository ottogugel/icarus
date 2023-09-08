import React from "react";
import Helmet from "react-helmet";
import './Contact.css'

function Contact() {
  return (
    <div className="container">
      <Helmet title="Icarus - Contact Us" />
      <h3 className="text-center text-uppercase pt-4">Contact us</h3>
      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full name
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
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">
              Enter your query below
            </label>
            <textarea id="query" className="form-control" required></textarea>
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

export default Contact;
