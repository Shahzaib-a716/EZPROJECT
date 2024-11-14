import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedFlag, setSelectedFlag] = useState('/assets/images/en.png');
  const navigate = useNavigate();
  const location = useLocation();

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
              <img src="/assets/images/les.webp" alt="LesTheHandyman" className='w-[460px] h-[400px]' />
            </div>
          </a>
          
        </div>

        <div className="overflow-hidden flex flex-col md:gap-6 items-center">
          <form className="rounded-3xl" onSubmit={handleSubmit}>
            <div className="flex  justify-center mb-2 items-center gap-2 border-6 border-yellow-500 bg-yellow-700 rounded-5xl">
              <input
                className="border-yellow-300 w-full dark:border-gray-700 bg-yellow-400 dark:text-yellow-700 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md text-4xl border-none p-6 focus:outline-none text-center placeholder:text-4xl w-full md:w-[32rem] font-bold "
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

      <div
        className="text-center pt-1 mt-6 w-full text-3xl text-white font-bold"
        style={{
          textShadow: 'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 0px -1px 0px, rgb(0, 0, 0) 0px 1px 0px, rgb(0, 0, 0) -1px 0px 0px',
        }}
      >
        {t('footerText')}
      </div>
    </div>
  );
}

export default Home;
