import React from 'react'
import { NavLink } from 'react-router-dom';
import Helmet from "react-helmet";

function PageNotFound() {
  return (
    <>
      <div className='py-5'>
        <Helmet title='404...'/>
        <h2 className="text-center text-uppercase text-primary">
          Page you are looking for does not exist!
        </h2>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <NavLink to="/" className="btn btn-primary text-uppercase">
          Return to Home
        </NavLink>
      </div>
    </>
  );
}

export default PageNotFound