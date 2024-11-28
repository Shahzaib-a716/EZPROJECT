import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const [email, setEmail] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedFlag, setSelectedFlag] = useState('/assets/images/en.png');
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location.state) {
      const { selectedLanguage, selectedFlag } = location.state;
      setSelectedLanguage(selectedLanguage);
      setSelectedFlag(selectedFlag);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Navigating to EmailNotRecognized page');
      navigate('/EmailNotRecognized', { state: { email } });
    } else {
      console.log('Email is empty');
    }
  };

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}
    >
      <div className="flex flex-col gap-4 md:gap-3 justify-center items-center text-center">
        <Link to="/Proof">
          <h1
            className="text-2xl text-white mt-4 mb-24 md:text-4xl font-extrabold w-full underline"
            style={{
              textShadow: 'rgba(0, 0, 0, 0.4) 0.08em 0.08em 0.08em',
              fontFamily: '"Exo 2", Helvetica, Arial, Lucida, sans-serif',
            }}
          >
            {t('welcomeMessagePart1')} <br /> {t('welcomeMessagePart2')}
          </h1>
        </Link>

        <div className="flex flex-col w-full justify-center items-center relative">
          <div className="flex justify-center items-center gap-12 md:gap-32 absolute top-[41%] md:top-[56%] lg:top-[-20%]">
            <a href="/LookAround">
              <div className="tooltip-container">
                <img
                  className="w-24 md:w-32 hover:-translate-y-1 hover:scale-110 duration-300"
                  src="/assets/images/eyeballs.gif"
                  alt={t('lookAround')}
                />
              </div>
            </a>

            <a href="/Flag1">
              <div className="w-16 md:w-36 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 tooltip-container">
                <img src={selectedFlag} className="rounded-xl" alt={selectedLanguage} />
              </div>
            </a>

            <a href="/FreeRegistration1">
              <div className="tooltip-container">
                <img
                  className="w-24 md:w-32 hover:-translate-y-1 hover:scale-110 duration-300"
                  src="/assets/images/clipboard.webp"
                  alt={t('registration')}
                />
              </div>
            </a>
          </div>

          <a
            className="flex md:w-1/3 -mt-29 md:-mt-0 flex-col justify-center items-center hover:-translate-y-1 hover:scale-105 duration-300"
            href="/Proof"
          >
            <div className="tooltip-container">
              <img src="/assets/images/les.webp" alt="LesTheHandyman" className="w-[460px] h-[400px]" />
            </div>
          </a>
        </div>

        <div className="overflow-hidden flex flex-col md:gap-6 items-center">
          <form className="rounded-3xl" onSubmit={handleSubmit}>
            <div className="flex justify-center mb-2 items-center gap-2 border-6 border-yellow-500 bg-yellow-700 rounded-5xl">
              <input
                className="border-yellow-300 w-full dark:border-gray-700 bg-yellow-400 dark:text-yellow-700 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md text-5xl border-none p-6 focus:outline-none text-center placeholder:text-6xl placeholder:font-black placeholder:text-black md:w-[32rem] font-bold"
                id="email"
                type="email"
                placeholder="@"
                style={{ fontSize: '1.5rem' }}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="on"
                autoFocus
              />
            </div>
            <button type="submit" style={{ display: 'none' }}></button>
          </form>
        </div>
      </div>

      {/* Social Media Platform Section */}
      <div className="text-white">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold">
            <span className="text-white-300">We are a social media/business</span>
            <br />
            <span className="text-white-300">
              platform, where you can be safe from the world of fraud with the 3-step verification process & built-in lie detector.
            </span>
          </h1>
        </div>

        <div className="py-8"></div>

<div className="flex flex-wrap">
  <div className="w-full bg-white md:w-1/2 p-4 group relative overflow-hidden">
    <figure className="relative transition-all duration-300 ease-out">
      <img
        src="https://hm.ez123.eu/robbie/wp-content/uploads/2024/06/kezek-racs-borton.svg"
        alt="Image for fraud awareness"
        className="mx-auto transition-opacity duration-300 ease-out group-hover:opacity-0"
      />
      <figcaption
        className="absolute inset-0 bg-white bg-opacity-100 flex justify-center items-center text-black font-bold text-2xl p-4 transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out"
      >
        We are currently working together with some agencies to make it easier for them to find those who would commit fraud against us.
      </figcaption>
    </figure>
  </div>

  <div className="w-full bg-white md:w-1/2 p-4 group relative overflow-hidden">
    <figure className="relative transition-all duration-300 ease-out">
      <img
        src="https://hm.ez123.eu/robbie/wp-content/uploads/2024/06/zero-tolerance.svg"
        alt="Zero tolerance policy"
        className="mx-auto transition-opacity duration-300 ease-out group-hover:opacity-0"
      />
      <figcaption
        className="absolute inset-0 bg-white bg-opacity-100 flex justify-center items-center text-red-600 text-center p-4 transform -translate-x-full text-xl font-bold group-hover:translate-x-0 transition-all duration-500 ease-out"
      >
        We would like to warn you, that there won’t be any tolerance for rude, disrespectful, offensive or insulting behavior in this community INCLUDING NUDITY OF ANY KIND FAILURE TO ABIDE BY THESE RULES WILL RESULT IN TERMINATION OF YOUR ACCOUNT AND BUSINESS SYSTEM AND NO REFUNDS WILL BE POSSIBLE AND IF YOU REALLY REALLY WANT BACK IN, IT WILL COST YOU 1 MILLION U.S.
      </figcaption>
    </figure>
  </div>
</div>

<span
  className="fixed bottom-4 right-4 bg-yellow-500 text-gray-900 p-2 rounded-full cursor-pointer"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  ↑
</span>

      </div>
    </div>
  );
}

export default Home;
