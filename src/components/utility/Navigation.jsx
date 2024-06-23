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
    <div className="navigation-wrapper">
      <button onClick={prevStep} disabled={currentStep === 0}>
        &lt;
      </button>
      {children}
      <button onClick={nextStep}>
        {currentStep < stepsLength - 2 ? `>` : `Submit`}
      </button>
    </div>
  );
}
