import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faScrewdriverWrench,
  faTrafficLight,
  faBan,
  faMobileScreenButton,
  faTurnUp,
} from "@fortawesome/free-solid-svg-icons";
import carRulesImage from "/ImageHome2.png";

const carRulesData = [
  {
    id: 1,
    icon: faUserShield,
    title: "Gunakan Sabuk Pengaman",
    desc: "Sabuk pengaman wajib digunakan untuk mengurangi risiko cedera saat kecelakaan.",
  },
  {
    id: 2,
    icon: faScrewdriverWrench,
    title: "Periksa Kondisi Mobil",
    desc: "Sebelum berkendara, pastikan mobil dalam kondisi baik untuk keselamatan perjalanan.",
  },
  {
    id: 3,
    icon: faTrafficLight,
    title: "Patuhi Rambu lalu lintas",
    desc: "Selalu taati rambu lalu lintas dan lampu jalan demi keselamatan bersama.",
  },
  {
    id: 4,
    icon: faBan,
    title: "Jangan Parkir Sembarangan",
    desc: "Hindari parkir di trotoar atau area terlarang agar tidak mengganggu pengendara lain.",
  },
  {
    id: 5,
    icon: faMobileScreenButton,
    title: "Fokus Saat Menyetir",
    desc: "Jangan bermain ponsel atau makan saat menyetir agar tetap fokus dan aman.",
  },
  {
    id: 6,
    icon: faTurnUp,
    title: "Gunakan Lampu Sein",
    desc: "Nyalakan lampu sein saat ingin belok atau berpindah jalur agar tidak membingungkan pengendara lain.",
  },
];

const CarRules = () => {
  return (
    <section className="bg-[#F0EFEB] pt-20 pb-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">
          Hal Yang Harus diperhatikan saat mengendarai Mobil
        </h1>
        <div className="w-[300px] mx-auto flex justify-center lg:w-full mb-10">
          <img src={carRulesImage} alt="Hero" className="w-full max-w-md " />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:mx-[50px] md:mx-[10px]">
          {carRulesData.map((data) => (
            <div
              key={data.id}
              className="group bg-white rounded-xl px-5 py-6 md:p-6 
              border border-gray-300 shadow-md 
              hover:border-gray-800 
              hover:bg-[#FFCC00]
              md:hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.08)] 
              md:hover:scale-[1.05]
              active:scale-[0.98] transition-all duration-300 "
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#FFCC00] group-hover:text-white transition-colors flex-shrink-0">
                  <FontAwesomeIcon icon={data.icon} className="text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 group-hover:text-white">
                  {data.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarRules;
