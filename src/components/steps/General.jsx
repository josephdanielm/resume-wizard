import "../../styles/General.css";

export default function General({ resumeData, updateResumeData }) {
  function handleChange(event) {
    const { name, value } = event.target;
    updateResumeData(name, value);
  }

  return (
    <div className="general">
      <div className="inputs">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={resumeData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={resumeData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={resumeData.phoneNumber}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="knowledge-section">
        <ul className="tips">
          <span className="tips-title">Tips</span>
          <li className="tip">
            Ensure your name, email, and phone number are up-to-date and
            professional.
          </li>
          <li className="tip">Use an email address that includes your name.</li>
          <li className="tip">
            Avoid using nicknames or unprofessional usernames.
          </li>
          <li className="tip">
            Accurate contact information helps potential employers reach you
            easily.
          </li>
        </ul>
      </div>
    </div>
  );
}
