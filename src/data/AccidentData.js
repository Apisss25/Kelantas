// src/data/AccidentData.js
import {
  faCarCrash,
  faHeartPulse, // luka ringan
  faProcedures, // luka berat
  faSkullCrossbones, // meninggal
} from "@fortawesome/free-solid-svg-icons";

export const AccidentData = [
  {
    id: 1,
    icon: faCarCrash,
    jumlah: "79.220",
    jenis: "Jumlah Kecelakaan",
  },
  {
    id: 2,
    icon: faHeartPulse,
    jumlah: "85%",
    jenis: "Korban Luka Ringan",
  },
  {
    id: 3,
    icon: faProcedures,
    jumlah: "8%",
    jenis: "Korban Luka Berat",
  },
  {
    id: 4,
    icon: faSkullCrossbones,
    jumlah: "7%",
    jenis: "Korban Meninggal",
  },
];
