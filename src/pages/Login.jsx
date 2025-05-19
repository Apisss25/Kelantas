import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupNotification from "../components/PopUpNotification";
const baseUrl = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const [username, setUsername] = useState("");
  const [asalSekolah, setAsalSekolah] = useState("");
  const [skor, setSkor] = useState(0);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const navigate = useNavigate();
  const kirimData = async () => {
    try {
      const response = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: username,
          asal_sekolah: asalSekolah,
          skor: skor,
        }),
      });

      const data = await response.json();
      console.log("✅ Data berhasil dikirim:", data);
      setPopup({
        show: true,
        type: "success",
        message: "Login berhasil! Selamat datang.",
      });
      navigate("/home");
      setUsername("");
      setAsalSekolah("");
      localStorage.setItem("isLoggedIn", "true");
    } catch (error) {
      console.error("❌ Gagal mengirim data:", error);
      setPopup({
        show: true,
        type: "error",
        message: "Login gagal! Username atau password salah.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    kirimData();
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/home");
    }
  }, []);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-5">
      <img
        src="/ImageFormDaftar.png"
        alt=""
        className="w-[350px] rounded-t-2xl"
      />
      <div className="w-full max-w-[350px] bg-[#E9ECFF] p-6 rounded-b-2xl shadow-md">
        <form onSubmit={handleSubmit}>
          {/* <h2 className="text-xl font-semibold text-center text-black mb-6">
            Create Username
          </h2> */}

          <div className="mb-4 ">
            <label className="block text-[16px] font-regular text-black mb-1 font-[poppins]">
              Nama
            </label>
            <input
              type="text"
              placeholder="Nama..."
              className="bg-white w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-transparent transition duration-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[16px] font-regular text-black mb-1 font-[poppins]">
              umur
            </label>
            <input
              type="text"
              placeholder="umur"
              className="bg-white w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-black-500 focus:border-transparent transition duration-200"
              value={asalSekolah}
              onChange={(e) => setAsalSekolah(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2 bg-[#8896ff] text-black font-regular rounded-xl hover:bg-[#7180f8] transition duration-200"
          >
            Kirim
          </button>
        </form>
      </div>
      {/* Popup Notifikasi */}
      {popup.show && (
        <PopupNotification
          type={popup.type}
          message={popup.message}
          onClose={() => setPopup({ ...popup, show: false })}
        />
      )}
    </section>
  );
};

export default Login;
