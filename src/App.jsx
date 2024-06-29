// import { useState } from "react";
import "./App.css";
import resumeZenLogo from "./assets/zen-logo.png";
import ResumeWizard from "./components/ResumeWizard";
import githubLogo from "./assets/github-mark.png";

function App() {
  return (
    <>
      <header>
        <img src={resumeZenLogo} />
        <h1>Resume Zen</h1>
      </header>
      <main>
        <ResumeWizard />
      </main>
      <footer>
        <a href="https://github.com/josephdanielm" target="_blank">
          <img src={githubLogo} />
        </a>
      </footer>
    </>
  );
}

export default App;
