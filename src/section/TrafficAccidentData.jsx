import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AccidentData } from "../data/AccidentData";

const TrafficAccidentData = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-gray-900 px-4 sm:px-0 mb-10">
          Data Kecelakaan Lalu Lintas Tahun 2024
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-0 ">
          {AccidentData.map((data) => (
            <div
              key={data.id}
              className="bg-[#EDE8E2] border-b-4 border-r-2 border-[#a3a3a3] rounded-2xl shadow-md p-6 flex flex-col items-center text-center h-full"
            >
              <div className="bg-[#ffeaad] rounded-full p-3 mb-4 inline-flex">
                <FontAwesomeIcon
                  icon={data.icon}
                  className="text-2xl text-black"
                />
              </div>

              <h3 className="font-bold text-lg mb-1">{data.jenis}</h3>
              <p className="text-lg text-gray-800">{data.jumlah}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrafficAccidentData;
