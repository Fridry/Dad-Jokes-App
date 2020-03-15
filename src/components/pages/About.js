import React from "react";

function About() {
  return (
    <div>
      <h1>Dad Jokes App</h1>
      <p>
        A React JS App, based on the video{" "}
        <a href="https://www.youtube.com/watch?v=KQOtXYC0We8">
          ReactJS Crash Course 2020 | React Functional Components, Hooks, and
          React Router
        </a>{" "}
        from the YouTube Channel DevBrock, using:
      </p>
      <ul>
        <li>
          API
          <a href="https://icanhazdadjoke.com/"> icanhazdadjoke</a>
        </li>
        <li>Functional Components</li>
        <li>Axios</li>
        <li>Hooks</li>
        <li>React Router</li>
      </ul>
    </div>
  );
}

export default About;
