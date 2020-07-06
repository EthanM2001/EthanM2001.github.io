import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        <span className="text_1">Hello, I'm Ethan Moss</span>
        <span className="text_2">
          I am hoping to become a front-end developer
        </span>
      </h1>
      <a href="https://github.com/EthanM2001">
        <img
          className="github"
          src="https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg"
          alt="github"
        />
      </a>
      <a href="https://www.linkedin.com/in/ethan-moss-666299172/">
        <img
          className="linkedin"
          src="https://www.cbronline.com/wp-content/uploads/2016/06/linkedin-770x578.jpg"
          alt="linkedin"
        />
      </a>
    </div>
  );
}

export default App;
