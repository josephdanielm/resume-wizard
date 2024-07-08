import "../../styles/Education.css";
import remove from "../../assets/remove.svg";

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
          <span className="education-and-action-line">
            Education {index + 1}
            <button onClick={() => removeEducation(index)}>
              <img className="remove-svg" src={remove} />
            </button>
          </span>
          <div className="input-field-group">
            <input
              id={"schoolName" + index}
              type="text"
              name="schoolName"
              placeholder=" "
              value={educationEntry.schoolName}
              onChange={(event) => handleChange(event, index)}
            />
            <label htmlFor={"schoolName" + index}>School Name</label>
          </div>
          <div className="input-field-group">
            <input
              id={"titleOfStudy" + index}
              type="text"
              name="titleOfStudy"
              placeholder=" "
              value={educationEntry.titleOfStudy}
              onChange={(event) => handleChange(event, index)}
            />
            <label htmlFor={"titleOfStudy" + index}>Title of Study</label>
          </div>
          <div className="input-field-group">
            <input
              id={"dateFrom" + index}
              type="text"
              name="dateFrom"
              placeholder=" "
              value={educationEntry.dateFrom}
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
              value={educationEntry.dateUntil}
              onChange={(event) => handleChange(event, index)}
            />
            <label htmlFor={"dateUntil" + index}>Date Until</label>
          </div>
        </div>
      ))}
      <button className="add-education" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}
