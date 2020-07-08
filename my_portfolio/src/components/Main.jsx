import React from "react";
import Links from "./Links";

const Main = () => {
  return (
    <>
      <div id="personalStatement">
        <h1>Personal Statement</h1>
        <p>
          I graduated from Northcoders bootcamp at the end of June 2020 as a
          full-stack developer. I am hoping to join an exciting, upcoming tech
          company as a junior front-end developer which will help me excel and
          learn a lot within this industry.
        </p>
      </div>
      <Links />
      <div id="projects">
        <h1>Projects</h1>
        <p>
          Throughout Northcoders, I have created multiple projects. For my
          back-end and front-end phases, I created a forum page which is similar
          to reddit. Then, for my project phase, as a group of 4, we created an
          app in which a user can point their camera at a household object and
          it would translate that object into a language of their choice. Both
          of these projects can be found on my github.
        </p>
      </div>
    </>
  );
};

export default Main;
