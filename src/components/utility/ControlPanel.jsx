import "../../styles/ControlPanel.css";

export default function ControlPanel({
  currentStep,
  stepsLength,
  setCurrentStep,
}) {
  function goToStep(step) {
    setCurrentStep(step);
  }

  return (
    <div className="control-panel-wrapper">
      <button onClick={() => goToStep(0)}>Edit General Info</button>
      <button onClick={() => goToStep(1)}>Edit Experience</button>
      <button onClick={() => goToStep(2)}>Edit Education</button>
    </div>
  );
}
