import React from "react";
import Links from "./Links";

const Main = () => {
  return (
    <>
      <div id="personalStatement">
        <h1>Personal Statement</h1>
        <p>
          I graduated from Northcoders bootcamp at the end of June 2020 as a
          junior full-stack developer. I am hoping to join an exciting, upcoming
          tech company as a junior Front-End developer which will help me excel
          and learn a lot within this industry. I have found that I gain the
          most satisfaction at work when I am challenged, have the opportunity
          to learn and develop and meet the organisation’s goals and customer
          expectations.
        </p>
      </div>
      <Links />
      <div id="projects">
        <h1>Projects</h1>
        <p>
          Throughout Northcoders, I have created multiple projects. For my back
          and front-end phases, I created a forum page which is similar to
          reddit. I created the back end using Express and MySQL and for the
          front-end, I used React JS. For my project phase, as a group of 4, we
          created an app in which a user can point their camera at a household
          object and it would translate that object into a language of their
          choice. We created the AR element using Tensorflow. None of us had
          experience with this, so it was a helpful experience as we all had to
          learn it seperately. For this project, I chose to be mainly on the
          front-end as I feel like this is where I am most effective. Both of
          these projects can be found on my github.
        </p>
      </div>
    </>
  );
};

export default Main;
