import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHelmetSafety,
  faMotorcycle,
  faRoad,
  faTrafficLight,
  faFileContract,
  faBalanceScale,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const motorbikeUUData = [
  {
    id: 1,
    icon: faBook,
    title: "UU No. 22 Tahun 2009",
    desc: (
      <>
        Payung hukum utama yang mengatur keselamatan lalu lintas dan angkutan
        jalan di Indonesia, termasuk peraturan khusus sepeda motor dan
        perlengkapannya.
      </>
    ),
  },
  {
    id: 2,
    icon: faHelmetSafety,
    title: "Pasal 57 Ayat 2 - Helm Standar",
    desc: (
      <>
        Setiap pengendara dan penumpang sepeda motor wajib menggunakan helm
        standar nasional Indonesia (SNI) yang terpasang dengan benar selama
        berkendara.
      </>
    ),
  },
  {
    id: 3,
    icon: faMotorcycle,
    title: "Pasal 77 - SIM C",
    desc: (
      <>
        Pengendara sepeda motor wajib memiliki Surat Izin Mengemudi (SIM) kelas
        C yang masih berlaku sebagai bukti kelayakan dan kompetensi mengemudikan
        motor.
      </>
    ),
  },
  {
    id: 4,
    icon: faRoad,
    title: "Pasal 106 - Batas Kecepatan",
    desc: (
      <>
        Mengatur batas maksimal sepeda motor: 30–40 km/jam di permukiman, 50–60
        km/jam di jalan kota, dan 80–100 km/jam di jalan tol atau jalan arteri.
      </>
    ),
  },
  {
    id: 5,
    icon: faTrafficLight,
    title: "Pasal 287 - Lampu Lalu Lintas",
    desc: (
      <>
        Larangan menerobos lampu merah atau melanggar rambu lalu lintas.
        Pelanggaran dikenakan denda atau kurungan ringan.
      </>
    ),
  },
  {
    id: 6,
    icon: faFileContract,
    title: "Pasal 283 - Kendaraan Layak Jalan",
    desc: (
      <>
        Sepeda motor harus memenuhi syarat laik jalan, seperti rem, lampu,
        spion, dan sistem kelistrikan, dengan pemeriksaan berkala.
      </>
    ),
  },
  {
    id: 7,
    icon: faMobileScreenButton,
    title: "Pasal 115 - Penggunaan Ponsel",
    desc: (
      <>
        Dilarang menggunakan telepon genggam tanpa handsfree saat berkendara
        untuk menjaga konsentrasi dan keamanan.
      </>
    ),
  },
  {
    id: 8,
    icon: faBalanceScale,
    title: "Pasal 291 - Melawan Arus",
    desc: (
      <>
        Pengendara sepeda motor dilarang melawan arus di jalan searah atau jalur
        yang ditentukan, untuk mencegah kecelakaan serius.
      </>
    ),
  },
];

const MotorbikeUU = () => {
  return (
    <section className="bg-[#F0EFEB] pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">
          Undang‑Undang dan Aturan Berkendara Sepeda Motor
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:mx-[50px] md:mx-[10px]">
          {motorbikeUUData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl px-5 py-6 md:p-6 \
                border border-gray-300 shadow-md \
                hover:border-gray-800 hover:bg-[#FFCC00] \
                md:hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.08)] \
                md:hover:scale-[1.05] active:scale-[0.98] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#FFCC00] group-hover:text-white transition-colors flex-shrink-0">
                  <FontAwesomeIcon icon={item.icon} className="text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 group-hover:text-white">
                  {item.title}
                </h3>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed group-hover:text-white">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotorbikeUU;
