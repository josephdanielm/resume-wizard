// import { useState } from "react";
import "./App.css";
import ResumeWizard from "./components/ResumeWizard";
import githubLogo from "./assets/github-mark.png";

function App() {
  return (
    <>
      <header>
        <h1>Resume Zen</h1>
      </header>
      <main>
        <ResumeWizard />
      </main>
      <footer>
        <img src={githubLogo} />
      </footer>
    </>
  );
}

export default App;
