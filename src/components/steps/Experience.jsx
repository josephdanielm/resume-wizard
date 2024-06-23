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

  return (
    <div className="experience">
      {resumeData.experience.map((job, index) => (
        <div key={index} className="job">
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
          <label>
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
          <button onClick={() => removeExperience(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
}
