import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { educationData } from "../data/EducationData";

const EducationSection = () => {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Judul Section */}
        <div className="text-center mb-15">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Edukasi yang Interaktif
          </h2>
          <p className="text-gray-600 text-center">
            Pelajari aturan lalu lintas dengan metode menyenangkan
          </p>
        </div>

        {/* Card Container */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:overflow-visible pl-4 sm:pl-0 relative">
          {/* Scroll Indicator untuk Mobile */}
          <div className="sm:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent pointer-events-none" />

          {educationData.map((data) => (
            <div
              key={data.id}
              className="min-w-[78vw] md:min-w-0 bg-white rounded-xl px-5 py-6 md:p-6 
              border border-gray-400 shadow-lg 
              hover:border-gray-800 
              md:hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.08)]
              md:hover:scale-[1.07] 
              active:scale-[0.98] transition-all duration-300 
              snap-start scroll-ml-4 mr-4"
            >
              <div className="flex items-center gap-4 mb-6 text-[#FFCC00] group-hover:text-[#f5b400] md:text-[#FFCC00] md:group-hover:text-[#f5b400] transition-colors">
                <FontAwesomeIcon icon={data.icon} className="text-4xl" />
                <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
                  {data.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">{data.desc}</p>
            </div>
          ))}
        </div>

        {/* Text Indicator untuk Mobile */}
        <p className="sm:hidden text-center text-gray-500 text-sm mt-4 animate-pulse">
          ← Geser untuk melihat lebih banyak →
        </p>
      </div>
    </section>
  );
};

export default EducationSection;
