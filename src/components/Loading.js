import React from "react";

const Loading = () => (
  <div className="loading">
    <p>
      Loading Tasks
      <span style={{ animationDelay: `10ms` }}>.</span>
      <span style={{ animationDelay: `100ms` }}>.</span>
      <span style={{ animationDelay: `200ms` }}>.</span>
    </p>
  </div>
);
export default Loading;
