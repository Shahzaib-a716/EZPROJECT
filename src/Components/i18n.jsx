import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language translations for each language
const resources = {
  en: {
    translation: {
      welcomeBack: "WELCOME BACK",
      welcomeMessagePart1: "SEE WHAT I HAVE ACCOMPLISHED IN ",
      welcomeMessagePart2: "MY LIFE, USING MY OWN SOFTWARE",
      socialMediaPlatformTitle: "We are a social media/business",
      socialMediaPlatformDescription: "platform, where you can be safe from the world of fraud with the 3-step verification process & built-in lie detector.",
      fraudAwarenessCaption: "We are currently working together with some agencies to make it easier for them to find those who would commit fraud against us.",
      zeroToleranceCaption: "We would like to warn you, that there won’t be any tolerance for rude, disrespectful, offensive or insulting behavior in this community INCLUDING NUDITY OF ANY KIND FAILURE TO ABIDE BY THESE RULES WILL RESULT IN TERMINATION OF YOUR ACCOUNT AND BUSINESS SYSTEM AND NO REFUNDS WILL BE POSSIBLE AND IF YOU REALLY REALLY WANT BACK IN, IT WILL COST YOU 1 MILLION U.S.",
      tradesFeeCaption: "TRADES PEOPLE PAY A LOW YEARLY FEE AND THE FIRST 3 months are completely free. No strings attached. NO tricks. We do not ask for any credit card information because we do not need to trick our customers into buying from us and no sales person will call.",
      callUsCaption: "WE ALSO DO NOT HIDE FROM OUR CUSTOMERS BY MAKING IT DIFFICULT OR, IMPOSSIBLE TO REACH US. CLICK ON THE GREEN BUTTON TO CALL US ANY TIME"
    
    },
  },
  de: {
    translation: {
      welcomeBack: "WILLKOMMEN ZURÜCK",
      welcomeMessagePart1: "SEHEN SIE, WAS ICH IN MEINEM LEBEN ERREICHT HABE ",
      welcomeMessagePart2: "MIT MEINER EIGENEN SOFTWARE",
      socialMediaPlatformTitle: "Wir sind eine Social-Media/Business-Plattform",
      socialMediaPlatformDescription: "Plattform, auf der Sie vor Betrug durch den 3-Schritte-Verifizierungsprozess und eingebauten Lügendetektor geschützt sind.",
      fraudAwarenessCaption: "Wir arbeiten derzeit mit einigen Agenturen zusammen, um es ihnen zu erleichtern, diejenigen zu finden, die uns betrügen wollen.",
      zeroToleranceCaption: "Wir möchten Sie warnen, dass es in dieser Gemeinschaft keine Toleranz für unhöfliches, respektloses, offensives oder beleidigendes Verhalten gibt, EINSCHLIESSLICH NACKTHEIT. DAS NICHTBEFOLGEN DIESER REGELN WIRD ZUR KÜNDIGUNG IHRES KONTOs UND GESCHÄFTSSYSTEMS FÜHREN UND KEINE RÜCKERSTATTUNGEN WERDEN MÖGLICH SEIN. WENN SIE WIRKLICH WIRKLICH ZURÜCKKOMMEN MÖCHTEN, KOSTET ES SIE 1 MILLION US.",
      tradesFeeCaption: "HANDELSLEUTE ZAHLEN EINE NIEDRIGE JÄHRLICHE GEBÜHR UND DIE ERSTEN 3 MONATE SIND VOLLSTÄNDIG KOSTENLOS. Keine Tricks. Wir fragen nicht nach Kreditkarteninformationen, weil wir unsere Kunden nicht in den Kauf zwingen müssen und niemand wird Sie anrufen.",
      callUsCaption: "WIR VERSTECKEN UNS AUCH NICHT VOR UNSEREN KUNDEN, INDEM WIR ES SCHWIERIG ODER UNMÖGLICH MACHEN, UNS ZU ERREICHEN. KLICKEN SIE AUF DEN GRÜNEN BUTTON, UM UNS JEDERZEIT ANZURUFEN"
  
    },
  },
  hu: {
    translation: {
      welcomeBack: "ÜDVÖZÖLJÜK VISSZA",
      welcomeMessagePart1: "LÁSD, MIT ÉRTEM EL AZ ÉLETHEZ ",
      welcomeMessagePart2: "A SAJÁT SZOFTVEREIM SEGÍTSÉGÉVEL",
      socialMediaPlatformTitle: "Mi egy közösségi média/üzleti platform vagyunk",
      socialMediaPlatformDescription: "platform, ahol biztonságban lehetsz a csalások világától a 3 lépéses hitelesítési folyamat és beépített hazugságdetektor segítségével.",

      fraudAwarenessCaption: "Jelenleg együtt dolgozunk néhány ügynökséggel, hogy könnyebbé tegyük számukra azok megtalálását, akik csalást szeretnének elkövetni ellenünk.",
      zeroToleranceCaption: "Figyelmeztetni szeretnénk, hogy a közösségünkben nincs tolerancia a durva, tiszteletteljes, sértő vagy inzultáló viselkedéssel szemben, MÁR NEM CSAK SZEXUÁLIS TARTALOMRA. AZ EZEK MEGSZEGÉSE A FŐSZÁMÍTÓKÉPÜNK ÉS A KERESKEDJÜK LEÁLLÍTÁSÁHOZ VEZET, ÉS A VISSZATÉRÍTÉS NEM LEHETSÉGES. Ha tényleg vissza szeretnél jönni, az 1 millió dollárba fog kerülni.",
      tradesFeeCaption: "A KERESKEDŐK ALACSONY ÉVES DÍJAT FIZETNEK, ÉS AZ ELSŐ 3 HÓNAP TELJESEN INGYENES. Nincsenek trükkök. Nem kérünk hitelkártya-információkat, mert nem kell becsapnunk a vásárlóinkat, hogy tőlünk vásároljanak, és nem fog senki sem hívni.",
      callUsCaption: "NEM IS REJTŐZÜNK A KÜLDETŐINK ELŐL, NEHÉZZÉ VAGY LEHETETLENSÉ TESZVÁLUNK ELÉRHETŐT! KATTINTS A ZÖLD GOMBBA, HOGY HÍVJON BÁRMIKOR"
    },
  },
  fr: {
    translation: {

      welcomeBack: "BON RETOUR",
      welcomeMessagePart1: "VOYEZ CE QUE J'AI ACCOMPLI DANS ",
      welcomeMessagePart2: "MA VIE, EN UTILISANT CE LOGICIEL",
      socialMediaPlatformTitle: "Nous sommes une plateforme de médias sociaux/entreprises",
      socialMediaPlatformDescription: "plateforme, où vous pouvez être protégé du monde de la fraude grâce au processus de vérification en 3 étapes et au détecteur de mensonges intégré.",

      fraudAwarenessCaption: "Nous travaillons actuellement avec certaines agences pour leur faciliter la tâche de trouver ceux qui tenteraient de nous frauder.",
      zeroToleranceCaption: "Nous tenons à vous avertir qu'il n'y aura aucune tolérance pour un comportement grossier, irrespectueux, offensant ou insultant dans cette communauté, Y COMPRIS LA NUDITÉ. LE NON-RESPECT DE CES RÈGLES ENTRAÎNERA LA RÉSILIATION DE VOTRE COMPTE ET DE VOTRE SYSTÈME D'AFFAIRES, ET AUCUN REMBOURSEMENT NE SERA POSSIBLE. ET SI VOUS TENEZ VRAIMENT À REVENIR, ÇA VOUS COÛTERA 1 MILLION DE DOLLARS.",
      tradesFeeCaption: "LES COMMERCANTS PAYENT UNE FEE ANNUELLE BASSE ET LES 3 PREMIERS MOIS SONT ENTIEREMENT GRATUITS. Aucun piège. Nous ne demandons pas d'informations sur la carte de crédit car nous n'avons pas besoin de tromper nos clients pour acheter chez nous, et personne ne vous appellera.",
      callUsCaption: "NOUS NE NOUS CACHONS PAS DE NOS CLIENTS EN RENDANT DIFFICILE OU IMPOSSIBLE DE NOUS JOINDRE. CLIQUEZ SUR LE BOUTON VERT POUR NOUS APPELER À TOUT MOMENT"
      
    },
  },
  es: {
    translation: {
      welcomeBack: "BIENVENIDO DE VUELTA",
      welcomeMessagePart1: "VE LO QUE HE LOGRADO EN ",
      welcomeMessagePart2: "MI VIDA, USANDO ESTE SOFTWARE",
      socialMediaPlatformTitle: "Somos una plataforma de redes sociales/negocios",
      socialMediaPlatformDescription: "plataforma, donde puedes estar a salvo del mundo del fraude con el proceso de verificación en 3 pasos y el detector de mentiras integrado.",
      fraudAwarenessCaption: "Actualmente estamos trabajando con algunas agencias para facilitarles encontrar a aquellos que intentarían cometer fraude contra nosotros.",
      zeroToleranceCaption: "Nos gustaría advertirles que no habrá tolerancia para el comportamiento grosero, irrespetuoso, ofensivo o insultante en esta comunidad, INCLUYENDO LA DESNUDEZ. EL INCUMPLIMIENTO DE ESTAS REGLAS RESULTARÁ EN LA TERMINACIÓN DE SU CUENTA Y SISTEMA DE NEGOCIOS Y NO HABRÁ REEMBOLSO. Y SI REALMENTE DESEA VOLVER, LE COSTARÁ 1 MILLÓN DE DÓLARES.",
      tradesFeeCaption: "LAS PERSONAS DE NEGOCIO PAGAN UNA TARIFA ANUAL BAJA Y LOS PRIMEROS 3 MESES SON TOTALMENTE GRATUITOS. Sin trucos. No pedimos información de tarjeta de crédito porque no necesitamos engañar a nuestros clientes para que compren con nosotros, y no llamará ningún vendedor.",
      callUsCaption: "TAMPOCO NOS ESCONDEMOS DE NUESTROS CLIENTES HACIENDO QUE SEA DIFÍCIL O IMPOSIBLE CONTACTARNOS. HAGA CLIC EN EL BOTÓN VERDE PARA LLAMARNOS EN CUALQUIER MOMENTO"
    },
  },
  tr: {
    translation: {
      welcomeBack: "HOŞ GELDİNİZ GERİ",
      welcomeMessagePart1: "HAYATIMDA NELER BAŞARDIMI GÖRÜN ",
      welcomeMessagePart2: "BU YAZILIMI KULLANARAK",
      socialMediaPlatformTitle: "Biz bir sosyal medya/iş platformuyuz",
      socialMediaPlatformDescription: "platform, 3 adımlı doğrulama süreci ve entegre yalan dedektörü ile dolandırıcılıkla dünyasından güvende olabilirsiniz.",
      fraudAwarenessCaption: "Şu anda, ajanslarla birlikte, bize karşı dolandırıcılık yapacakları kişileri bulmalarını kolaylaştırmak için çalışıyoruz.",
      zeroToleranceCaption: "Size şu uyarıyı yapmak isteriz ki, bu toplulukta kaba, saygısız, saldırgan veya hakaret içeren davranışlara karşı herhangi bir tolerans olmayacaktır, HERHANGİ BİR ÇIRILTI DAHİL. BU KURALLARA UYMAMAK, HESABINIZIN VE İŞ SİSTEMİNİZİN FESİH EDİLMESİNE NEDEN OLACAKTIR VE HİÇBİR PARA İADE EDİLMEYECEKTİR. GERÇEKTEN GERİ DÖNMEK İSTERSENİZ, BU 1 MİLYON DOLAR OLACAKTIR.",
      tradesFeeCaption: "TİCARET YAPANLAR DÜŞÜK YILLIK BİR ÜCRET ÖDER VE İLK 3 AY TAMAMEN ÜCRETSİZDİR. Hiçbir oyun yok. Kredi kartı bilgisi istemiyoruz çünkü müşterilerimizi bizden satın almaya kandırmamıza gerek yoktur ve hiçbir satış temsilcisi sizi aramayacaktır.",
      callUsCaption: "MÜŞTERİLERİMİZDEN, BİZİ ZORLA ULAŞILAMAZ HALE GETİREREK, HİÇBİR ŞEKİLDE KAÇMAYIZ. HERHANGİ BİR ZAMAN BİZİ ARAMAK İÇİN YEŞİL DÜĞMELERE TIKLAYIN"
    },
  },
  hr: {
    translation: {
      welcomeBack: "DOBRODOŠLI NATRAG",
      welcomeMessagePart1: "POGLEDAJTE ŠTO SAM POSTIGAO U ",
      welcomeMessagePart2: "SVOM ŽIVOTU KORISTEĆI OVAJ SOFTVER",
      socialMediaPlatformTitle: "Mi smo društvena medijska/biznis platforma",
      socialMediaPlatformDescription: "platforma na kojoj možete biti sigurni od svijeta prijevara s 3-stupanjskim procesom provjere i ugrađenim detektorom laži.",

      fraudAwarenessCaption: "Trenutno surađujemo s nekim agencijama kako bismo im olakšali pronalazak onih koji bi nas pokušali prevariti.",
      zeroToleranceCaption: "Željeli bismo vas upozoriti da neće biti tolerancije na nepristojno, nepoštovano, uvredljivo ili vrijeđajuće ponašanje u ovoj zajednici, UKLJUČUJUĆI GOLOTINJU. NEPOŠTIVANJE OVIH PRAVILA RESULTIRAT ĆE UKIDANJEM VAŠEG RAČUNA I POSLOVNOG SUSTAVA BEZ POVRATA NOVCA. A AKO ZAISTA ŽELITE NATRAG, TO ĆE KOŠTATI 1 MILIJUN USD.",
      tradesFeeCaption: "TRGOVCI PLAĆAJU NISKU GODIŠNJU NAKNADU, A PRVIH 3 MJESECA SU POTPUNO BESPLATNI. Bez trikova. Ne tražimo podatke o kreditnoj kartici jer ne moramo prevariti naše kupce da kupe od nas, a nijedan prodavač vas neće zvati.",
      callUsCaption: "Također se ne skrivamo od naših kupaca čineći da nas je teško ili nemoguće kontaktirati. Kliknite na zeleni gumb kako biste nas nazvali u bilo kojem trenutku."
    },
  },
  cs: {
    translation: {
        welcomeBack: "VÍTÁME ZPĚT",
      welcomeMessagePart1: "VIDĚJTE, CO JSEM DOSÁHL V ",
      welcomeMessagePart2: "SVÉM ŽIVOTĚ POMOCÍ TOHOTO SOFTWARE",
      socialMediaPlatformTitle: "Jsme sociální síť/byznys platforma",
      socialMediaPlatformDescription: "platforma, kde můžete být v bezpečí před světem podvodů díky 3krokovému ověřovacímu procesu a zabudovanému detektoru lží.",

      fraudAwarenessCaption: "V současnosti spolupracujeme s několika agenturami, abychom jim usnadnili hledání těch, kteří by nás mohli podvést.",
      zeroToleranceCaption: "Rádi bychom vás varovali, že v této komunitě nebude tolerováno hrubé, neúctivé, urážlivé nebo výsměšné chování, VČETNĚ ODSKOKU. NESPLNĚNÍ TĚCHTO PRAVIDEL POVLEČE UKONČENÍ VAŠEHO ÚČTU A OBCHODNÍHO SYSTÉMU A BEZ NÁHRADY. A POKUD OPRAVDU CHCETE ZPĚT, BUDE VÁS TO STÁT 1 MILION USD.",
      tradesFeeCaption: "OBCHODNÍCI PLATÍ NÍZKÝ ROČNÍ POPLATEK A PRVNÍ 3 MĚSÍCE JSOU ZCELA ZDARMA. Žádné triky. Nežádáme o údaje z kreditní karty, protože nemusíme naše zákazníky podvádět, aby od nás nakupovali, a žádný prodejce vás nebude volat.",
      callUsCaption: "TAKÉ SE NENÍME U NÁŠCH ZÁKAZNÍKŮ TÍM, ŽE ZNESNADŇUJEME NEBO NEMOŽNÉ DOSÁHNOUT. KLIKNĚTE NA ZELENÉ TLAČÍTKO, CHCETE-LI NÁS VOLAT KDYKOLI."
    
    },
  },
  da: {
    translation: {
      welcomeBack: "VELKOMMEN TILBAGE",
      welcomeMessagePart1: "SE Hvad jeg har opnået i ",
      welcomeMessagePart2: "MIT LIV, BRUGER DENNE SOFTWARE",
      socialMediaPlatformTitle: "Vi er en social media/business platform",
      socialMediaPlatformDescription: "platform, hvor du kan være sikker mod svindelverdenen med 3-trins verifikationsprocessen og den indbyggede løgndetektor.",
      fraudAwarenessCaption: "Vi arbejder i øjeblikket sammen med nogle agenturer for at gøre det lettere for dem at finde dem, der ville begå svindel mod os.",
      zeroToleranceCaption: "Vi vil gerne advare dig om, at der ikke vil være nogen tolerance for groft, respektløst, fornærmende eller fornærmende adfærd i dette fællesskab, INKLUDERET NØGENHED. OVERHOLDELSE AF DISSE REGLER VIL MEDFØRE OPSIGELSE AF DIN KONTO OG FORRETNINGSORDNING OG DER VIL IKKE VÆRE REFUNDEREDE PENGE. OG HVIS DU VIRKELIG VIL HAVE TILBAGE, VIL DET KOSTE DIG 1 MILLION USD.",
      tradesFeeCaption: "HANDELSPERSONER BETALER ET LAVT ÅRLIGT GEBYR, OG DE FØRSTE 3 MÅNEDER ER HELT GRATIS. Ingen tricks. Vi beder ikke om kreditkortoplysninger, fordi vi ikke behøver at narre vores kunder til at købe fra os, og ingen salgsrepræsentant vil ringe.",
      callUsCaption: "VI SKJULER OS OGSÅ IKKE FRA VORES KUNDER VED AT GØRE DET DIFFICULT ELLER UMULIGT AT NÅ OS. KLIK PÅ DEN GRØNNE KNAP FOR AT RINGE TIL OS PÅ ET HVERDAG."
    },
  },
  fi: {
    translation: {
      welcomeBack: "TERVETULOA TAKAISIN",
      welcomeMessagePart1: "NÄE MITÄ OLE SAAVUTTANUT ELÄMÄSSÄNI ",
      welcomeMessagePart2: "KÄYTTÄMÄLLÄ TÄTÄ OHJELMISTOA",
      socialMediaPlatformTitle: "Olemme sosiaalinen media/liiketoiminta-alusta",
      socialMediaPlatformDescription: "alusta, jossa voit olla turvassa petoksilta kolmen vaiheen varmennusprosessin ja sisäänrakennetun valehtelijatunnistimen avulla.",
      fraudAwarenessCaption: "Teemme parhaillaan yhteistyötä joidenkin virastojen kanssa, jotta heille olisi helpompaa löytää ne, jotka yrittäisivät huijata meitä.",
      zeroToleranceCaption: "Haluamme varoittaa, ettei tässä yhteisössä ole mitään hyväksyntää töykeille, epäkunnioittaville, loukkaaville tai solvaaville käytöksille, MYÖS ALASTOMUUDELLE. NÄIDEN SÄÄNTÖJEN RIKKOMINEN TULOKSEE TILISI JA LIIKETOIMINTASI LOPETUKSEEN, EIKÄ PALAUTUKSET OLE MAHDOLLISIA. JA JOS HALUAT TODELLA PALAUTA, SE MAKSAA SINULLE 1 MILJONAN DOLLARIN.",
      tradesFeeCaption: "KAUPPAHENKILÖT MAKSAVAT ALHAISEN VUOSIMAKSUN JA ENSIMMÄISET 3 KUUKAUTTA OVAT KOKONAAN ILMAISI. Ei temppuja. Emme kysy luottokorttitietoja, koska emme tarvitse huijata asiakkaitamme ostamaan meiltä, emmekä myyjä soita.",
      callUsCaption: "EMME MYÖS PIILOUDU ASIAKKAAMME KESKUSTELULLE TAI TEEMME MEITÄ VAIVALLISIKSI TAI VAIKEA NÄHDÄ MEITÄ. NAPAA Vihreä NAPPA, JOS HALUAT SOITTAA MEILLE MILLOIN TAHANSA."
    },
  },
  el: {
    translation: {
      welcomeBack: "ΚΑΛΩΣ ΗΡΘΑΤΕ ΠΙΣΩ",
      welcomeMessagePart1: "ΔΕΙΤΕ ΤΙ ΕΧΩ ΕΠΙΤΥΧΕΙ ΣΤΗ ΖΩΗ ΜΟΥ ",
      welcomeMessagePart2: "ΧΡΗΣΙΜΟΠΟΙΩΝΤΑΣ ΑΥΤΟ ΤΟ ΛΟΓΙΣΜΙΚΟ",
      socialMediaPlatformTitle: "Είμαστε μια πλατφόρμα κοινωνικών μέσων/επιχειρήσεων",
      socialMediaPlatformDescription: "πλατφόρμα, όπου μπορείτε να είστε ασφαλείς από τον κόσμο της απάτης με τη διαδικασία επαλήθευσης 3 βημάτων και τον ενσωματωμένο ανιχνευτή ψεμάτων.",

      fraudAwarenessCaption: "Αυτή τη στιγμή συνεργαζόμαστε με μερικές υπηρεσίες για να διευκολύνουμε την εύρεση αυτών που θα επιχειρήσουν να μας εξαπατήσουν.",
      zeroToleranceCaption: "Θα θέλαμε να σας προειδοποιήσουμε ότι δεν θα υπάρχει καμία ανοχή για αγενή, ανυπόφορη, προσβλητική ή υβριστική συμπεριφορά σε αυτή την κοινότητα, ΣΥΝΔΥΑΣΜΕΝΟ ΜΕ ΓΥΜΝΟΣΙΑ. Η ΠΑΡΑΒΑΣΗ ΑΥΤΩΝ ΤΩΝ ΚΑΝΟΝΩΝ ΘΑ ΟΔΗΓΗΣΕΙ ΣΕ ΑΚΥΡΩΣΗ ΤΟΥ ΛΟΓΑΡΙΑΣΜΟΥ ΣΑΣ ΚΑΙ ΤΟΥ ΣΥΣΤΗΜΑΤΟΣ ΕΠΙΧΕΙΡΗΣΗΣ ΚΑΙ ΔΕΝ ΘΑ ΥΠΑΡΧΟΥΝ ΕΠΙΣΤΡΟΦΕΣ ΧΡΗΜΑΤΩΝ. ΚΑΙ ΑΝ ΠΡΑΓΜΑΤΙ ΘΕΛΕΤΕ ΝΑ ΕΠΙΣΤΡΕΨΕΤΕ, ΘΑ ΣΑΣ ΚΟΣΤΙΣΕΙ 1 ΕΚΑΤΟΜΜΥΡΙΟ ΔΟΛΑΡΙΑ.",
      tradesFeeCaption: "ΟΙ ΕΠΑΓΓΕΛΜΑΤΙΕΣ ΠΛΗΡΩΝΟΥΝ ΧΑΜΗΛΗ ΕΤΗΣΙΑ ΧΡΕΩΣΗ ΚΑΙ ΟΙ ΠΡΩΤΟΙ 3 ΜΗΝΕΣ ΕΙΝΑΙ ΕΝΤΕΛΩΣ ΔΩΡΕΑΝ. ΧΩΡΙΣ ΚΟΛΠΟΥΣ. Δεν ζητάμε στοιχεία πιστωτικών καρτών γιατί δεν χρειάζεται να ξεγελάσουμε τους πελάτες μας για να αγοράσουν από εμάς και κανένας πωλητής δεν θα σας καλέσει.",
      callUsCaption: "ΕΠΙΣΗΣ ΔΕΝ ΚΡΥΒΟΜΑΣΤΕ ΑΠΟ ΤΟΥΣ ΠΕΛΑΤΕΣ ΜΑΣ ΚΑΝΟΝΤΑΣ ΔΥΣΚΟΛΟ Ή ΑΔΥΝΑΤΟ ΝΑ ΜΑΣ ΦΤΑΣΟΥΝ. ΚΛΙΚ ΣΤΟ ΠΡΑΣΙΝΟ ΚΟΥΜΠΙ ΓΙΑ ΝΑ ΜΑΣ ΚΑΛΕΣΕΤΕ ΟΠΟΤΕΔΗΠΟΤΕ."
    },
  },
  it: {
    welcomeBack: "BENVENUTO DI NUOVO",
    translation: {
      welcomeMessagePart1: "GUARDA COSA HO RAGGIUNTO IN ",
      welcomeMessagePart2: "LA MIA VITA, USANDO QUESTO SOFTWARE",
      socialMediaPlatformTitle: "Siamo una piattaforma di social media/business",
      socialMediaPlatformDescription: "piattaforma, dove puoi essere al sicuro dal mondo delle frodi con il processo di verifica in 3 fasi e il rilevatore di bugie integrato.",

      fraudAwarenessCaption: "Attualmente stiamo collaborando con alcune agenzie per facilitare la ricerca di coloro che potrebbero cercare di truffarci.",
      zeroToleranceCaption: "Desideriamo avvisarvi che non ci sarà tolleranza per comportamenti scortesi, irrispettosi, offensivi o insultanti in questa comunità, INCLUSO LA NUDITÀ. LA VIOLAZIONE DI QUESTE REGOLE COMPORTERÀ LA TERMINAZIONE DEL TUO CONTO E DEL SISTEMA AZIENDALE E NON CI SARANNO RIMBORSI. E SE DESIDERI DAVVERO ESSERE RIAMMESSO, TI COSTERÀ 1 MILIONE DI DOLLARI.",
      tradesFeeCaption: "I COMMERCIALI PAGANO UNA TASSA ANNUA BASSA E I PRIMI 3 MESI SONO COMPLETAMENTE GRATUITI. Nessun trucco. Non chiediamo informazioni sulla carta di credito perché non abbiamo bisogno di ingannare i nostri clienti per acquistare da noi e nessun venditore ti chiamerà.",
      callUsCaption: "NON CI NASCONDIAMO ANCHE DAI NOSTRI CLIENTI FACENDOLO DIFFICILE O IMPOSSIBILE CONTATTARCI. CLICCA SUL BOTTONE VERDE PER CHIAMARCI IN QUALSIASI MOMENTO."
    },
  },
  pl: {
    translation: {
      welcomeBack: "WITAJ Z POWROTEM",
      welcomeMessagePart1: "ZOBACZ CO OSIĄGNĄŁEM W ",
      welcomeMessagePart2: "MOIM ŻYCIU, KORZYSTAJĄC Z TEGO OPROGRAMOWANIA",
      socialMediaPlatformTitle: "Jesteśmy platformą społecznościową/biznesową",
      socialMediaPlatformDescription: "platforma, na której możesz być bezpieczny przed światem oszustw dzięki 3-etapowemu procesowi weryfikacji i wbudowanemu wykrywaczowi kłamstw.",

      fraudAwarenessCaption: "Aktualnie współpracujemy z agencjami, aby ułatwić im znalezienie osób, które mogłyby próbować nas oszukać.",
      zeroToleranceCaption: "Chcielibyśmy ostrzec, że w tej społeczności nie będzie tolerancji dla grubiańskiego, niegrzecznego, obraźliwego lub wyśmiewającego zachowania, W TYM NAGOŚCI. NARUSZENIE TYCH ZASAD SPOWODUJE ZAKOŃCZENIE TWOJEGO KONTA I SYSTEMU BIZNESOWEGO ORAZ BRAK ZWROTU PIENIĘDZY. A JEŚLI NAPRAWDĘ CHCESZ WRÓCIĆ, BĘDZIE CIĘ TO KOSZTOWAĆ 1 MILION DOLARÓW.",
      tradesFeeCaption: "LUDZIE HANDLOWI PŁACĄ NISKĄ ROCZNĄ OPŁATĘ, A PIERWSZE 3 MIESIĄCE SĄ CAŁKOWICIE BEZPŁATNE. Bez sztuczek. Nie prosimy o dane karty kredytowej, ponieważ nie musimy oszukiwać naszych klientów, aby kupili u nas, a żaden sprzedawca nie zadzwoni.",
      callUsCaption: "NIE UKRYWAMY SIĘ TAKŻE PRZED NASZYMI KLIENTAMI, UTRUDNIAJĄC LUB UNIEMOŻLIWIAJĄC KONTAKT Z NAMI. KLIKNIJ NA ZIELONY PRZYCISK, ABY NAS ZADZWONIĆ W DOWOLNEJ CHWILI."
    },
  },
  pt: {
    translation: {
      welcomeBack: "BEM-VINDO DE VOLTA",
      welcomeMessagePart1: "VEJA O QUE EU REALIZEI EM ",
      welcomeMessagePart2: "MINHA VIDA, USANDO ESTE SOFTWARE",
      socialMediaPlatformTitle: "Somos uma plataforma de mídia social/negócios",
      socialMediaPlatformDescription: "plataforma, onde você pode estar seguro do mundo das fraudes com o processo de verificação em 3 etapas e o detector de mentiras embutido.",

      fraudAwarenessCaption: "Atualmente estamos trabalhando com algumas agências para facilitar a busca por aqueles que tentariam nos fraudar.",
      zeroToleranceCaption: "Gostaríamos de alertá-lo de que não haverá tolerância para comportamentos grosseiros, desrespeitosos, ofensivos ou insultuosos nesta comunidade, INCLUINDO NUDISMO. A VIOLAÇÃO DESSAS REGRAS RESULTARÁ NO CANCELAMENTO DA SUA CONTA E DO SISTEMA DE NEGÓCIOS E NÃO HÁ DEVOLUÇÕES POSSÍVEIS. E SE VOCÊ REALMENTE QUISER VOLTAR, VAI CUSTAR 1 MILHÃO DE DÓLARES.",
      tradesFeeCaption: "PESSOAS DO COMÉRCIO PAGAM UMA TAXA ANUAL BAIXA E OS PRIMEIROS 3 MESES SÃO TOTALMENTE GRATUITOS. Sem truques. Não pedimos informações de cartão de crédito porque não precisamos enganar nossos clientes para comprarem de nós e nenhum vendedor ligará.",
      callUsCaption: "TAMBÉM NÃO NOS ESCONDEMOS DOS NOSSOS CLIENTES FACILITANDO OU IMPOSSIBILITANDO O CONTATO CONOSCO. CLIQUE NO BOTÃO VERDE PARA NOS CHAMAR A QUALQUER HORA."
    },
  },
  ro: {
    translation: {
      welcomeBack: "BINE AȚI VENIT ÎNAPOI",
      welcomeMessagePart1: "VEZI CEEA CE AM REALIZAT ÎN ",
      welcomeMessagePart2: "VIAȚA MEA, FOLOSIND ACEST SOFTWARE",
      socialMediaPlatformTitle: "Suntem o platformă de socializare/business",
      socialMediaPlatformDescription: "platformă, unde poți fi în siguranță de lumea fraudelor cu procesul de verificare în 3 pași și detectorul de minciuni încorporat.",

      fraudAwarenessCaption: "În prezent lucrăm împreună cu unele agenții pentru a le facilita găsirea celor care ar încerca să ne înșele.",
      zeroToleranceCaption: "Dorim să vă avertizăm că nu va exista nicio toleranță pentru comportamentele nepoliticoase, respectuoase, ofensatoare sau insultătoare în această comunitate, INCLUZÂND GOLECILE. Nerespectarea acestor reguli va duce la închiderea contului dumneavoastră și a sistemului de afaceri și nu vor exista rambursări. Și dacă chiar doriți să reveniți, va costa 1 MILION DE DOLARI.",
      tradesFeeCaption: "Persoanele din comerț plătesc o taxă anuală mică și primele 3 luni sunt complet gratuite. Fără trucuri. Nu cerem informații despre cardul de credit pentru că nu avem nevoie să înșelăm clienții noștri să cumpere de la noi și niciun vânzător nu vă va suna.",
      callUsCaption: "DE ASEMENEA, NU NE ASCUNDEM DE LA CLIENȚII NOȘTRI FACILITÂND SAU IMPOSIBILITÂND SĂ NE CONTACTEZI. CLICAȚI PE BUTONUL VERDE PENTRU A NE SUNA ORICÂND."
    },
  },
  sr: {
    translation: {
      welcomeBack: "DOBRODOŠLI NATRAG",
      welcomeMessagePart1: "POGLEDAJTE ŠTA SAM POSTIGAO U ",
      welcomeMessagePart2: "SVOM ŽIVOTU KORISTEĆI OVAJ SOFTVER",
      socialMediaPlatformTitle: "Mi smo društvena mreža/biznis platforma",
      socialMediaPlatformDescription: "platforma, na kojoj možete biti sigurni od sveta prevara uz 3-stepeni proces verifikacije i ugrađeni detektor laži.",
      fraudAwarenessCaption: "Trenutno sarađujemo sa nekim agencijama kako bismo im olakšali pronalaženje onih koji bi pokušali da nas prevare.",
      zeroToleranceCaption: "Želimo da vas upozorimo da neće biti tolerancije prema grubim, nepoštovanim, uvredljivim ili zlonamernim ponašanjima u ovoj zajednici, UKLJUČUJUĆI GOLOST. NARUŠAVANJE OVIH PRAVILA ĆE DOVESTI DO UKIDANJA VAŠEG RAČUNA I POSLOVNOG SISTEMA I NEMA POVRATA NOVCA. I AKO ZAISTA ŽELITE DA SE VRATITE, TO ĆE VAM KOŠTATI 1 MILION DOLARA.",
      tradesFeeCaption: "TRGOVCI PLAĆAJU NISKU GODIŠNJU TAKSU, A PRVIH 3 MESECA SU POTPUNO BESPLATNI. Bez trikova. Ne tražimo informacije o kreditnim karticama jer ne moramo prevariti naše kupce da kupe od nas, a nijedan prodavac vas neće pozvati.",
      callUsCaption: "Takođe, ne skrivamo se od naših kupaca čineći kontakt sa nama teško ili nemoguće. Kliknite na zeleni taster kako biste nas pozvali u bilo koje vreme."
    },
  },
  sl: {
    translation: {
      welcomeBack: "DOBRODOŠLI NAZAJ",
      welcomeMessagePart1: "OGLEJTE SI, KAR SEM DOSEGLI V ",
      welcomeMessagePart2: "SVOJEM ŽIVLJENJU Z UPORABO TEGA PROGRAMSKO ORODJA",
      socialMediaPlatformTitle: "Smo platforma za družbena omrežja/podjetja",
      socialMediaPlatformDescription: "platforma, kjer ste lahko zaščiteni pred svetom prevar s 3-stopnjskim postopkom preverjanja in vgrajenim detektorjem laži.",
      fraudAwarenessCaption: "Trenutno sodelujemo z nekaterimi agencijami, da jim olajšamo iskanje tistih, ki bi nas poskušali prevarati.",
      zeroToleranceCaption: "Želimo vas opozoriti, da v tej skupnosti ne bo tolerance za nespoštljivo, neprimerne, žaljivo ali posmehljivo vedenje, VKLJUČNO Z GOLOTOČO. KRŠITEV TEH PRAVIL BO POMEMBNO PREKLICALA VAŠ RAČUN IN POSLOVNI SISTEM, BREZ VRAČILA DENARJA. IN ČE RESNIČNO ŽELITE VRNITI, TO VAS BO STALO 1 MILIJON USD.",
      tradesFeeCaption: "TRGOVCI PLAČAJO NIZKO LETNO TAKSO, PRVIH 3 MESECE PA SO POPOLNOMA BREZPLAČNI. Brez trikov. Ne sprašujemo za podatke o kreditnih karticah, ker ne potrebujemo varanja naših strank, da kupijo pri nas in noben prodajalec vas ne bo poklical.",
      callUsCaption: "TUDI SE NE SKRIVAMO OD NAŠIH STRANK Z OMEJEVANJEM ALI ONEMOGOČANJEM, DA NAS KONTAKTIRATE. Pritisnite zeleni gumb, da nas pokličete kadarkoli."
    },
  },
  sk: {
    translation: {
      welcomeBack: "VITAJTE SPÄŤ",
      welcomeMessagePart1: "POZRITE SA, ČO SOM DOSIAHOL V ",
      welcomeMessagePart2: "SVOJOM ŽIVOTE POMOCOU TOHTO SOFTVÉRU",
      socialMediaPlatformTitle: "Sme platforma sociálnych médií/byznys",
      socialMediaPlatformDescription: "platforma, kde môžete byť v bezpečí pred svetom podvodov pomocou 3-krokového overovacieho procesu a zabudovaného detektora lží.",
      fraudAwarenessCaption: "Aktuálne spolupracujeme s niektorými agentúrami, aby sme im uľahčili nájsť tých, ktorí by sa nás pokúsili oklamať.",
      zeroToleranceCaption: "Chceme vás varovať, že v tejto komunite nebude tolerovaná hrubá, neúctivá, urážlivá alebo posmešná správanie, VRÁTANE ODSKOKOVANIA. PORUŠENIE TÝCHTO PRAVIDIEL POVEDIE K UKONČENIU VÁŠHO ÚČTU A OBCHODNÉHO SYSTÉMU A NEBUDE MOŽNÉ VRÁTIŤ PENIAZE. A AK CHCETE OPRAVDU SPÄŤ, BUDE TO STAŤ 1 MILIÓN USD.",
      tradesFeeCaption: "OBCHODNÍCI PLATIA NÍZKU ROČNÚ TAXU A PRVÉ 3 MESAICE SÚ ÚPLNE ZADARMO. Žiadne triky. Nepýtame sa na informácie o kreditných kartách, pretože nemusíme podvádzať našich zákazníkov, aby od nás nakupovali a žiadny predajca vám nezavolá.",
      callUsCaption: "TIEŽ SA NESKRÝVAME OD NAŠICH ZÁKAZNÍKOV UTVÁRANÍM ŤAŽKOSTÍ ALEBO NEMOŽNOSŤOU KONTAKTOVANIA NÁS. KLIKNITE NA ZELENÉ TLAČIDLO A KOLUJTE NÁS KEDYKOĽVEK."
    },
  },
  sv: {
    welcomeBack: "VÄLKOMMEN TILLBAKA",
    translation: {
      welcomeMessagePart1: "SE VAD JAG HAR UPPNÅTT I ",
      welcomeMessagePart2: "MITT LIV, ANVÄNDA DEN HÄR PROGRAMVARAN",
      socialMediaPlatformTitle: "Vi är en social media/business-plattform",
      socialMediaPlatformDescription: "plattform, där du kan vara säker från bedrägerivärlden med 3-stegsverifieringsprocessen och inbyggd lögnupptäckare.",

      fraudAwarenessCaption: "Vi arbetar för närvarande tillsammans med vissa byråer för att underlätta deras sökning efter dem som skulle försöka bedra oss.",
      zeroToleranceCaption: "Vi vill varna er för att det inte kommer att vara någon tolerans för grovt, respektlöst, offensivt eller förnedrande beteende i detta samhälle, INKLUSIVE NUDITET. BROTT MOT DESSA REGLER KOMMER ATT LEDA TILL UPPSÄGNING AV DITT KONTO OCH DITT AFFÄRSSYSTEM OCH INGA ÅTERBETALNINGAR KOMMER ATT GÖRAS. OCH OM DU VERKLIGEN VILL ÅTERVÄNDA, KOMMER DET ATT KOSTA DIG 1 MILJON USD.",
      tradesFeeCaption: "HANDELSMÄN BETALAR EN LÅG ÅRLIG AVGIFT OCH DE FÖRSTA 3 MÅNADERNA ÄR HELT GRATIS. Inga trick. Vi ber inte om kreditkortsinformation för vi behöver inte lura våra kunder att köpa från oss, och ingen säljare kommer att ringa.",
      callUsCaption: "VI GÖR INTE HELER GÖMMA OSS FRÅN VÅRA KUNDER GENOM ATT GÖRA DET SVÅRT ELLER OMÖJLIGT ATT KONTAKTA OSS. KLICKA PÅ DEN GRÖNA KNAPPEN FÖR ATT RINGA OSS NÄR SOM HELST."
    },
  },
  no: {
    translation: {
      welcomeBack: "VELKOMMEN TILBAKE",
      welcomeMessagePart1: "SE HVA JEG HAR OPPNÅDD I ",
      welcomeMessagePart2: "MITT LIV, BRUKER DENNE PROGRAMVAREN",
      socialMediaPlatformTitle: "Vi er en sosial medie/business-plattform",
      socialMediaPlatformDescription: "plattform, hvor du kan være trygg mot svindelens verden med 3-trinns verifiseringsprosess og innebygd løgndetektor.",

      fraudAwarenessCaption: "Vi jobber for øyeblikket sammen med noen byråer for å gjøre det lettere for dem å finne dem som prøver å svindle oss.",
      zeroToleranceCaption: "Vi vil advare deg om at det ikke vil være noen toleranse for uhøflig, respektløs, fornærmende eller hånlig atferd i dette fellesskapet, INKLUDERT NUDITET. BRUDD PÅ DISSE REGLENE VIL FØRE TIL OPPSIGELSE AV KONTOEN DIN OG FORRETNINGSSYSTEMET DITT, OG DET VIL IKKE VÆRE NOEN REFUSJONER. OG HVIS DU VIRKELIG VIL KOMME TILBAKE, VIL DET KOSTE DEG 1 MILLION USD.",
      tradesFeeCaption: "HANDELSPERSONER BETALER EN LAV ÅRLIG AVGIFT, OG DE FØRSTE 3 MÅNEDENE ER HELT GRATIS. Ingen triks. Vi ber ikke om kredittkortinformasjon fordi vi ikke trenger å lure kundene våre til å kjøpe fra oss, og ingen selger vil ringe deg.",
      callUsCaption: "VI GJEMMER OSS IKKE FOR VÅRE KUNDER VED Å GJØRE DET VANSKELIG ELLER UMULIG Å KONTAKTE OSS. KLIKK PÅ DEN GRØNNE KNAPPEN FOR Å RINGE OSS NÅR SOM HELST."
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
