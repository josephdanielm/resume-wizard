export default function Education({ resumeData, updateResumeData }) {
  function handleChange(event, index) {
    const { name, value } = event.target;
    const updatedEducation = resumeData.education.map((educationEntry, i) =>
      i === index ? { ...educationEntry, [name]: value } : educationEntry
    );
    updateResumeData("education", updatedEducation);
  }

  function addEducation() {
    const newEducation = {
      schoolName: "",
      titleOfStudy: "",
      dateFrom: "",
      dateUntil: "",
    };
    const updatedEducation = [...resumeData.education, newEducation];
    updateResumeData("education", updatedEducation);
  }

  function removeEducation(index) {
    const updatedEducation = resumeData.education.filter((_, i) => i !== index);
    updateResumeData("education", updatedEducation);
  }

  return (
    <div className="education">
      {resumeData.education.map((educationEntry, index) => (
        <div key={index} className="education-entry">
          <label>
            School Name:
            <input
              type="text"
              name="schoolName"
              value={educationEntry.schoolName}
              onChange={(event) => handleChange(event, index)}
            />
          </label>
          <label>
            Title of Study:
            <input
              type="text"
              name="titleOfStudy"
              value={educationEntry.titleOfStudy}
              onChange={(event) => handleChange(event, index)}
            />
          </label>
          <label>
            Date From:
            <input
              type="text"
              name="dateFrom"
              value={educationEntry.dateFrom}
              onChange={(event) => handleChange(event, index)}
            />
          </label>
          <label>
            Date Until:
            <input
              type="text"
              name="dateUntil"
              value={educationEntry.dateUntil}
              onChange={(event) => handleChange(event, index)}
            />
          </label>
          <button onClick={() => removeEducation(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
    </div>
  );
}
