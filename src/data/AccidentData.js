// src/data/AccidentData.js
import {
  faHeartPulse, // luka ringan
  faProcedures, // luka berat
  faSkullCrossbones, // meninggal
} from "@fortawesome/free-solid-svg-icons";

export const AccidentData = [
  {
    id: 1,
    icon: faHeartPulse,
    jumlah: "85%",
    jenis: "Korban Luka Ringan",
  },
  {
    id: 2,
    icon: faProcedures,
    jumlah: "8%",
    jenis: "Korban Luka Berat",
  },
  {
    id: 3,
    icon: faSkullCrossbones,
    jumlah: "7%",
    jenis: "Korban Meninggal",
  },
];
