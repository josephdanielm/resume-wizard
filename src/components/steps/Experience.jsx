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

  function addExperience() {
    const newJob = {
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
    };
    const updatedExperience = [...resumeData.experience, newJob];
    updateResumeData("experience", updatedExperience);
  }

  function removeExperience(index) {
    const updatedExperience = resumeData.experience.filter(
      (_, i) => i !== index
    );
    updateResumeData("experience", updatedExperience);
  }

  function toggleOpen(event) {
    event.currentTarget.closest(".job").classList.toggle("open");
  }

  return (
    <div className="experience">
      {resumeData.experience.map((job, index) => (
        <div key={index} className="job open">
          <span className="job-and-action-line">
            {job.companyName}
            <div className="action-buttons">
              <button onClick={toggleOpen}>
                <img className="open-svg" src={remove} />
              </button>
              <button onClick={() => removeExperience(index)}>
                <img className="remove-svg" src={remove} />
                <img className="remove-svg-mirror" src={remove} />
              </button>
            </div>
          </span>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={job.companyName}
              onChange={(event) => handleChange(event, index)}
            />
          </label>
          <label>
            Position Title:
            <input
              type="text"
              name="positionTitle"
              value={job.positionTitle}
              onChange={(event) => handleChange(event, index)}
            />
          </label>
          <label className="main-responsibilities">
            Main Responsibilities:
            <input
              type="text"
              name="mainResponsibilities"
              value={job.mainResponsibilities}
              onChange={(event) => handleChange(event, index)}
            />
          </label>
          <label>
            Date From:
            <input
              type="text"
              name="dateFrom"
              value={job.dateFrom}
              onChange={(event) => handleChange(event, index)}
            />
          </label>
          <label>
            Date Until:
            <input
              type="text"
              name="dateUntil"
              value={job.dateUntil}
              onChange={(event) => handleChange(event, index)}
            />
          </label>
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
}
