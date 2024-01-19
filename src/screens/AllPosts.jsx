import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { API_BASE_URL } from "../config/constant";

function AllPosts() {

  // Create a variable to store all posts and a set method to update the value of posts
  // useState hook helps us create this variable with empty array
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);

  // function getAllPosts() {}
  //ES6 function to get all posts from REST API
  const getAllPosts = () => {
    setLoader(true);
    fetch(`${API_BASE_URL}/posts`)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setPosts(json);
        setLoader(false);
      });
  };

  // we want to load data on page load of this component
  useEffect(() => {
    // console.log("All Posts loaded")
    getAllPosts();
  }, []); // empty array means execute only once when components loads

  return (
    <div>
      <Helmet title="Icarus - All Posts" />
      <section className="container pt-2">
        <h3 className="text-center text-uppercase py-4">All Posts</h3>
        <div id="alertMsg"></div>
        <div className="row">
          {loader ? (
            <div className="col-12 text-center">
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            posts.map((post, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-2">
                  <div className="card text-center mb-3">
                    <img
                      src="https://source.unsplash.com/random/400*400/?city,night"
                      className="card-img-top rounded-top"
                      alt="..."
                      style={{ height: "280px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.body}</p>
                      <div className="d-grid">
                        <Link
                          to={`/posts/${post.id}/${post.userId}`}
                          className="btn btn-primary bg-gradient"
                        >
                          <i class="fa-solid fa-location-arrow"></i> Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}

export default AllPosts;
