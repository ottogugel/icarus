import React from "react";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="">
      <Helmet title="Icarus - Home" />
      {/* Carousel */}
      <section className="hero-section">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100 "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHNjaG9vbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
      {/* Card */}
      <section className="featured-posts container pt-2">
        <h3 className="text-center py-4">Notice</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card text-center mb-3">
              <img
                src="https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3VtbWVyJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-dark bg-gradient">
                <h5 className="card-title text-white">Summer vacation</h5>
                <p className="card-text text-white">
                  On this summer vacation, take the opportunity to go with your
                  family to the beach and have a lot of fun, in addition to
                  getting a tan.
                </p>
                <div className="d-grid">
                  <NavLink to="/" className="btn btn-warning bg-gradient">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card text-center mb-3">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxTdHVkeSUyMG9mJTIwbGFuZ3VhZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-dark bg-gradient">
                <h5 className="card-title text-white">Study of languages</h5>
                <p className="card-text text-white">
                  We are providing the language materials for you to choose from
                  English, Spanish, French, German, Japanese and Korean.
                </p>
                <div className="d-grid">
                  <NavLink to="/" className="btn btn-warning bg-gradient">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card text-center mb-3">
              <img
                src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGVyc29uYWwlMjBIeWdpZW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-dark bg-gradient">
                <h5 className="card-title text-white">Personal Hygiene</h5>
                <p className="card-text text-white">
                  We know that personal hygiene is very important today
                  everywhere, we are selecting some tips for us to put into
                  practice.
                </p>
                <div className="d-grid">
                  <NavLink to="/" className="btn btn-warning bg-gradient">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest */}
      <section className="latest-posts container pt-2">
        <h3 className="text-center py-4">Event</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card text-center mb-3">
              <img
                src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2Nob29sJTIwR2FtZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-dark bg-gradient">
                <h5 className="card-title text-white">School Games</h5>
                <p className="card-text text-white">
                  They seek to be the initial basis of sports training in the
                  country, encouraging and developing school sport.
                </p>
                <div className="d-grid">
                  <NavLink to="/" className="btn btn-warning bg-gradient">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card text-center mb-3">
              <img
                src="https://images.unsplash.com/photo-1646816185462-b9970adda183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW90aGVyJ3MlMjBkYXklMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-dark bg-gradient">
                <h5 className="card-title text-white">Mother's Day</h5>
                <p className="card-text text-white">
                  On this day we have the initiative coming up to welcome all
                  students, embracing diversity and promoting respect among
                  children.
                </p>
                <div className="d-grid">
                  <NavLink to="/" className="btn btn-warning bg-gradient">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card text-center mb-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1666299764057-b0ca4ca13e15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFRlYWNoZXIncyUyMERheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-dark bg-gradient">
                <h5 className="card-title text-white">Teacher's Day</h5>
                <p className="card-text text-white">
                  On this day we pay tribute to those who every day with their
                  dedication, effort and passion take care of the minds of
                  tomorrow.
                </p>
                <div className="d-grid">
                  <NavLink to="/" className="btn btn-warning bg-gradient">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*
      <section
        className="container-fluid bg-dark bg-gradient mt-4"
        style={{ minHeight: "180px" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="fs-1 text-warning my-3 fa-solid fa-location-dot"></i>
          <h3 className="text-white">We have wide variety of Posts</h3>
          <button className="fw-bold btn btn-warning bg-gradient my-2">
            View All Posts
          </button>
        </div>
      </section>
      */}
      {/* Our Portfolios */}
      {/*
      <section className="our-portfolios container">
        <h3 className="text-center text-uppercase py-4">Our Portfolios</h3>
        <div className="container text-center">
          <div className="row g-2">
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img
                  src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2Nob29sJTIwR2FtZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img
                  src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2Nob29sJTIwR2FtZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img
                  src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2Nob29sJTIwR2FtZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img
                  src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2Nob29sJTIwR2FtZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}

export default Home;
