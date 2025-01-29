import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const FlagDisplay = () => {
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate();
  const flags = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'German' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'tr', name: 'Turkish' },
    { code: 'hr', name: 'Croatian' },
    { code: 'cs', name: 'Czech' },
    { code: 'da', name: 'Danish' },
    { code: 'fi', name: 'Finnish' },
    { code: 'el', name: 'Greek' },
    { code: 'it', name: 'Italian' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ro', name: 'Romanian' },
    { code: 'sr', name: 'Serbian' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'sk', name: 'Slovak' },
    { code: 'sv', name: 'Swedish' },
    { code: 'no', name: 'Norwegian' },
  ];

  const handleFlagClick = (flag) => {
    // Change the language when the flag is clicked
    i18n.changeLanguage(flag.code);

    // Navigate to Home component and pass the selected flag data
    navigate('/', {
      state: {
        selectedLanguage: flag.name,
        selectedFlag: `/assets/images/flags/${flag.code}.webp`,
      },
    });
  };

  // Handle the back navigation
  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page in history
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-center bg-cover relative" style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}>
      {/* Back Button */}
      <img
        className="w-20 absolute top-4 left-4 rounded-full cursor-pointer"
        src="/assets/images/button back.webp"
        alt="Back"
        onClick={handleBackClick}
      />
      <div className="flex flex-col gap-4 md:gap-3 justify-center items-center text-center">
        <h1 className="text-3xl text-white font-bold mt-8 mb-4" style={{ textShadow: 'rgba(0, 0, 0, 0.4) 0.08em 0.08em 0.08em' }}>
          {t('selectLanguage')} {/* Use translation for language selection title */}
        </h1>
        <div className="mt-2 mb-20 mx-6 grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-14 justify-center">
          {flags.map((flag, index) => (
            <div key={index} className="rounded-2xl" onClick={() => handleFlagClick(flag)}>
              <img
                src={`/assets/images/flags/${flag.code}.webp`}
                alt={`Flag of ${flag.name}`}
                className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 w-32 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlagDisplay;
