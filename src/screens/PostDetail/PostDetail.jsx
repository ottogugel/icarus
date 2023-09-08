import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../config/constant";
import './PostDetail.css'

function PostDetail() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [website, setWebsite] = useState();

  const { postId, userId } = useParams();

  const getPostAndUser = () => {
    axios
      .get(`${API_BASE_URL}/posts/${postId}`)
      .then((postRes) => {
        const { title, body } = postRes.data; // post information
        setTitle(title);
        setBody(body);
        axios
          .get(`${API_BASE_URL}/users/${userId}`)
          .then((userRes) => {
            const { name, email, phone, website } = userRes.data;
            setName(name)
            setEmail(email)
            setPhone(phone)
            setWebsite(website)
           // console.log(userRes.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // we want to load data on page load of this component
  useEffect(() => {
    //console.log("Post detail loaded");
    getPostAndUser();
  }, []); // empty array means execute only once when component loads

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center text-uppercase pt-4">Post Detail</h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-9 col-lg-9 col-sm-12">
          <div className="card mb-3">
            <img
              src="https://source.unsplash.com/random/400*400/?city,night"
              className="card-img-top card-img-height"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">User Information</h5>
              <p className="card-text">{name}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li className="list-group-item">
                <a href={`tel:${phone}`}>{phone}</a>
              </li>
              <li className="list-group-item">
                <a href={`www.${website}`}>Visit our website</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
