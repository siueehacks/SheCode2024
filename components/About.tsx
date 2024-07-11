// About.tsx
"use client";
import { AcademicCapIcon, GiftIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <div id="about" className="bg-black text-white p-12 z-index-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-black border-2 border-transparent hover:border-fuchsia-500 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-fuchsia-500/50">
          <AcademicCapIcon className="h-12 w-12 text-fuchsia-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center">What is SheCode?</h2>
          <p className="text-center">SheCode is an empowering one-day event at SIUE, designed for female high school students to explore the fundamentals of coding in an engaging and supportive environment.</p>
        </div>
        <div className="bg-black border-2 border-transparent hover:border-fuchsia-500 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-fuchsia-500/50">
          <GiftIcon className="h-12 w-12 text-fuchsia-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center">What Will You Gain?</h2>
          <p className="text-center">Participants will acquire foundational knowledge in AI and coding, along with exclusive SheCode swag to commemorate their learning journey.</p>
        </div>
        <div className="bg-black border-2 border-transparent hover:border-fuchsia-500 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-fuchsia-500/50">
          <LightBulbIcon className="h-12 w-12 text-fuchsia-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2 text-center">Why This Matters</h2>
          <p className="text-center">Equipping yourself with coding and AI skills is essential in today’s tech-driven world. It empowers you to innovate, solve real-world problems, and unlocks numerous career opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
