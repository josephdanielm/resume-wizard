import "../../styles/Resume.css";
import generatePDF from "../../generatePDF";

export default function Resume({ resumeData }) {
  const outputSrc = generatePDF(resumeData);

  return (
    <>
      <div className="iframe-container">
        <iframe src={outputSrc} />
      </div>
    </>
  );
}
