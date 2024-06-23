export default function General({ resumeData, updateResumeData }) {
  function handleChange(event) {
    const { name, value } = event.target;
    updateResumeData(name, value);
  }

  return (
    <div className="general">
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
  );
}
