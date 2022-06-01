import React from "react";
import FileBox from "./FileBox";
import "./FileDashboard.css";
function FileDashboard() {
  return (
    <div className="fileDashboard">
      <h1>File DashBoard</h1>
      <div className="fileContainer">
        <FileBox />
        <FileBox />
        <FileBox />
        <FileBox />
        <FileBox />
        <FileBox />
      </div>
    </div>
  );
}

export default FileDashboard;
