"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from "react";
const HomeComponent = () => {
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/audio/home.mp3") : undefined
  );
  let isPlaying = false;
  useEffect(() => {
    document.addEventListener('mousemove', () => {
      if (musicPlayers.current && !isPlaying) {
        musicPlayers.current.volume = 0.01;
        musicPlayers.current.autoplay = true;
        isPlaying = true;
        musicPlayers.current.play().catch((err) => {
          if (musicPlayers.current && !isPlaying) {
            musicPlayers.current.volume = 0.01;
          }
          isPlaying = false;
          return;
        })
      } else if (!musicPlayers.current) {
        musicPlayers.current = new Audio('/audio/home.mp3');
        musicPlayers.current.volume = 0.01;
        musicPlayers.current.autoplay = true;
        isPlaying = true;
        musicPlayers.current.play().catch((err) => {
          if (musicPlayers.current && !isPlaying) {
            musicPlayers.current.volume = 0.01;
          }
          isPlaying = false;
          return;
        })
      }
    })
    document.addEventListener('scroll', () => {
      if (musicPlayers.current && !isPlaying) {
        musicPlayers.current.volume = 0.01;
        musicPlayers.current.autoplay = true;
        musicPlayers.current.play().catch((err) => {
          if (musicPlayers.current && !isPlaying) {
            musicPlayers.current.volume = 0.01;
          }
          isPlaying = false;
          return;
        })
        isPlaying = true;
      } else if (!musicPlayers.current) {
        musicPlayers.current = new Audio('/audio/home.mp3');
        musicPlayers.current.volume = 0.01;
        musicPlayers.current.autoplay = true;
        musicPlayers.current.play().catch((err) => {
          if (musicPlayers.current && !isPlaying) {
            musicPlayers.current.volume = 0.01;
          }
          isPlaying = false;
          return;
        })
        isPlaying = true;
      }
    });
  })
  return (
    <div className="bg-black">
      <style jsx>{`
        body {
          background-color: #66D0FF;
        }
        .cloud {
          background: #ECEFF1;
          box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
          border-radius: 100px;
          position: absolute;
          z-index: 1;
        }
        .cloud::after,
        .cloud::before {
          content: "";
          position: absolute;
          background: inherit;
          border-radius: inherit;
        }
        .cloud.small::after {
          width: 60px;
          height: 60px;
          top: -25px;
          left: 30px;
        }
        .cloud.small::before {
          width: 100px;
          height: 100px;
          top: -35px;
          left: 80px;
        }
        .cloud.large::after {
          width: 60px;
          height: 60px;
          top: -25px;
          left: 30px;
        }
        .cloud.large::before {
          width: 100px;
          height: 100px;
          top: -35px;
          left: 80px;
        }
        .string {
          width: 2px;
          background-color: #ECEFF1;
          position: absolute;
          z-index: 0;
        }
        .string.small {
          height: 130px;
          top: -145px;
          left: 90px;
        }
        .string.large {
          height: 120px;
          top: -130px;
          left: 110px;
        }
        .string.landing {
          height: 170px;
          top: -170px;
          left: 200px;
        }
        @media (max-width: 768px) {
          .cloud.small {
            width: 100px;
            height: 50px;
            animation: moveLeft 20s linear infinite;
            top: -60px;
            left: -100%;
          }
          .cloud.small::after {
            width: 50px;
            height: 40px;
            top: -20px;
            left: 50px;
          }
          .cloud.small::before {
            width: 80px;
            height: 80px;
            top: -25px;
            left: 80px;
          }
          .cloud.large {
            width: 170px;
            height: 70px;
            animation: moveLeft 30s linear infinite;
            top: -80px;
            left: -100%;
          }
          .cloud.large::after {
            width: 50px;
            height: 50px;
            top: -20px;
            left: 45px;
          }
          .cloud.large::before {
            width: 80px;
            height: 80px;
            top: -30px;
            left: 80px;
          }
          .cloud.extra {
            display: block;
            width: 140px;
            height: 60px;
            animation: moveLeft 25s linear infinite;
            top: -70px;
            left: -100%;
          }
          .cloud.extra::after {
            width: 60px;
            height: 60px;
            top: -25px;
            left: 30px;
          }
          .cloud.extra::before {
            width: 100px;
            height: 100px;
            top: -35px;
            left: 80px;
          }
          .string.small, .string.large, .string.landing {
            display: none;
          }
          .landing-image {
            width: 100%;
            max-width: 400px;
            height: auto;
            border-radius: 80px;
          }
          .button-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
          .apply-button {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
        }
        @media (min-width: 769px) {
          .cloud.extra {
            display: block;
            width: 200px;
            height: 70px;
            top: 100px;
            left: 280px;
          }
        }
        @keyframes moveLeft {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
      <div className=" w-full overflow-x-hidden relative ">
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
      <main className="px-12 py-24 text-white relative overflow-hidden pt-24">
        <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between my-12">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">Empowering Future Coders</h1>
            <p className="text-xl mb-4">Unlock the power of coding and AI ✨ in a fun and interactive environment</p>
            <div className="relative mb-8">
              <svg
                width="200"
                height="45"
                viewBox="0 0 200 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-2 left-14 w-72 z-0"
              >
                <g clipPath="url(#clip0_6171_16150)">
                  <path d="M190.276 34.0098C195.894 33.7601 197.412 27.4844 194.72 24.255C194.757 24.0053 194.775 23.7557 194.792 23.506C201.838 22.5571 201.802 11.7535 194.269 11.9533C193.473 11.97 192.679 11.97 191.866 12.0033C196.78 9.57294 195.931 0.800305 189.264 0.983415C130.765 2.54818 72.2839 4.11294 13.7848 5.67771C6.55818 5.87746 6.28715 15.0995 12.2852 16.9972C10.0992 16.9972 7.93119 16.9972 5.74517 16.9806C-1.95115 16.9306 -1.87888 28.2668 5.74517 28.6164C13.9654 28.9992 22.1676 29.3488 30.3878 29.6318C27.7863 29.7483 25.1847 29.8649 22.565 29.9814C14.941 30.3309 14.8868 41.9667 22.565 41.6172C78.4804 39.087 134.378 36.5401 190.294 34.0098H190.276Z" fill="#d946ef"/>
                </g>
                <defs>
                  <clipPath id="clip0_6171_16150">
                    <rect width="200" height="41" fill="white" transform="translate(0 0.818359)"/>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-xl relative z-10">Join us on 17th September 2024 for an unforgettable experience</p>
            </div>
            <div className='flex flex-row button-container'>
              <Link href="auth/signup">
              <button className="apply-button bg-fuchsia-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-fuchsia-700">
                    Apply Now 🚀
                  </button>
              </Link>
              <svg className="hidden sm:block sm:w-24 sm:ml-8 sm:mt-8" viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M84.1428 1.12604C68.4579 15.0432 48.2728 24.8484 26.7076 22.7737C20.393 22.1662 13.251 19.5041 7.51 16.6647C6.29685 16.0646 5.19832 15.2656 4.08583 14.4969C3.06981 13.7949 4.95423 22.296 5.12047 23.2959C6.89794 33.9863 5.2443 22.4385 4.04146 18.4653C3.10796 15.3818 1.13626 12.2911 0.701068 9.07517C0.350636 6.4856 5.49948 7.02736 7.26614 6.8582C9.08258 6.68426 20.8214 3.77937 19.2507 7.81152C16.4328 15.0458 10.9147 19.889 6.01223 25.5572" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <svg className="w-30 h-20 mt-2" viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="md:w-1/2 px-12 relative mb-8 md:mb-0">
            <div className="relative">
              <div className="string landing"></div>
              <Image className="landing-image" src="/landing.png" alt="SheCode" width={500} height={500}  style={{borderRadius: "6vw"}}/>
            </div>
            <div className="absolute top-0 left-96 transform -translate-x-1/2 flex items-center justify-center">
              <div className="cloud large" style={{ width: '220px', height: '90px' }}>
                <div className="string large"></div>
              </div>
            </div>
            <div className="absolute top-0 left-24 flex items-center justify-center">
              <div className="cloud small" style={{ width: '200px', height: '70px' }}>
                <div className="string small"></div>
              </div>
            </div>
            <div className="absolute top-0 right-0 flex items-center justify-center">
              <div className="cloud extra" style={{ width: '200px', height: '70px' }}>
                <div className="string extra"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
};

export default HomeComponent;
