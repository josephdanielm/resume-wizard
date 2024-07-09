# Resume Wizard

[<img alt="Resume Wizard" width="40%" src="https://github.com/josephdanielm/resume-wizard/assets/137225181/45318b66-5c3c-4ed6-8b85-d60a364343a2" />](https://resume-wizard-six.vercel.app/)

[Live Site](https://resume-wizard-six.vercel.app/)

## Overview
**Resume Wizard** is my first big project using React. The main goal was to practice and improve my React skills.
It's a clean and minimal app that helps users build their resumes step-by-step, then generates a PDF they can download.

## Key Features
- **User-Friendly Interface:** A simple, wizard-style setup that collects user information one section at a time.
- **PDF Generation:** Uses [jsPDF](https://github.com/parallax/jsPDF) to turn resume data into a downloadable PDF.
- **Custom Inputs:** Input fields with labels that move out of the way when you type, keeping the design clean and accessible.
- **Easy Navigation:** Buttons to jump back to previous sections for quick edits.

## Technologies Used
- **Frontend**: React, JavaScript, HTML, CSS
- **Build Tool**: Vite
- **Deployment**: Vercel
- **PDF Library**: jsPDF

## Development Journey
Building Resume Wizard was tough but rewarding. I started with a basic, but full implementation, then ultimately decided to re-approach the project to better use React principles and integrate a PDF-generation library. I figured the challenge would drastically improve my skills as a developer, and give me plenty of opportunity to not only hone my new React skills, but also to drill on JavaScript and Responsive-design fundamentals. 

There was admittedly quite a bit more trial and error than I anticipated going into the second approach, but I'm very glad I did it, as I feel like a much stronger developer coming out of it.

## Challenges
- **PDF Generation:** Finding and using a PDF library was tricky because of outdated and sometimes confusing documentation paired with my limited knowledge of the inner-workings of PDFs. I had to try a few dfferent libraries before finding one that worked for this project.
- **Interface Design:** Balancing the HTML structure with the logic of the application was difficult. Next time, I think allocating a bit more time to sketching out the design first will better streamline and speed-up the entire process altogether.

## What I Learned
This project helped me learn and improve on several skills:
- React state management and object destructuring
- Creating custom hooks and avoiding prop-drilling
- Using state effectively, working with nested components, and data mapping
- Filtering objects and using ternary operators
- Deploying a project through Vercel
- Working with external JavaScript Libraries and reviewing documentation

## Future Improvements
If I had more time, I'd refactor the code to be even more modular and reduce repetition. I feel that doing this on initial-write of a codebase is a skill that will improve greatly through deliberate practice, and the second approach on this project really propelled me in this regard.
