import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language translations for each language
const resources = {
  en: {
    translation: {
      welcomeMessagePart1: "SEE WHAT I HAVE ACCOMPLISHED IN ",
      welcomeMessagePart2: "MY LIFE, USING MY OWN SOFTWARE",
      socialMediaPlatformTitle: "We are a social media/business",
      socialMediaPlatformDescription: "platform, where you can be safe from the world of fraud with the 3-step verification process & built-in lie detector.",
    },
  },
  de: {
    translation: {
      welcomeMessagePart1: "SEHEN SIE, WAS ICH IN MEINEM LEBEN ERREICHT HABE ",
      welcomeMessagePart2: "MIT MEINER EIGENEN SOFTWARE",
      socialMediaPlatformTitle: "Wir sind eine Social-Media/Business-Plattform",
      socialMediaPlatformDescription: "Plattform, auf der Sie vor Betrug durch den 3-Schritte-Verifizierungsprozess und eingebauten Lügendetektor geschützt sind.",
    },
  },
  hu: {
    translation: {
      welcomeMessagePart1: "LÁSD, MIT ÉRTEM EL AZ ÉLETHEZ ",
      welcomeMessagePart2: "A SAJÁT SZOFTVEREIM SEGÍTSÉGÉVEL",
      socialMediaPlatformTitle: "Mi egy közösségi média/üzleti platform vagyunk",
      socialMediaPlatformDescription: "platform, ahol biztonságban lehetsz a csalások világától a 3 lépéses hitelesítési folyamat és beépített hazugságdetektor segítségével.",
    },
  },
  fr: {
    translation: {
      welcomeMessagePart1: "VOYEZ CE QUE J'AI ACCOMPLI DANS ",
      welcomeMessagePart2: "MA VIE, EN UTILISANT CE LOGICIEL",
      socialMediaPlatformTitle: "Nous sommes une plateforme de médias sociaux/entreprises",
      socialMediaPlatformDescription: "plateforme, où vous pouvez être protégé du monde de la fraude grâce au processus de vérification en 3 étapes et au détecteur de mensonges intégré.",
      
    },
  },
  es: {
    translation: {
      welcomeMessagePart1: "VE LO QUE HE LOGRADO EN ",
      welcomeMessagePart2: "MI VIDA, USANDO ESTE SOFTWARE",
      socialMediaPlatformTitle: "Somos una plataforma de redes sociales/negocios",
      socialMediaPlatformDescription: "plataforma, donde puedes estar a salvo del mundo del fraude con el proceso de verificación en 3 pasos y el detector de mentiras integrado.",
    },
  },
  tr: {
    translation: {
      welcomeMessagePart1: "HAYATIMDA NELER BAŞARDIMI GÖRÜN ",
      welcomeMessagePart2: "BU YAZILIMI KULLANARAK",
      socialMediaPlatformTitle: "Biz bir sosyal medya/iş platformuyuz",
      socialMediaPlatformDescription: "platform, 3 adımlı doğrulama süreci ve entegre yalan dedektörü ile dolandırıcılıkla dünyasından güvende olabilirsiniz.",
    },
  },
  hr: {
    translation: {
      welcomeMessagePart1: "POGLEDAJTE ŠTO SAM POSTIGAO U ",
      welcomeMessagePart2: "SVOM ŽIVOTU KORISTEĆI OVAJ SOFTVER",
      socialMediaPlatformTitle: "Mi smo društvena medijska/biznis platforma",
      socialMediaPlatformDescription: "platforma na kojoj možete biti sigurni od svijeta prijevara s 3-stupanjskim procesom provjere i ugrađenim detektorom laži.",
    },
  },
  cs: {
    translation: {
      welcomeMessagePart1: "VIDĚJTE, CO JSEM DOSÁHL V ",
      welcomeMessagePart2: "SVÉM ŽIVOTĚ POMOCÍ TOHOTO SOFTWARE",
      socialMediaPlatformTitle: "Jsme sociální síť/byznys platforma",
      socialMediaPlatformDescription: "platforma, kde můžete být v bezpečí před světem podvodů díky 3krokovému ověřovacímu procesu a zabudovanému detektoru lží.",
    },
  },
  da: {
    translation: {
      welcomeMessagePart1: "SE Hvad jeg har opnået i ",
      welcomeMessagePart2: "MIT LIV, BRUGER DENNE SOFTWARE",
      socialMediaPlatformTitle: "Vi er en social media/business platform",
      socialMediaPlatformDescription: "platform, hvor du kan være sikker mod svindelverdenen med 3-trins verifikationsprocessen og den indbyggede løgndetektor.",
    },
  },
  fi: {
    translation: {
      welcomeMessagePart1: "NÄE MITÄ OLE SAAVUTTANUT ELÄMÄSSÄNI ",
      welcomeMessagePart2: "KÄYTTÄMÄLLÄ TÄTÄ OHJELMISTOA",
      socialMediaPlatformTitle: "Olemme sosiaalinen media/liiketoiminta-alusta",
      socialMediaPlatformDescription: "alusta, jossa voit olla turvassa petoksilta kolmen vaiheen varmennusprosessin ja sisäänrakennetun valehtelijatunnistimen avulla.",
    },
  },
  el: {
    translation: {
      welcomeMessagePart1: "ΔΕΙΤΕ ΤΙ ΕΧΩ ΕΠΙΤΥΧΕΙ ΣΤΗ ΖΩΗ ΜΟΥ ",
      welcomeMessagePart2: "ΧΡΗΣΙΜΟΠΟΙΩΝΤΑΣ ΑΥΤΟ ΤΟ ΛΟΓΙΣΜΙΚΟ",
      socialMediaPlatformTitle: "Είμαστε μια πλατφόρμα κοινωνικών μέσων/επιχειρήσεων",
      socialMediaPlatformDescription: "πλατφόρμα, όπου μπορείτε να είστε ασφαλείς από τον κόσμο της απάτης με τη διαδικασία επαλήθευσης 3 βημάτων και τον ενσωματωμένο ανιχνευτή ψεμάτων.",
    },
  },
  it: {
    translation: {
      welcomeMessagePart1: "GUARDA COSA HO RAGGIUNTO IN ",
      welcomeMessagePart2: "LA MIA VITA, USANDO QUESTO SOFTWARE",
      socialMediaPlatformTitle: "Siamo una piattaforma di social media/business",
      socialMediaPlatformDescription: "piattaforma, dove puoi essere al sicuro dal mondo delle frodi con il processo di verifica in 3 fasi e il rilevatore di bugie integrato.",
    },
  },
  pl: {
    translation: {
      welcomeMessagePart1: "ZOBACZ CO OSIĄGNĄŁEM W ",
      welcomeMessagePart2: "MOIM ŻYCIU, KORZYSTAJĄC Z TEGO OPROGRAMOWANIA",
      socialMediaPlatformTitle: "Jesteśmy platformą społecznościową/biznesową",
      socialMediaPlatformDescription: "platforma, na której możesz być bezpieczny przed światem oszustw dzięki 3-etapowemu procesowi weryfikacji i wbudowanemu wykrywaczowi kłamstw.",
    },
  },
  pt: {
    translation: {
      welcomeMessagePart1: "VEJA O QUE EU REALIZEI EM ",
      welcomeMessagePart2: "MINHA VIDA, USANDO ESTE SOFTWARE",
      socialMediaPlatformTitle: "Somos uma plataforma de mídia social/negócios",
      socialMediaPlatformDescription: "plataforma, onde você pode estar seguro do mundo das fraudes com o processo de verificação em 3 etapas e o detector de mentiras embutido.",
    },
  },
  ro: {
    translation: {
      welcomeMessagePart1: "VEZI CEEA CE AM REALIZAT ÎN ",
      welcomeMessagePart2: "VIAȚA MEA, FOLOSIND ACEST SOFTWARE",
      socialMediaPlatformTitle: "Suntem o platformă de socializare/business",
      socialMediaPlatformDescription: "platformă, unde poți fi în siguranță de lumea fraudelor cu procesul de verificare în 3 pași și detectorul de minciuni încorporat.",
    },
  },
  sr: {
    translation: {
      welcomeMessagePart1: "POGLEDAJTE ŠTA SAM POSTIGAO U ",
      welcomeMessagePart2: "SVOM ŽIVOTU KORISTEĆI OVAJ SOFTVER",
      socialMediaPlatformTitle: "Mi smo društvena mreža/biznis platforma",
      socialMediaPlatformDescription: "platforma, na kojoj možete biti sigurni od sveta prevara uz 3-stepeni proces verifikacije i ugrađeni detektor laži.",
    },
  },
  sl: {
    translation: {
      welcomeMessagePart1: "OGLEJTE SI, KAR SEM DOSEGLI V ",
      welcomeMessagePart2: "SVOJEM ŽIVLJENJU Z UPORABO TEGA PROGRAMSKO ORODJA",
      socialMediaPlatformTitle: "Smo platforma za družbena omrežja/podjetja",
      socialMediaPlatformDescription: "platforma, kjer ste lahko zaščiteni pred svetom prevar s 3-stopnjskim postopkom preverjanja in vgrajenim detektorjem laži.",
    },
  },
  sk: {
    translation: {
      welcomeMessagePart1: "POZRITE SA, ČO SOM DOSIAHOL V ",
      welcomeMessagePart2: "SVOJOM ŽIVOTE POMOCOU TOHTO SOFTVÉRU",
      socialMediaPlatformTitle: "Sme platforma sociálnych médií/byznys",
      socialMediaPlatformDescription: "platforma, kde môžete byť v bezpečí pred svetom podvodov pomocou 3-krokového overovacieho procesu a zabudovaného detektora lží.",
    },
  },
  sv: {
    translation: {
      welcomeMessagePart1: "SE VAD JAG HAR UPPNÅTT I ",
      welcomeMessagePart2: "MITT LIV, ANVÄNDA DEN HÄR PROGRAMVARAN",
      socialMediaPlatformTitle: "Vi är en social media/business-plattform",
      socialMediaPlatformDescription: "plattform, där du kan vara säker från bedrägerivärlden med 3-stegsverifieringsprocessen och inbyggd lögnupptäckare.",
    },
  },
  no: {
    translation: {
      welcomeMessagePart1: "SE HVA JEG HAR OPPNÅDD I ",
      welcomeMessagePart2: "MITT LIV, BRUKER DENNE PROGRAMVAREN",
      socialMediaPlatformTitle: "Vi er en sosial medie/business-plattform",
      socialMediaPlatformDescription: "plattform, hvor du kan være trygg mot svindelens verden med 3-trinns verifiseringsprosess og innebygd løgndetektor.",
    },
  },
};

i18n
  .use(initReactI18next) // Passes i18n to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Debugging: watch language change event
i18n.on('languageChanged', (lng) => {
  console.log(`Language changed to: ${lng}`);
});

export default i18n;
