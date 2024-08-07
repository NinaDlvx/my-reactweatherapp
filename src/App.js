import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Brussels" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/NinaDlvx"
            target="_blank"
            rel="noreferrer"
          >
            Nina Delvaux
          </a>{" "}
          using React. It is{" "}
          <a
            href="https://github.com/NinaDlvx/my-reactweatherapp"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on Github and hosted on{" "}
          <a
            href="https://myreactweatherapplication.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
