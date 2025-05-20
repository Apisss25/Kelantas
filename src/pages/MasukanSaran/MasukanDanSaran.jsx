import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCommentDots,
  
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, feedback } = formData;
    const whatsappNumber = "6281291243220"; // format internasional tanpa '+'
    const message = `Nama: ${name} Pesan: ${feedback}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setFormData({ name: "", feedback: "" });
  };

  return (
    <section className="bg-[#F0EFEB] pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Masukan dan Saran
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faUser} className="text-[#FFCC00] text-xl" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nama Anda"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFCC00]"
            />
          </div>

          <div className="flex items-start gap-4">
            <FontAwesomeIcon
              icon={faCommentDots}
              className="text-[#FFCC00] text-xl mt-2"
            />
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tulis masukan atau saran Anda di sini..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> Kirim via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackPage;
