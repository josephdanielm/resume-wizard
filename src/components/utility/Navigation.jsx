import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import check from "../../assets/check.svg";
import "../../styles/Navigation.css";

export default function Navigation({
  currentStep,
  stepsLength,
  setCurrentStep,
  children,
}) {
  function nextStep() {
    setCurrentStep((prev) => Math.min(prev + 1, stepsLength - 1));
  }
  function prevStep() {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }

  return (
    <>
      <button
        className="nav-button"
        onClick={prevStep}
        disabled={currentStep === 0}
      >
        <img className="arrow-svg" src={arrowLeft} />
      </button>
      {children}
      <button className="nav-button" onClick={nextStep}>
        {currentStep < stepsLength - 2 ? (
          <img className="arrow-svg" src={arrowRight} />
        ) : (
          <img className="check-svg" src={check} />
        )}
      </button>
    </>
  );
}
