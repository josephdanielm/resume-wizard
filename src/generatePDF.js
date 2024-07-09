import jsPDF from 'jspdf';

export default function generatePDF(data) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  const addLine = (y) => {
    doc.setDrawColor(0, 0, 0);
    doc.line(20, y, pageWidth - 20, y);
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(data.name, pageWidth / 2, 20, null, null, 'center');

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`${data.email} | ${data.phoneNumber}`, pageWidth / 2, 30, null, null, 'center');

  let yPosition = 40;
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  addLine(yPosition);
  yPosition += 10;
  doc.text('Experience', 20, yPosition);
  
  yPosition += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  
  data.experience.forEach((exp) => {
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`${exp.positionTitle}, ${exp.companyName}`, 20, yPosition);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`${exp.dateFrom} - ${exp.dateUntil}`, pageWidth - 20, yPosition, null, null, 'right');
    yPosition += 7;
    
    const splitText = doc.splitTextToSize(exp.mainResponsibilities, pageWidth - 40);
    doc.text(splitText, 20, yPosition);
    yPosition += splitText.length * 4 + 10;
  });
  
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  addLine(yPosition);
  yPosition += 10;
  doc.text('Education', 20, yPosition);
  
  yPosition += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  
  data.education.forEach((edu) => {
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(edu.schoolName, 20, yPosition);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`${edu.dateFrom} - ${edu.dateUntil}`, pageWidth - 20, yPosition, null, null, 'right');
    yPosition += 10;
    
    doc.text(edu.titleOfStudy, 20, yPosition);
    yPosition += 10;
  });

  return doc;
};
