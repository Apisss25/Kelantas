import React from "react";
import HeroSection from "../section/HeroSection";
import ReasonSection from "../section/ReasonSection";
// import EducationSection from "../section/EducationSection";
import GoalSection from "../section/GoalSection";
import TrafficAccidentData from "../section/TrafficAccidentData";

const Home = () => {
  return (
    <>
      <section>
        <section className="bg-[#F7F5F1]">
          <HeroSection />
        </section>

        <section className="bg-[#F7F5F1]">
          <TrafficAccidentData />
        </section>

        <section className="bg-[#EDE8E2]">
          <ReasonSection />
        </section>
        {/* <section>
          <EducationSection />
        </section> */}
        <section className="bg-[#F7F5F1]">
          <GoalSection />
        </section>
      </section>
    </>
  );
};

export default Home;
