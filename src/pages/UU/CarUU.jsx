import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBalanceScale,
  faRoad,
  faTrafficLight,
  faFileContract,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const carUUData = [
  {
    id: 1,
    icon: faBook,
    title: "UU No. 22 Tahun 2009",
    desc: (
      <>
        Undang‑Undang No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan
        merupakan payung hukum utama di Indonesia yang mengatur segala aspek
        berkendara, mulai dari persyaratan teknis kendaraan, tata cara
        penggunaan jalan, hingga mekanisme penegakan hukum. UU ini bertujuan
        menjamin keselamatan, kelancaran, dan ketertiban serta mewujudkan
        keamanan di jalan raya.
      </>
    ),
  },
  {
    id: 2,
    icon: faBalanceScale,
    title: "Pasal 59 Ayat (1) - Sabuk Pengaman",
    desc: (
      <>
        Setiap pengemudi dan penumpang di kursi depan wajib menggunakan sabuk
        pengaman selama kendaraan berjalan untuk mengurangi risiko cedera serius
        atau fatal saat kecelakaan. Pelanggaran dikenakan denda administratif.
      </>
    ),
  },
  {
    id: 3,
    icon: faRoad,
    title: "Pasal 106 Ayat (7) - Konsentrasi Mengemudi",
    desc: (
      <>
        Pengemudi wajib penuh konsentrasi dan tidak terganggu perhatiannya oleh
        gangguan seperti menggunakan telepon genggam, minum alkohol, atau
        menonton video saat mengemudi, untuk keselamatan pengguna jalan lain.
      </>
    ),
  },
  {
    id: 4,
    icon: faTrafficLight,
    title: "Pasal 287 - Lampu Lalu Lintas",
    desc: (
      <>
        Pelanggaran lampu lalu lintas, termasuk menerobos lampu merah, dikenakan
        sanksi pidana penjara maksimal 2 bulan atau denda maksimal Rp 500.000
        guna mencegah kecelakaan di persimpangan silang.
      </>
    ),
  },
  {
    id: 5,
    icon: faFileContract,
    title: "Pasal 283 - Kendaraan Layak Jalan",
    desc: (
      <>
        Kendaraan harus memenuhi persyaratan laik jalan seperti rem, lampu, ban,
        dan sistem kemudi. Pemeriksaan teknis berkala wajib dilakukan agar
        kendaraan aman dioperasikan.
      </>
    ),
  },
  {
    id: 6,
    icon: faGavel,
    title: "Pasal 288 - Sanksi Pelanggaran",
    desc: (
      <>
        Menjelaskan jenis sanksi bagi pelanggar aturan lalu lintas: denda
        administratif, tilang, hingga hukuman kurungan ringan. Besaran sanksi
        disesuaikan dengan tingkat pelanggaran.
      </>
    ),
  },
  {
    id: 7,
    icon: faGavel,
    title: "Pasal 81 Ayat (1) - Kepemilikan SIM",
    desc: (
      <>
        Setiap pengemudi kendaraan bermotor roda empat atau lebih wajib memiliki
        Surat Izin Mengemudi (SIM) yang sesuai golongan untuk jenis kendaraan
        yang dikendarainya.
      </>
    ),
  },
  {
    id: 8,
    icon: faRoad,
    title: "Pasal 106 Ayat (7) - Larangan Menggunakan Ponsel",
    desc: (
      <>
        Pengemudi dilarang menggunakan telepon genggam atau perangkat lain tanpa
        handsfree saat mengemudi untuk meminimalisir gangguan konsentrasi dan
        mengurangi potensi kecelakaan.
      </>
    ),
  },
];

const CarUU = () => {
  return (
    <section className="bg-[#F0EFEB] pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">
          Undang‑Undang dan Aturan Keselamatan Berkendara Mobil
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:mx-[50px] md:mx-[10px]">
          {carUUData.map((item) => (
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

export default CarUU;
