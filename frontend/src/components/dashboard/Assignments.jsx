import React, { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

const Assignment = () => {
  // Öğrenci listesi, örneğin API'den alınabilir
  const [students, setStudents] = useState([
    { id: 1, name: "Öğrenci 1", email: "ogrenci1@example.com" },
    { id: 2, name: "Öğrenci 2", email: "ogrenci2@example.com" },
    { id: 3, name: "Öğrenci 3", email: "ogrenci3@example.com" },
    // ... Diğer öğrenciler
  ]);

  // Kurs listesi, örneğin API'den alınabilir
  const [courses, setCourses] = useState([
    { id: 1, name: "Kurs 1" },
    { id: 2, name: "Kurs 2" },
    { id: 3, name: "Kurs 3" },
    // ... Diğer kurslar
  ]);

  // Seçilen kursun ID'sini tutacak state
  const [selectedCourse, setSelectedCourse] = useState("");

  // Seçilen dosyanın adını tutacak state
  const [fileName, setFileName] = useState("");

  const [fileIndex, setFileIndex] = useState(999);

  const handleIndex = (index) => {
    setFileIndex(index);
  };
  // Kurs seçimini işle
  const handleCourseChange = (e) => {
    const courseId = e.target.value;
    setSelectedCourse(courseId);
  };

  // Dosya seçimini işle
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileName(selectedFile.name);
  };

  // Assignment'ı gönderme işlemi
  const handleSubmit = () => {
    // Seçilen öğrencilere assignment'ı gönder
    console.log("Seçilen kurs:", selectedCourse);
    console.log("Gönderilen dosya:", fileName);
    // Burada assignment gönderme işlemi gerçekleştirilebilir, örneğin bir API çağrısı yapılabilir
  };

  // Çalışma planı seçme işlemi
  const handleSelectWorkPlan = () => {
    // Dosya seçme işlemi başlat
    const fileInput = document.getElementById("workPlanInput");
    fileInput.click();
  };

  // Gönder butonunun aktif olup olmadığını kontrol etme
  const isSubmitDisabled = !selectedCourse || !fileName;

  return (
    <div className="container px-16 mx-auto py-32">
      <h1 className="text-2xl font-semibold mb-4">Assignment Yükleme</h1>
      <div className="mb-4">
        <label htmlFor="course" className="block font-semibold mb-1">
          Kurs Seç:
        </label>
        <select
          id="course"
          className="bg-white border border-gray-300 rounded-md py-2 px-4"
          onChange={handleCourseChange}
        >
          <option value="">Kurs Seçiniz</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
      {/* Attachment kısmı */}
      <div className="mb-4">
        <label htmlFor="attachment" className="block font-semibold mb-1">
          Assignment Yükle:
        </label>
        <div className="border-2 px-2 py-2 border-gray rounded-md p-1 relative">
          <div className="flex items-center gap-2 cursor-pointer">
            <FaFileUpload className="text-2xl text-custom-blue" />
            <p className="text-2xl text-custom-blue">
              Choose Files or Drag and Drop
            </p>
            <input
              type="file"
              id="attachment"
              accept=".pdf,.doc,.docx,.jpeg,.jpg,.png"
              style={{
                opacity: 0,
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                cursor: "pointer",
              }}
              onChange={handleFileChange}
            />
          </div>
          <p className="text-sm text-gray-500">
            PNG, JPG, GIF, SVG, or PDF. Max 15MB
          </p>
        </div>
      </div>
      {/* Yükleme düğmesi */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitDisabled}
        className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ${
          isSubmitDisabled && "opacity-50 cursor-not-allowed"
        }`}
      >
        Assignment Gönder
      </button>

      {/* Dosya seçme düğmesi */}
      <input
        type="file"
        id="workPlanInput"
        accept=".pdf,.doc,.docx,.jpeg,.jpg,.png"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Öğrenci listesi */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Mentörlük Desteği Bekleyen Öğrenciler
        </h2>
        {students.map((student, index) => (
          <div
            key={student.id}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <div>
              <p>{student.name}</p>
              <p className="text-gray-500">{student.email}</p>
            </div>
            {/* Çalışma planı gönderme düğmeleri */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  handleSelectWorkPlan();
                  handleIndex(index);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                {fileName && index === fileIndex
                  ? fileName
                  : "Çalışma Planı Seç"}
              </button>
              <button
                onClick={() => handleSendWorkPlan(student.id)}
                className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ${
                  isSubmitDisabled && "opacity-50 cursor-not-allowed"
                }`}
                disabled={isSubmitDisabled}
              >
                Gönder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignment;
