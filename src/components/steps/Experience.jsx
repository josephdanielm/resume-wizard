/* eslint-disable react/prop-types */
import "../../styles/Experience.css";
import remove from "../../assets/remove.svg";

export default function Experience({ resumeData, updateResumeData }) {
  function handleChange(event, index) {
    const { name, value } = event.target;
    const updatedExperience = resumeData.experience.map((job, i) =>
      i === index ? { ...job, [name]: value } : job
    );
    updateResumeData("experience", updatedExperience);
  }

  function addJob() {
    const newJob = {
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
    };
    const updatedJob = [...resumeData.experience, newJob];
    updateResumeData("experience", updatedJob);
  }

  function removeJob(index) {
    const companyName = resumeData.experience[index].companyName;
    const message = companyName
      ? `Confirm deletion of "${companyName}"`
      : "Confirm deletion of item";

    if (window.confirm(message)) {
      const updatedJob = resumeData.experience.filter((_, i) => i !== index);
      updateResumeData("experience", updatedJob);
    }
  }

  return (
    <div className="experience">
      {resumeData.experience.map((job, index) => (
        <div key={index} className="job">
          <span className="job-and-action-line">
            Job {index + 1}
            <button onClick={() => removeJob(index)}>
              <img className="remove-svg" src={remove} />
            </button>
          </span>
          <div className="input-field-group">
            <input
              id={"companyName" + index}
              type="text"
              name="companyName"
              placeholder=" "
              value={job.companyName}
              onChange={(event) => handleChange(event, index)}
            />
            <label htmlFor={"companyName" + index}>Company Name</label>
          </div>
          <div className="input-field-group">
            <input
              id={"positionTitle" + index}
              type="text"
              name="positionTitle"
              placeholder=" "
              value={job.positionTitle}
              onChange={(event) => handleChange(event, index)}
            />
            <label htmlFor={"positionTitle" + index}>Position Title</label>
          </div>
          <div className="input-field-group">
            <input
              id={"mainResponsibilities" + index}
              type="text"
              name="mainResponsibilities"
              placeholder=" "
              value={job.mainResponsibilities}
              onChange={(event) => handleChange(event, index)}
            />
            <label htmlFor={"mainResponsibilities" + index}>
              Main Responsibilities
            </label>
          </div>
          <div className="input-field-group">
            <input
              id={"dateFrom" + index}
              type="text"
              name="dateFrom"
              placeholder=" "
              value={job.dateFrom}
              onChange={(event) => handleChange(event, index)}
            />
            <label htmlFor={"dateFrom" + index}>Date From</label>
          </div>
          <div className="input-field-group">
            <input
              id={"dateUntil" + index}
              type="text"
              name="dateUntil"
              placeholder=" "
              value={job.dateUntil}
              onChange={(event) => handleChange(event, index)}
            />
            <label htmlFor={"dateUntil" + index}>Date Until</label>
          </div>
        </div>
      ))}
      <button className="add-job" onClick={addJob}>
        Add Job
      </button>
    </div>
  );
}
