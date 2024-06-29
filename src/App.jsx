// import { useState } from "react";
import "./App.css";
import wizardLogo from "./assets/wizard-logo.png";
import ResumeWizard from "./components/ResumeWizard";
import githubLogo from "./assets/github-mark.png";

function App() {
  return (
    <>
      <header>
        <h1>Resume</h1>
        <img src={wizardLogo} />
        <h1>Wizard</h1>
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
