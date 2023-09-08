import React from 'react'
import Helmet from "react-helmet";


function About() {
  return (
    <div className="container">
      <Helmet title="Icarus - About Us" />
      <h3 className="text-center text-uppercase pt-4">About us</h3>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        <i className="fa-solid fa-circle-exclamation"></i> Since 2023, Icarus has
        been building a history of relevance and transformation in education in
        Paraíba. At the head of Icarus, there are four great leaders, each with
        more than 25 years in the classroom. Our Directors have been teachers of
        countless generations of students and this is a reason for joy and
        enthusiasm for all of us. They are André, Fernando, Marco and José.
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        Our proposal: <br />
        <i className="fa-solid fa-check"></i> Education of excellence - Education of
        excellence is a priority
        <br />
        <i className="fa-solid fa-check"></i> Student protagonism - At the center of
        the methodology is the student, the development of their skills,
        competences and an approach that aims to stimulate, accompany and
        consolidate a profile of leadership, innovation, socio-emotional balance
        and well-being.
        <br />
        <i className="fa-solid fa-check"></i> Happiness The search for happiness to
        have a high school performance in the future and the interest in
        offering an education of excellence have always been the objectives of
        Icarus.
        <br />
        <i className="fa-solid fa-check"></i> Innovation and results - For 7 months,
        Icarus has been dedicated to Education, with an exclusive and
        consecrated method, which originated in our Pre-vestibular course and
        maintains the tradition of excellence until today.
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        Our results are expressive over the years, always placing us as one of
        the educational institutions with more approvals in ENEM and entrance
        exams. Count on a pedagogical project that intensifies constant guidance
        and focus on the realization of dreams, proven with expressive results.
      </p>
    </div>
  );
}

export default About