import React from 'react';
import { useTranslation } from 'react-i18next';

function FlagSwitcher({ flags }) {
  const { i18n } = useTranslation(); // Use i18n hook to interact with the language

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode); // Change the language using i18n
  };

  return (
    <div className="flag-switcher">
      {flags.map(({ languageCode, flagSrc }) => (
        <img
          key={languageCode}
          src={flagSrc}
          alt={languageCode}
          onClick={() => handleLanguageChange(languageCode)} // Change language when flag is clicked
          className="cursor-pointer w-16 h-16"
        />
      ))}
    </div>
  );
}

export default FlagSwitcher;
