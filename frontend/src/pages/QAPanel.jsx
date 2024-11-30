import React, { useState } from "react";

const SoruFormu = ({ onSubmit }) => {
  const [soru, setSoru] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(soru);
    setSoru("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={soru}
        onChange={(e) => setSoru(e.target.value)}
        placeholder="Sorunuzu buraya yazın"
        className="border border-gray-300 p-2 rounded-md w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
      >
        Gönder
      </button>
    </form>
  );
};

const SoruListesi = ({ sorular }) => {
  return (
    <div className="mt-4">
      {sorular.map((soru, index) => (
        <div key={index} className="border border-gray-300 p-4 rounded-md mb-2">
          <p>{soru}</p>
        </div>
      ))}
    </div>
  );
};

const KursSoruCevap = () => {
  const [sorular, setSorular] = useState([]);

  const handleSoruGonder = (soru) => {
    setSorular([...sorular, soru]);
    // Soruyu sunucuya veya başka bir veritabanına kaydetmek için buraya ekleyebilirsiniz.
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kurs Soru ve Cevap</h1>
      <SoruFormu onSubmit={handleSoruGonder} />
      <SoruListesi sorular={sorular} />
    </div>
  );
};

export default KursSoruCevap;
