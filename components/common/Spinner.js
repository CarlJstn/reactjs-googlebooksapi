import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "60px", margin: "10% auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
}
