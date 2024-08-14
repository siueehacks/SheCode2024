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
          height: 140px;
          top: -150px;
          left: 90px;
        }
        .string.large {
          height: 120px;
          top: -140px;
          left: 110px;
        }
        .string.landing {
          height: 200px;
          top: -200px;
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
      <main className="lg:pl-52 px-12 py-24 text-white relative overflow-hidden pt-24">
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
              <p className="text-xl relative z-10">Join us on 7th September 2024 for an unforgettable experience</p>
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
        <section>
          <div className='flex flex-row place-content-center lg:place-content-start lg:-mt-20'>
          <a href="https://www.instagram.com/siu_ehacks/" target="_blank" rel="noopener noreferrer" className="mx-4 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 102 102" id="instagram"><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stopColor="#fa8f21"></stop><stop offset=".78" stopColor="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop><stop offset="1" stopColor="#8c3aaa"></stop></radialGradient></defs>
              <path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path>
            </svg>
          </a>
          <a href="https://github.com/siueehacks" target="_blank" rel="noopener noreferrer" className="mx-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 80 80">
            <path fill="#b6c9d6" d="M76.999,40.001c0,17.44-12.02,31.86-27.97,35.89c-2.9,0.72-5.92,1.11-9.03,1.11 c-3.08,0-6.09-0.38-8.97-1.1c-15.98-4-28.03-18.44-28.03-35.9c0-20.6,16.4-37,37-37C60.599,3.001,76.999,19.401,76.999,40.001z"></path><circle cx="39.999" cy="40.001" r="37" fill="none"></circle><path fill="#fff" d="M64.029,38.521c0,4.49-2.32,10.73-6.13,13.83c-3.08,2.51-7.15,3.3-11.75,3.55 c1.73,1.05,2.88,2.95,2.88,5.12v14.87c-2.9,0.72-5.92,1.11-9.03,1.11c-3.08,0-6.09-0.38-8.97-1.1v-9.77 c-1.25,0.39-2.89,0.62-5,0.51c-7-0.37-8-4.62-9.12-7.62c-1.13-3-4.63-3.38-4.13-4.62c2.416-0.829,4.314-0.039,5.597,0.938 c1.018,0.776,1.728,1.871,2.203,3.06c0.543,1.358,1.986,3.622,5.57,3.622c2.53,0,4.03-0.59,4.89-1.17 c0.05-2.12,1.21-3.96,2.91-4.97c-4.88-0.31-9.16-1.23-12.31-3.97c-3.5-3.04-5.61-9.11-5.61-13.39c0-3.57,1.47-7.97,3.99-10.74 c0.08-0.08,0.15-0.17,0.25-0.25c-0.58-1.74-1.25-5.18,0.38-9.39c4.85-0.09,8.68,2.56,10.24,3.84c2.82-0.65,5.9-0.96,9.14-0.96 c3.32,0,6.49,0.29,9.36,0.96c1.56-1.28,5.4-3.93,10.24-3.83c1.7,4.38,0.91,7.93,0.32,9.59 C62.529,30.711,64.029,34.921,64.029,38.521z"></path><path fill="#788b9c" d="M39.999,3.001c-20.6,0-37,16.4-37,37s16.78,37,37,37s37-16.4,37-37S60.599,3.001,39.999,3.001z M39.999,76.001c-19.85,0-36-16.15-36-36c0-9.7,3.72-18.76,10.48-25.52c6.76-6.76,15.83-10.48,25.52-10.48 c9.7,0,18.76,3.72,25.52,10.48c6.76,6.76,10.48,15.82,10.48,25.52C75.999,59.851,59.849,76.001,39.999,76.001z"></path>
          </svg>       
          </a>
          <a href="https://ehacks.cs.siue.edu/" target="_blank" rel="noopener noreferrer" className="mx-4 text-white">
          <img src='/ehacks logo.ico' height={40} width={40}></img>  
          </a>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
};

export default HomeComponent;
