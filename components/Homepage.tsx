'use client';

import Image from 'next/image';

const HomeComponent = () => {
  const audio = new Audio('/audio/home.mp3');
  audio.volume = 0.01;
  audio.autoplay = true;
  return (
    <div className=" w-full overflow-x-hidden relative ">
      <audio src='/audio/home.mp3' loop={true}></audio>
      {/* <div className="absolute inset-0 bg-lines z-0 " id='bg-lines'></div> */}
      <div className="stars ">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <main className="px-6 py-12 text-white relative z-10 overflow-hidden">
        <section id="home" className="flex flex-col md:flex-row items-center justify-between my-12">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 relative z-10">
            <h1 className="text-5xl font-bold mb-4">Empowering Future Coders</h1>
            <p className="text-xl mb-4">Unlock the power of coding and AI in a fun and interactive environment</p>
            <p className="text-xl mb-8">Join us on 17th September 2024 for an unforgettable experience</p>
            <button className="bg-fuchsia-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-fuchsia-700">
              Apply Now
            </button>
          </div>
          <div className="md:w-1/2 relative w-min justify-center flex flex-row">
            <Image src="/design.png" alt="SheCode" width={500} height={500} objectFit="cover" className="rounded-lg shadow-lg" />
            <div className="absolute inset-0 -z-10">
              <div className="absolute -top-28 -left-16 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-28 -right-4 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center -z-10">
              <div className="absolute -top-20 -left-8 w-56 h-56 bg-white rounded-full mix-blend-overlay filter blur-lg opacity-50 animate-move-cloud"></div>
              <div className="absolute -bottom-24 right-0 w-56 h-56 bg-white rounded-full mix-blend-overlay filter blur-lg opacity-50 animate-move-cloud"></div>
            </div>
          </div>
        </section>

        <section id="about" className="my-12 ">
          <h2 className="text-4xl font-bold mb-4">About SheCode</h2>
          <p className="text-lg">
            SheCode is an inspiring event designed to spark the interest of high school girls in the world of coding and AI.
            Through engaging workshops and collaborative projects, participants will learn from industry experts and build lasting connections.
          </p>
        </section>

        <section id="gallery" className="my-12">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <Image src="/path/to/image1.jpg" alt="Gallery Image 1" width={300} height={200} />
            <Image src="/path/to/image2.jpg" alt="Gallery Image 2" width={300} height={200} />
            <Image src="/path/to/image3.jpg" alt="Gallery Image 3" width={300} height={200} /> */}
          </div>
        </section>

        <section id="schedule" className="my-12">
          <h2 className="text-4xl font-bold mb-4">Schedule</h2>
          <p className="text-lg">
            Our event schedule is filled with exciting activities, including hands-on coding workshops, inspiring keynote speeches, and networking opportunities with industry leaders.
          </p>
        </section>

        <section id="sponsors" className="my-12">
          <h2 className="text-4xl font-bold mb-4">Sponsors</h2>
          <p className="text-lg">
            We extend our heartfelt thanks to our sponsors for their generous support. Their contributions make SheCode possible.
          </p>
        </section>
      </main>

      <footer className="bg-fuchsia-950 text-white p-6 text-center">
        <p>&copy; 2024 SheCode. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default HomeComponent;
