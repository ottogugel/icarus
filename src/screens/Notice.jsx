import React from "react";
import Helmet from "react-helmet";

function Notice() {
  return (
    <div className="container">
      <Helmet title="Icarus - Notice" />
      <h3 className="text-center text-uppercase pt-4">Notice</h3>
      <p className="text-muted shadow-sm rounded p-3 lh-2">Summer vacation</p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        Study of languages
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">Personal Hygiene</p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">Annual Holidays</p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">School breaks</p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">
        Promotions on registration and tuition
      </p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">Test</p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">Test</p>
      <p className="text-muted shadow-sm rounded p-3 lh-2">Test</p>
    </div>
  );
}

export default Notice