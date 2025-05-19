import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReasonData } from "../data/ReasonData";

const ReasonSection = () => {
  return (
    <section className="pb-30 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[26px] font-[poppins] font-bold text-gray-900 text-center mb-18">
          Mengapa Harus Berkendara Dengan Aman?
        </h2>

        <div className="flex gap-[40px] justify-center flex-wrap">
          {ReasonData.map((data) => (
            <div
              key={data.title}
              className="
        w-[300px] h-[250px] px-[20px] flex flex-col items-center text-center rounded-3xl
      "
            >
              {/* 1. Ikon selalu di atas */}
              <div className="bg-[#ffeaad] rounded-full p-4 mt-10 inline-flex">
                <FontAwesomeIcon icon={data.icon} className="text-3xl" />
              </div>

              {/* 2. Judul tepat di bawah ikon */}
              <h3 className="text-[18px] font-semibold text-gray-900 mt-4">
                {data.title}
              </h3>

              {/* 3. Deskripsi didorong ke bawah */}
              <p className="text-gray-600 text-[15px] pt-5">{data.desc}</p>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ReasonData.map((data) => (
            <div
              key={data.id}
              className="bg-white rounded-xl px-5 py-6 md:p-6 
              border border-gray-400 shadow-lg 
              hover:border-gray-800 
              md:hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.08)] 
              md:hover:scale-[1.07]
              active:scale-[0.98] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4 mt-[5px]">
                <div className="text-[#FFCC00] group-hover:text-[#f5b400] md:text-[#FFCC00] md:group-hover:text-[#f5b400] transition-colors flex-shrink-0">
                  <FontAwesomeIcon icon={data.icon} className="text-4xl" />
                </div>
                <h3 className="text-[18px] font-semibold text-gray-900">
                  {data.title}
                </h3>
              </div>
              <p className=" text-gray-600 leading-relaxed mb-[5px]">
                {data.desc}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ReasonSection;
