export default function Navigation({
  currentStep,
  stepsLength,
  setCurrentStep,
}) {
  function nextStep() {
    setCurrentStep((prev) => Math.min(prev + 1, stepsLength - 1));
  }
  function prevStep() {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }

  return (
    <div className="navigation-wrapper">
      {currentStep > 0 && <button onClick={prevStep}>&lt;</button>}
      {currentStep < stepsLength - 1 ? (
        <button onClick={nextStep}>&gt;</button>
      ) : (
        <button onClick={submitResume}>Submit</button>
      )}
    </div>
  );
}
