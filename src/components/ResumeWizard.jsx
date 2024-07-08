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
  const { resumeData, updateResumeData, replaceResumeData } = useResumeData();

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
            <Step
              resumeData={resumeData}
              updateResumeData={updateResumeData}
              replaceResumeData={replaceResumeData}
            />
          </Navigation>
        </>
      )}
    </div>
  );
}

const resumeDataObject = {
  name: "",
  email: "",
  phoneNumber: "",
  experience: [
    {
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
    },
  ],
  education: [
    {
      schoolName: "",
      titleOfStudy: "",
      dateFrom: "",
      dateUntil: "",
    },
  ],
};

// Resume Data
const useResumeData = () => {
  const [resumeData, setResumeData] = useState(resumeDataObject);

  const updateResumeData = (name, value) => {
    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const replaceResumeData = (newData) => {
    setResumeData(newData);
  };

  return {
    resumeData,
    updateResumeData,
    replaceResumeData,
  };
};
