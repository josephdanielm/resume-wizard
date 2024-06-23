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
          <Step resumeData={resumeData} />
          <ControlPanel
            currentStep={currentStep}
            stepsLength={stepsLength}
            setCurrentStep={setCurrentStep}
          />
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
    name: "Raccacoonie",
    email: "raccacoonie@example.com",
    phoneNumber: "123-456-7890",
    education: [
      {
        schoolName: "Culinary Institute of Animalia",
        titleOfStudy: "Master of Culinary Arts",
        dateOfStudy: "2010 - 2014",
      },
    ],
    practicalExperience: [
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
