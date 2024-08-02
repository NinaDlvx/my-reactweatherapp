import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Nina Delvaux using React. It is open-sourced
          on Github and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
