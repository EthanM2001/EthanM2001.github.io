import React from "react";
import image from "../images/EthanMoss.jpg";

const Progression = () => {
  return (
    <div className="progression">
      <img src={image} alt="Me" className="me" />
      <div className="bars">
        <p className="progressTitle">Technical skills:</p>
        <p>
          HTML <progress value="65" max="100" />
        </p>
        <br />
        <p>
          CSS <progress value="65" max="100" />
        </p>
        <br />
        <p>
          React <progress value="80" max="100" />
        </p>
        <br />
        <p>
          Express <progress value="55" max="100" />
        </p>
        <br />
        <p>
          JavaScript <progress value="80" max="100" />
        </p>
        <br />
        <p>
          MySQL <progress value="55" max="100" />
        </p>
      </div>
    </div>
  );
};

export default Progression;
