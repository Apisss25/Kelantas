import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoalData } from "../data/GoalData";

const GoalSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-[poppins] font-bold text-gray-900 text-center mb-15">
          Tujuan Kami ?
        </h2>

        <div className="relative">
          {/* Garis vertikal hitam di kiri */}
          <div
            className="
              absolute
              left-6      /* offset sama dengan ikon */
              top-4
              bottom-5
              w-0.5
              lg:h-[90%]
              sm:h-[90%]
              h-[85%]
              bg-black
            "
          />

          {GoalData.map((item) => (
            <div
              key={item.id}
              className="relative flex items-start mb-8 pl-12"
            >
              {/* Lingkaran + Icon di kiri */}
              <div
                className="
                  absolute
                  left-[10px]    
                  flex items-center justify-center
                  w-8 h-8
                  bg-white
                  border-2 border-gray-200
                  rounded-full
                "
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-yellow-500 text-xl"
                />
              </div>

              {/* Teks di samping kanan ikon */}
              <div className="ml-2 flex-1">
                <p className="text-lg font-medium text-gray-800">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
