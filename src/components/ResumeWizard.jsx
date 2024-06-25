import { useState } from "react";
import General from "./steps/General";
import Experience from "./steps/Experience";
import Education from "./steps/Education";
import Resume from "./steps/Resume";
import Navigation from "./utility/Navigation";
import ControlPanel from "./utility/ControlPanel";
import "../styles/ResumeWizard.css";

const steps = [General, Experience, Education, Resume];
const stepClasses = [
  `general-wrapper`,
  `experience-wrapper`,
  `education-wrapper`,
  `resume-wrapper`,
];
const stepsLength = steps.length;

export default function ResumeWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const { resumeData, updateResumeData } = useResumeData();

  const Step = steps[currentStep];
  const currentStepClass = stepClasses[currentStep];
  const resumeComplete = currentStep === stepsLength - 1;

  return (
    <div className={currentStepClass}>
      {resumeComplete ? (
        <>
          <Step resumeData={resumeData} />
          <ControlPanel
            currentStep={currentStep}
            stepsLength={stepsLength}
            setCurrentStep={setCurrentStep}
          />
        </>
      ) : (
        <>
          <Navigation
            currentStep={currentStep}
            stepsLength={stepsLength}
            setCurrentStep={setCurrentStep}
          >
            <Step resumeData={resumeData} updateResumeData={updateResumeData} />
          </Navigation>
        </>
      )}
    </div>
  );
}

// Resume Data
const useResumeData = () => {
  const [resumeData, setResumeData] = useState({
    name: "Raccacoonie",
    email: "raccacoonie@example.com",
    phoneNumber: "123-456-7890",
    experience: [
      {
        companyName: "Le Gourmet Restaurant",
        positionTitle: "Head Chef",
        mainResponsibilities:
          "Leading the kitchen team, creating new recipes, ensuring high-quality food preparation",
        dateFrom: "2015",
        dateUntil: "2019",
      },
      {
        companyName: "Animal Kingdom Culinary School",
        positionTitle: "Cooking Instructor",
        mainResponsibilities:
          "Teaching culinary skills to students, developing curriculum, mentoring aspiring chefs",
        dateFrom: "2020",
        dateUntil: "Present",
      },
    ],
    education: [
      {
        schoolName: "Culinary Institute of Animalia",
        titleOfStudy: "Master of Culinary Arts",
        dateFrom: "2010",
        dateUntil: "2014",
      },
    ],
  });

  const updateResumeData = (name, value) => {
    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    resumeData,
    updateResumeData,
  };
};
