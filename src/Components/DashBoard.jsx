import React from "react";

export default function DashBoard() {
  return (
    <div className="dashContainer">
      <div className="classes">
        <div className="header">
          <h2>Classes</h2>
          {/* <button>Add Class</button> */}
        </div>
        <div className="content">
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
        </div>
      </div>
      <div className="material">
        <div className="header">
          <h2>Material</h2>
          {/* <button>Add Class</button> */}
        </div>
        <div className="content">
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
        </div>
      </div>
    </div>
  );
}
