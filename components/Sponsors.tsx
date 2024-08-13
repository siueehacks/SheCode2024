import React from 'react';

const Sponsor: React.FC = () => {
  return (
    <section id="sponsors" className="bg-gradient-to-tl from-[#130016] via-black to-black py-32 px-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Thank You to Our Lovely Sponsors</h2>
      <p className="text-lg text-gray-700 mb-8">
        We are immensely grateful to our sponsors for making this event possible.
      </p>
      <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto border-t border-gray-300 pt-8">
        <img 
          src="/1.png" 
          alt="SIUE Graduate School" 
          className="w-full h-auto mx-auto shadow-lg"
        />
      </div>
    </section>
  );
};

export default Sponsor;
