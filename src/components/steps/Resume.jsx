import "../../styles/Resume.css";

export default function Resume({ resumeData }) {
  return (
    <div className="resume">
      <section className="general-section">
        <h2>{resumeData.name}</h2>
        <p>{resumeData.email}</p>
        <p>{resumeData.phoneNumber}</p>
      </section>

      {resumeData.experience.length > 0 && (
        <section className="experience-section">
          <h3>Experience</h3>
          {resumeData.experience.map((experienceEntry, index) => (
            <div key={index} className="experience-entry">
              <h4>{experienceEntry.companyName}</h4>
              <p>{experienceEntry.positionTitle}</p>
              <p>{experienceEntry.mainResponsibilities}</p>
              <p>
                {experienceEntry.dateFrom} - {experienceEntry.dateUntil}
              </p>
            </div>
          ))}
        </section>
      )}

      {resumeData.education.length > 0 && (
        <section className="education-section">
          <h3>Education</h3>
          {resumeData.education.map((educationEntry, index) => (
            <div key={index} className="education-entry">
              <h4>{educationEntry.schoolName}</h4>
              <p>{educationEntry.titleOfStudy}</p>
              <p>
                {educationEntry.dateFrom} - {educationEntry.dateUntil}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
