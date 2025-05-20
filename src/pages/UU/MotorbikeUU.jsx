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
        jalan di Indonesia, mencakup seluruh kendaraan bermotor termasuk sepeda
        motor.
      </>
    ),
  },
  {
    id: 2,
    icon: faHelmetSafety,
    title: "Pasal 57 Ayat (1) & (2) - Penggunaan Helm Standar SNI",
    desc: (
      <>
        Setiap pengendara dan penumpang sepeda motor wajib mengenakan helm
        standar nasional Indonesia (SNI) yang terpasang dengan benar selama
        berkendara, sesuai ketentuan produksi helm SNI. Pelanggaran dikenai
        sanksi administratif.
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
        C yang masih berlaku sebagai bukti kompetensi mengemudikan sepeda motor.
      </>
    ),
  },
  {
    id: 4,
    icon: faRoad,
    title: "Pasal 21 PP No. (43) - Kecepatan Kendaraan",
    desc: (
      <>
        Pengendara wajib mengemudikan kendaraan sesuai kecepatan aman, ketentuan
        rambu lalu lintas, dan tidak membahayakan pengguna jalan lain. Kecepatan
        maksimal diatur oleh rambu pada tiap jenis jalan.
      </>
    ),
  },
  {
    id: 5,
    icon: faTrafficLight,
    title: "Pasal 287 - Lampu Lalu Lintas",
    desc: (
      <>
        Dilarang menerobos lampu lalu lintas dan melanggar rambu, dengan sanksi
        pidana penjara maksimal 2 bulan atau denda maksimal Rp 500.000.
      </>
    ),
  },
  {
    id: 6,
    icon: faFileContract,
    title: "Pasal 283 - Kendaraan Layak Jalan",
    desc: (
      <>
        Sepeda motor wajib memenuhi persyaratan laik jalan, meliputi rem, lampu,
        spion, dan sistem kelistrikan, dengan pemeriksaan teknis berkala.
      </>
    ),
  },
  {
    id: 7,
    icon: faMobileScreenButton,
    title: "Pasal 106 ayat (7) - Penggunaan Ponsel",
    desc: (
      <>
        Pengendara dilarang menggunakan telepon genggam atau perangkat lain
        tanpa handsfree saat berkendara untuk menjaga konsentrasi dan
        keselamatan.
      </>
    ),
  },
  {
    id: 8,
    icon: faBalanceScale,
    title: "Pasal 291 - Larangan Melawan Arus",
    desc: (
      <>
        Dilarang melawan arus di jalan searah atau jalur khusus, dengan sanksi
        tilang administratif untuk mencegah kecelakaan serius.
      </>
    ),
  },
];

const MotorbikeUU = () => (
  <section className="bg-[#F0EFEB] pt-20 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">
        Undang‑Undang dan Aturan Berkendara Sepeda Motor
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:mx-[50px] md:mx-[10px]">
        {motorbikeUUData.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl px-5 py-6 md:p-6 border border-gray-300 shadow-md hover:border-gray-800 hover:bg-[#FFCC00] md:hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.08)] md:hover:scale-[1.05] active:scale-[0.98] transition-all duration-300"
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

export default MotorbikeUU;
