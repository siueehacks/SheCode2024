"use client";
import { AcademicCapIcon, GiftIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-tr from-[#130016] via-black to-black text-white p-6 md:p-10 lg:px-40 xl:px-60 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 z-index-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="bg-black border-2 border-fuchsia-500 p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-fuchsia-500/50">
          <AcademicCapIcon className="h-10 w-10 sm:h-12 sm:w-12 text-fuchsia-500 mb-4 mx-auto" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center">What is SheCode?</h2>
          <p className="text-center text-xs sm:text-sm md:text-base">SheCode is an empowering one-day event at SIUE, designed for high school students to explore the fundamentals of coding in an engaging and supportive environment.</p>
        </div>
        <div className="bg-black border-2 border-fuchsia-500 p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-fuchsia-500/50">
          <GiftIcon className="h-10 w-10 sm:h-12 sm:w-12 text-fuchsia-500 mb-4 mx-auto" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center">What Will You Gain?</h2>
          <p className="text-center text-xs sm:text-sm md:text-base">Participants will acquire foundational knowledge in AI and coding, along with exclusive SheCode swag to commemorate their learning journey.</p>
        </div>
        <div className="bg-black border-2 border-fuchsia-500 p-4 sm:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-fuchsia-500/50">
          <LightBulbIcon className="h-10 w-10 sm:h-12 sm:w-12 text-fuchsia-500 mb-4 mx-auto" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center">Why This Matters</h2>
          <p className="text-center text-xs sm:text-sm md:text-base">Equipping yourself with coding and AI skills is essential in today’s tech-driven world. It empowers you to innovate, solve real-world problems, and unlocks numerous career opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
