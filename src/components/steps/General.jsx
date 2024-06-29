/* eslint-disable react/prop-types */
import "../../styles/General.css";

export default function General({ resumeData, updateResumeData }) {
  function handleChange(event) {
    const { name, value } = event.target;
    updateResumeData(name, value);
  }

  function fillWithEasterEggData() {
    updateResumeData(easterEggData);
  }

  return (
    <div className="general">
      <div className="inputs">
        <div className="input-field-group">
          <input
            id="name"
            type="text"
            name="name"
            placeholder=" "
            value={resumeData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field-group">
          <input
            id="email"
            type="email"
            name="email"
            placeholder=" "
            value={resumeData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field-group">
          <input
            id="phone"
            type="tel"
            name="phoneNumber"
            placeholder=" "
            value={resumeData.phoneNumber}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone</label>
        </div>
      </div>

      <div className="knowledge-section">
        <ul className="tips">
          <span className="tips-title" onClick={() => fillWithEasterEggData()}>
            Tips
          </span>
          <li className="tip">
            Accurate contact information helps potential employers reach you
            easily.
          </li>
          <li className="tip">Use an email address that includes your name.</li>
          <li className="tip">
            Avoid using nicknames or unprofessional usernames.
          </li>
        </ul>
      </div>
    </div>
  );
}

const easterEggData = {
  name: "Raccacoonie",
  email: "raccacoonie@example.com",
  phoneNumber: "123-456-7890",
  experience: [
    {
      companyName: "Le Gourmet Restaurant",
      positionTitle: "Head Chef",
      mainResponsibilities:
        "Leading the kitchen team, creating new recipes, ensuring high-quality food preparation",
      dateFrom: "2015",
      dateUntil: "2019",
    },
    {
      companyName: "Animal Kingdom Culinary School",
      positionTitle: "Cooking Instructor",
      mainResponsibilities:
        "Teaching culinary skills to students, developing curriculum, mentoring aspiring chefs",
      dateFrom: "2020",
      dateUntil: "Present",
    },
  ],
  education: [
    {
      schoolName: "Culinary Institute of Animalia",
      titleOfStudy: "Master of Culinary Arts",
      dateFrom: "2010",
      dateUntil: "2014",
    },
  ],
};
