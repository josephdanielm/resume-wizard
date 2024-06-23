import { useState } from "react";
import General from "./steps/General";
import Practical from "./steps/Practical";
import Education from "./steps/Education";
import Resume from "./steps/Resume";
import Navigation from "./utility/Navigation";
import ControlPanel from "./utility/ControlPanel";

const steps = [General, Practical, Education, Resume];
const stepsLength = steps.length;

export default function ResumeWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const { resumeData, updateResumeData } = useResumeData();

  const Step = steps[currentStep];
  const resumeComplete = currentStep === 3;

  return (
    <>
      {resumeComplete ? (
        <>
          <Step />
          <ControlPanel />
        </>
      ) : (
        <>
          <Step resumeData={resumeData} updateResumeData={updateResumeData} />
          <Navigation
            currentStep={currentStep}
            stepsLength={stepsLength}
            setCurrentStep={setCurrentStep}
          />
        </>
      )}
    </>
  );
}

// Resume Data
const useResumeData = () => {
  const [resumeData, setResumeData] = useState({
    name: "Joseph",
    phoneNumber: "123-456-7890",
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
