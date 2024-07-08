/* eslint-disable react/prop-types */
import "../../styles/General.css";

export default function General({
  resumeData,
  updateResumeData,
  replaceResumeData,
}) {
  function handleChange(event) {
    const { name, value } = event.target;
    updateResumeData(name, value);
  }

  function fillWithExampleData() {
    replaceResumeData(exampleData);
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

      <div className="additional-section">
        <ul className="tips">
          <span className="tips-title">Tips</span>
          <li className="tip">Use an email address that includes your name.</li>
          <li className="tip">
            Avoid using nicknames or unprofessional usernames.
          </li>
        </ul>
        <button className="use-example-data" onClick={fillWithExampleData}>
          Use Example Data
        </button>
      </div>
    </div>
  );
}

const exampleData = {
  name: "Albus Dumbledore",
  email: "albus.dumbledore@example.com",
  phoneNumber: "123-456-7890",
  experience: [
    {
      companyName: "Hogwarts School of Witchcraft and Wizardry",
      positionTitle: "Headmaster",
      mainResponsibilities:
        "Overseeing school operations, mentoring students and staff, defending the school against dark forces",
      dateFrom: "1956",
      dateUntil: "1997",
    },
    {
      companyName: "International Confederation of Wizards",
      positionTitle: "Supreme Mugwump",
      mainResponsibilities:
        "Leading the international wizarding community, promoting magical cooperation and peace",
      dateFrom: "1948",
      dateUntil: "1995",
    },
    {
      companyName: "Wizengamot",
      positionTitle: "Chief Warlock",
      mainResponsibilities:
        "Presiding over the wizarding court, ensuring justice in the magical community",
      dateFrom: "1935",
      dateUntil: "1995",
    },
  ],
  education: [
    {
      schoolName: "Hogwarts School of Witchcraft and Wizardry",
      titleOfStudy:
        "N.E.W.T.s in Transfiguration, Charms, Potions, and Defense Against the Dark Arts",
      dateFrom: "1892",
      dateUntil: "1899",
    },
  ],
  skills: [
    "Expert in Transfiguration",
    "Master Duelist",
    "Alchemical Prodigy",
    "Fluent in Parseltongue",
    "Proficient in Legilimency and Occlumency",
    "Exceptional Leadership and Mentorship",
  ],
  achievements: [
    "Defeated the Dark Wizard Grindelwald",
    "Discoverer of the twelve uses of dragon's blood",
    "Order of Merlin, First Class",
    "Founder of the Order of the Phoenix",
  ],
};
