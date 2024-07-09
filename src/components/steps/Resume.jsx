import "../../styles/Resume.css";
import generatePDF from "../../generatePDF";

export default function Resume({ resumeData }) {
  const doc = generatePDF(resumeData);

  return (
    <>
      <div className="iframe-container">
        <iframe src={doc.output("bloburi")} />
        <button
          className="download-PDF"
          onClick={() => doc.save(`${resumeData.name} Resume`)}
        >
          Download
        </button>
      </div>
    </>
  );
}
