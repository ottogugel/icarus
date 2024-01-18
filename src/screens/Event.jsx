import React from "react";
import Helmet from "react-helmet";

function Event() {
  return (
    <div className="container">
      <Helmet title="Icarus - Event" />
      <h3 className="text-center text-uppercase pt-4">Event</h3>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        <i className="fa-solid fa-trophy"></i> Collegiate Olympics
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        <i className="fa-solid fa-gamepad"></i> School Games
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        <i className="fa-solid fa-person-breastfeeding"></i> Mother's Day
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        <i className="fa-solid fa-user-tie"></i> Father's Day
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        <i className="fa-solid fa-user-tie"></i> Teacher's Day
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        <i className="fa-solid fa-user-tie"></i> Test
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        <i className="fa-solid fa-user-tie"></i> Test
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        <i className="fa-solid fa-user-tie"></i> Test
      </p>
      <p className="p-3 lh-2">
        <i className="fa-solid fa-circle-exclamation"></i> These events are in
        progress
      </p>
    </div>
  );
}

export default Event;

