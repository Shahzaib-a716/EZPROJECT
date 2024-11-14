// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language translations for each language
const resources = {
  en: {
    translation: {
      welcomeMessagePart1: "SEE WHAT I HAVE ACCOMPLISHED IN ",
      welcomeMessagePart2:"MY LIFE, USING MY OWN SOFTWARE",
      footerText: "All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  de: {
    translation: {
      welcomeMessage: "Ich bin der lebende Beweis: Wenn Sie organisiert sind und mein System haben, können Sie fast alles erreichen! Klicken Sie mich an, um den Beweis zu sehen!",
      footerText: "Alle Rechte vorbehalten • Service Hub von Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  hu: {
    translation: {
      welcomeMessage: "Én vagyok az élő bizonyíték: ha szervezett vagy és megvan a rendszerem, szinte bármit elérhetsz! Kattints rám, hogy lásd a bizonyítékot!",
      footerText: "Minden jog fenntartva • Service Hub by Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  fr: {
    translation: {
      welcomeMessage: "Je suis la preuve vivante : si vous êtes organisé et que vous avez mon système, vous pouvez accomplir presque tout ! Cliquez sur moi pour voir la preuve !",
      footerText: "Tous droits réservés • Service Hub par Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  es: {
    translation: {
      welcomeMessage: "Soy la prueba viviente: si eres organizado y tienes mi sistema, ¡puedes lograr casi cualquier cosa! ¡Haz clic en mí para ver la prueba!",
      footerText: "Todos los derechos reservados • Service Hub por Total Mizers Ltd. Toronto, Ontario CANADÁ (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  tr: {
    translation: {
      welcomeMessage: "Ben yaşayan bir kanıtım: Organize olursanız ve benim sistemime sahipseniz, neredeyse her şeyi başarabilirsiniz! Kanıtı görmek için bana tıklayın!",
      footerText: "Tüm hakları saklıdır • Total Mizers Ltd. tarafından Service Hub Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  hr: {
    translation: {
      welcomeMessage: "Ja sam živi dokaz: ako ste organizirani i imate moj sustav, možete postići gotovo bilo što! Kliknite na mene da vidite dokaz!",
      footerText: "Sva prava pridržana • Service Hub by Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  cs: {
    translation: {
      welcomeMessage: "Jsem živým důkazem: pokud jste organizovaní a máte můj systém, můžete dosáhnout téměř čehokoli! Klikněte na mě a uvidíte důkaz!",
      footerText: "Všechna práva vyhrazena • Service Hub by Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  da: {
    translation: {
      welcomeMessage: "Jeg er et levende bevis: hvis du er organiseret, og du har mit system, kan du opnå næsten alt! Klik på mig for at se beviset!",
      footerText: "Alle rettigheder forbeholdt • Service Hub by Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  fi: {
    translation: {
      welcomeMessage: "Olen elävä todiste: jos olet järjestäytynyt ja sinulla on järjestelmäni, voit saavuttaa melkein mitä tahansa! Napsauta minua nähdäksesi todisteet!",
      footerText: "Kaikki oikeudet pidätetään • Service Hub by Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  el: {
    translation: {
      welcomeMessage: "Είμαι ζωντανή απόδειξη: εάν είστε οργανωμένοι και έχετε το σύστημά μου, μπορείτε να πετύχετε σχεδόν τα πάντα! Κάντε κλικ σε μένα για να δείτε την απόδειξη!",
      footerText: "Όλα τα δικαιώματα διατηρούνται • Service Hub από Total Mizers Ltd. Τορόντο, Οντάριο ΚΑΝΑΔΑΣ (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  it: {
    translation: {
      welcomeMessage: "Sono la prova vivente: se sei organizzato e hai il mio sistema, puoi ottenere quasi tutto! Clicca su di me per vedere la prova!",
      footerText: "Tutti i diritti riservati • Service Hub di Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  pl: {
    translation: {
      welcomeMessage: "Jestem żywym dowodem: jeśli jesteś zorganizowany i masz mój system, możesz osiągnąć prawie wszystko! Kliknij na mnie, aby zobaczyć dowód!",
      footerText: "Wszelkie prawa zastrzeżone • Service Hub by Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  pt: {
    translation: {
      welcomeMessage: "Sou a prova viva: se você for organizado e tiver o meu sistema, poderá realizar quase tudo! Clique em mim para ver a prova!",
      footerText: "Todos os direitos reservados • Service Hub por Total Mizers Ltd. Toronto, Ontario CANADÁ (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  ro: {
    translation: {
      welcomeMessage: "Sunt dovada vie: dacă ești organizat și ai sistemul meu, poți realiza aproape orice! Fă clic pe mine pentru a vedea dovada!",
      footerText: "Toate drepturile rezervate • Service Hub de Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  sr: {
    translation: {
      welcomeMessage: "Ja sam živi dokaz: ako ste organizovani i imate moj sistem, možete postići gotovo sve! Kliknite na mene da vidite dokaz!",
      footerText: "Sva prava zadržana • Service Hub by Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  sl: {
    translation: {
      welcomeMessage: "Sem živ dokaz: če ste organizirani in imate moj sistem, lahko dosežete skoraj vse! Kliknite na mene, da vidite dokaz!",
      footerText: "Vse pravice pridržane • Service Hub by Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  sk: {
    translation: {
      welcomeMessage: "Som živým dôkazom: ak ste organizovaní a máte môj systém, môžete dosiahnuť takmer čokoľvek! Kliknite na mňa a uvidíte dôkaz!",
      footerText: "Všetky práva vyhradené • Service Hub by Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  sv: {
    translation: {
      welcomeMessage: "Jag är levande bevis: om du är organiserad och har mitt system kan du uppnå nästan vad som helst! Klicka på mig för att se beviset!",
      footerText: "Alla rättigheter förbehållna • Service Hub av Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
    },
  },
  no: {
    translation: {
      welcomeMessage: "Jeg er et levende bevis: hvis du er organisert og har mitt system, kan du oppnå nesten hva som helst! Klikk på meg for å se beviset!",
      footerText: "Alle rettigheter forbeholdt • Service Hub by Total Mizers Ltd. Toronto, Ontario KANADA (416) 333.FAST (3278) Copyright © 2016 - 2024, Les The Handyman.",
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

export default i18n;
