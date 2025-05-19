import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faOilCan,
  faTrafficLight,
  faBan,
  faMobileScreenButton,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import motorbikeRulesImage from "/ImageMotorbike.jpg";

const motorbikeRulesData = [
  {
    id: 1,
    icon: faHelmetSafety,
    title: "Gunakan Helm Standar SNI",
    desc: "Helm yang memenuhi standar SNI wajib dipakai untuk melindungi kepala saat berkendara.",
  },
  {
    id: 2,
    icon: faOilCan,
    title: "Periksa Kondisi Kendaraan",
    desc: "Cek rem, lampu, dan tekanan ban sebelum berkendara untuk memastikan motor dalam kondisi baik.",
  },
  {
    id: 3,
    icon: faTrafficLight,
    title: "Patuhi Rambu Lalu Lintas",
    desc: "Hargai rambu dan marka jalan, termasuk berhenti penuh saat lampu merah.",
  },
  {
    id: 4,
    icon: faBan,
    title: "Berkendara dengan aman",
    desc: "Jangan ugal-ugalan, seperti menyerobot kendaraan lain atau menikung tajam pada kecepatan tinggi.",
  },
  {
    id: 5,
    icon: faMobileScreenButton,
    title: "Fokus dan Hindari Gangguan",
    desc: "Jangan menggunakan ponsel atau makan saat mengendarai motor agar tetap konsentrasi.",
  },
  {
    id: 6,
    icon: faLightbulb,
    title: "Gunakan Lampu Sein dan Lampu Utama",
    desc: "Nyalakan sein saat berbelok dan lampu utama di malam hari atau kondisi kurang cahaya.",
  },
];

const MotorbikeRules = () => {
  return (
    <section className="bg-[#F0EFEB] pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">
          Hal Yang Harus Diperhatikan saat Mengendarai Motor
        </h1>
        <div className="w-[250px] mx-auto flex justify-center lg:w-full mb-10">
          <img
            src={motorbikeRulesImage}
            alt="Motorbike Rules"
            className="w-full max-w-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:mx-[50px] md:mx-[10px]">
          {motorbikeRulesData.map((data) => (
            <div
              key={data.id}
              className="group bg-white rounded-xl px-5 py-6 md:p-6 
                border border-gray-300 shadow-md 
                hover:border-gray-800 
                hover:bg-[#FFCC00]
                md:hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.08)] 
                md:hover:scale-[1.05]
                active:scale-[0.98] transition-all duration-300"
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

export default MotorbikeRules;
