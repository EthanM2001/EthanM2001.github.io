import React from "react";
import image from "../images/EthanMoss.jpg";

const Progression = () => {
  return (
    <div>
      <img src={image} alt="Me" className="me" />
      <br />
      <progress value="50" max="100" />
    </div>
  );
};

export default Progression;
