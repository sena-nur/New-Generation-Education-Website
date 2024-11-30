import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import certificate from "../../assets/certificate.png";

const Certificate = ({ data }) => {
  const { title, instructorName, lessons } = data;
  const studentName = "Ako T";
  const certificateContent = `Bu sertifika, ${studentName} adlı öğrenciye ${title} kursunu başarıyla tamamladığını belirtmektedir.`;

  const certificateRef = useRef(null);

  const handleDownload = () => {
    html2canvas(certificateRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save(`${studentName}_sertifika.pdf`);
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div
        id="certificate"
        ref={certificateRef}
        style={{ width: "1200px" }}
        className="flex justify-center items-center"
      >
        <div className="w-full relative">
          <img
            src={certificate}
            alt="Certificate"
            className="max-h-screen object-cover"
            onLoad={handleDownload}
          />
          {/* Kurs Adı */}
          <h2 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-center uppercase">
            {title}
          </h2>

          {/* Eğitmen Adı */}
          <p className="absolute bottom-2/4 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-center">
            Eğitmen: {instructorName}
          </p>

          {/* Öğrenci Bilgileri ve Kurs Süresi */}
          <div className="px-60 absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center w-full">
            <p className="mb-6">{certificateContent}</p>
            <p>Öğrenci: {studentName}</p>
            <p>Tarih: {new Date().toLocaleDateString()}</p>
            <p>Ders Sayısı: {lessons}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
