import React, { useEffect } from "react";

const PopupNotification = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // popup hilang otomatis setelah 3 detik
    return () => clearTimeout(timer);
    
  }, [onClose]);

  return (
    <div
      className={`fixed top-6 right-6 px-5 py-3 rounded-lg shadow-lg text-white transition-all duration-300 z-[9999] ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default PopupNotification;
