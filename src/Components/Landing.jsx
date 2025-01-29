import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const [email, setEmail] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedFlag, setSelectedFlag] = useState('/assets/images/en.png');
  const [isReturningUser, setIsReturningUser] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location.state) {
      const { selectedLanguage, selectedFlag } = location.state;
      setSelectedLanguage(selectedLanguage);
      setSelectedFlag(selectedFlag);
    }
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
      setIsReturningUser(true);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      localStorage.setItem('email', email); // Save email to localStorage
      navigate('/Enter', { state: { email } });
    }
  };
  const handleWelcomeBackClick = () => {
    navigate('/Enter', { state: { email } }); // Navigate to the new page
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
  <div className="relative group">
    <img
      className="w-24 md:w-32 hover:-translate-y-1 hover:scale-125 duration-300"
      src="/assets/images/eyeballs.gif"
      alt={t('JustlookAround')}
    />
    
    {/* Tooltip */}
    <div className="absolute bottom-0 right-1/4 transform -translate-x-1/2 mb-11 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500 text-white text-3xl font-bold rounded py-2 px-4 z-4">
    {t('JustlookAround')}
    </div>
  </div>
</a>

<a href="/Flag1">
  <div className="relative group w-16 md:w-28 cursor-pointer hover:-translate-y-1 hover:scale-100 duration-300">
    <img src={selectedFlag} className="rounded-xl" alt={selectedLanguage} />
    
    {/* Tooltip */}
    <div className="absolute top-[-3rem] right-1/2 font-bold transform translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500 whitespace-nowrap text-white text-2xl rounded py-2 px-4 z-10">
  {selectedLanguage} Language {/* Tooltip text will be the selected language */}
</div>

  </div>
</a>


<a href="/FreeRegistration1">
  <div className="relative group">
    <img
      className="w-24 md:w-32 hover:-translate-y-1 hover:scale-125 duration-300"
      src="/assets/images/clipboard.webp"
      alt={t('registration')}
    />
    
    {/* Tooltip */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/4 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500 text-white font-bold text-3xl rounded py-2 px-4 ml-[100px] whitespace-nowrap">
    {t('Free business registration')} {/* Tooltip text will be the translated registration text */}
    </div>
  
  </div>
</a>

          </div>

          <a
  className="flex md:w-1/3 -mt-29 md:-mt-0 flex-col justify-center items-center hover:-translate-y-1 hover:scale-105 duration-300"
  href="/Proof"
>
  <div className="relative group">
    <img
      src="/assets/images/les.webp"
      alt="LesTheHandyman"
      className="w-[460px] h-[400px]"
    />
    
    {/* Tooltip */}
    <div className="absolute bottom-0 right-1/2 transform -translate-x-1/2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500 font-bold text-white text-3xl rounded py-2 px-4 z-10 whitespace-nowrap">
      {t('LesTheHandyman')} {/* Tooltip text can be dynamic, depending on what you want to show */}
    </div>
  </div>
</a>

        </div>

        <div className="flex flex-col w-full justify-center items-center relative">
          {/* Conditionally Render Welcome Back Button or Email Input */}
          {isReturningUser ? (
        <button
          onClick={handleWelcomeBackClick}
          className="text-5xl font-bold text-black border-2 border-black bg-yellow-600 hover:bg-green-700 rounded-lg px-12 py-3 shadow-md"
        >
          {t('welcomeBack')} {/* Dynamically renders "WELCOME BACK" in the selected language */}
        </button>
      ) :  (
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
          )}
        </div>
        </div>

      {/* Social Media Platform Section */}
      <div className="social-media-platform text-white">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold">
              <span className="text-white-300">{t('socialMediaPlatformTitle')}</span>
              <br />
              <span className="text-white-300">
                {t('socialMediaPlatformDescription')}
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap">
  <div className="w-full h-[420px] bg-white md:w-1/2 lg:w-1/4 p-4 group relative overflow-hidden">
    <figure className="relative transition-all duration-300 ease-out">
      <img
        src="https://hm.ez123.eu/robbie/wp-content/uploads/2024/06/kezek-racs-borton.svg"
        alt={t('fraudAwarenessCaption')}
        className="mx-auto transition-opacity duration-300 ease-out group-hover:opacity-0"
      />
      <figcaption
        className="absolute font-bold text-2xl inset-0 bg-white bg-opacity-100 flex justify-center items-center text-center p-4 transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out text-black"
      >
        {t('fraudAwarenessCaption')}
      </figcaption>
    </figure>
  </div>

  <div className="w-full h-[420px] bg-white md:w-1/2 lg:w-1/4 p-4 group relative overflow-hidden">
    <figure className="relative transition-all duration-300 ease-out">
      <img
        src="https://hm.ez123.eu/robbie/wp-content/uploads/2024/06/zero-tolerance.svg"
        alt={t('zeroToleranceCaption')}
        className="mx-auto transition-opacity duration-300 h-[220px] w-[240px] ease-out group-hover:opacity-0"
      />
      <figcaption
        className="absolute inset-0 font-bold bg-white bg-opacity-100 flex justify-center mb-10 text-lg p-8 transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out text-red-600"
      >
        {t('zeroToleranceCaption')}
      </figcaption>
    </figure>
  </div>

  <div className="w-full h-[420px] bg-white md:w-1/2 lg:w-1/4 p-4 group relative overflow-hidden">
    <figure className="relative transition-all duration-300 ease-out">
      <img
        src="/assets/images/zero freud.webp"
        alt={t('tradesFeeCaption')}
        className="mx-auto transition-opacity duration-300 h-[220px] w-[220px] ease-out group-hover:opacity-0"
      />
      <figcaption
        className="absolute inset-0 text-2xl font-bold bg-white bg-opacity-100 flex justify-center text-center p-4 transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out text-green-600"
      >
        {t('tradesFeeCaption')}
      </figcaption>
    </figure>
  </div>

  <div className="w-full h-[420px] bg-white md:w-1/2 lg:w-1/4 p-4 group relative overflow-hidden">
    <figure className="relative transition-all duration-300 ease-out">
      <a href="tel:+1234567890" className="flex flex-col justify-center items-center" title={t('callUsCaption')}>
        <img
          src="/assets/images/call.webp"
          alt={t('callUsCaption')}
          className="mx-auto transition-opacity w-[220px] h-[220px] duration-300 ease-out group-hover:opacity-0"
        />
        <figcaption
          className="absolute inset-0 text-3xl font-bold bg-white bg-opacity-100 flex justify-center text-center p-4 transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out text-blue-600"
        >
          {t('callUsCaption')}
        </figcaption>
      </a>
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
