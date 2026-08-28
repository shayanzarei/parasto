import type { Lang } from "@/i18n/translations";

export type LocalizedString = Record<Lang, string>;

export type TermsBullet = {
  title?: LocalizedString;
  text: LocalizedString;
  subItems?: LocalizedString[];
};

export type TermsTableRow = {
  situation: LocalizedString;
  terms: LocalizedString;
};

export type TermsSection = {
  id: string;
  title: LocalizedString;
  intro?: LocalizedString;
  bullets?: TermsBullet[];
  table?: {
    headers: { situation: LocalizedString; terms: LocalizedString };
    rows: TermsTableRow[];
  };
  note?: LocalizedString;
};

export const termsPage: {
  title: LocalizedString;
  subtitle: LocalizedString;
  closing: LocalizedString;
  sections: TermsSection[];
} = {
  title: {
    nl: "Algemene Voorwaarden & Huisregels",
    en: "Terms & Conditions and House Rules",
  },
  subtitle: {
    nl: "Huid- & schoonheidskliniek — transparantie, kwaliteit & zorg",
    en: "Skin & beauty clinic — transparency, quality & care",
  },
  closing: {
    nl: "Dank u voor uw vertrouwen in onze kliniek. Met het maken van een afspraak verklaart u zich akkoord met deze algemene voorwaarden en huisregels.",
    en: "Thank you for your trust in our clinic. By making an appointment, you agree to these terms and conditions and house rules.",
  },
  sections: [
    {
      id: "appointments",
      title: {
        nl: "1. Afspraken & bevestiging",
        en: "1. Appointments & confirmation",
      },
      bullets: [
        {
          title: { nl: "Definitieve boeking", en: "Confirmed booking" },
          text: {
            nl: "Een afspraak is pas definitief vastgelegd zodra u van ons een officiële schriftelijke afspraakbevestiging per e-mail heeft ontvangen. Mondelinge afspraken of verzoeken via sociale media zijn niet bindend totdat deze per e-mail zijn bevestigd.",
            en: "An appointment is only confirmed once you have received an official written confirmation from us by email. Verbal agreements or requests via social media are not binding until they have been confirmed by email.",
          },
        },
        {
          title: { nl: "Aankomsttijd", en: "Arrival time" },
          text: {
            nl: "Wij verzoeken u vriendelijk om op het afgesproken tijdstip aanwezig te zijn. Bij te laat komen kan de behandelingstijd worden ingekort om de planning voor volgende cliënten te waarborgen, waarbij het volledige behandelbedrag in rekening wordt gebracht.",
            en: "Please arrive at the agreed time. If you arrive late, treatment time may be shortened to protect the schedule for following clients, while the full treatment fee remains due.",
          },
        },
        {
          title: {
            nl: "Aanwezigheid van derden",
            en: "Presence of accompanying persons",
          },
          text: {
            nl: "Het meebrengen van extra gasten of kinderen is uit veiligheid en ten behoeve van de rust in de kliniek uitsluitend toegestaan na voorafgaand overleg met onze agendacoördinator.",
            en: "Bringing extra guests or children is only allowed after prior consultation with our scheduling coordinator, for safety and to maintain a calm clinic environment.",
          },
        },
        {
          title: { nl: "Minimumleeftijd", en: "Minimum age" },
          text: {
            nl: "De minimumleeftijd voor het ondergaan van behandelingen in onze kliniek is 15 jaar. Bij minderjarigen is schriftelijke toestemming van een ouder/voogd vereist.",
            en: "The minimum age for treatments at our clinic is 15. For minors, written consent from a parent or guardian is required.",
          },
        },
      ],
    },
    {
      id: "cancellation",
      title: {
        nl: "2. Verzetten, annulering & no-show beleid",
        en: "2. Rescheduling, cancellation & no-show policy",
      },
      intro: {
        nl: "Wij reserveren speciaal tijd en apparatuur voor uw behandeling. Bij wijzigingen hanteren wij de volgende regels:",
        en: "We specifically reserve time and equipment for your treatment. For changes, the following rules apply:",
      },
      table: {
        headers: {
          situation: { nl: "Situatie / termijn", en: "Situation / notice" },
          terms: { nl: "Voorwaarden & kosten", en: "Terms & fees" },
        },
        rows: [
          {
            situation: {
              nl: "Verzetten van afspraak (minimaal 24 uur van tevoren)",
              en: "Rescheduling (at least 24 hours in advance)",
            },
            terms: {
              nl: "Kosteloos mogelijk mits minimaal 24 uur voor de geplande afspraak doorgegeven.",
              en: "Free of charge if notified at least 24 hours before the scheduled appointment.",
            },
          },
          {
            situation: {
              nl: "Annulering (meer dan 48 uur van tevoren)",
              en: "Cancellation (more than 48 hours in advance)",
            },
            terms: {
              nl: "Kosteloos annuleren tot minimaal 2 dagen (48 uur) voor de afspraak. De eventueel betaalde aanbetaling wordt omgezet in spaarpunten/tegoed.",
              en: "Free cancellation up to at least 2 days (48 hours) before the appointment. Any deposit paid is converted into loyalty points/credit.",
            },
          },
          {
            situation: {
              nl: "Laattijdige annulering / wijziging (binnen 48 uur voor afspraak)",
              en: "Late cancellation / change (within 48 hours of the appointment)",
            },
            terms: {
              nl: "Indien u een aanbetaling heeft gedaan: de voldane aanbetaling wordt ingehouden. Indien u geen aanbetaling heeft gedaan: u bent 25% van de totale behandelingskosten verschuldigd.",
              en: "If you have paid a deposit: the deposit is retained. If you have not paid a deposit: 25% of the total treatment fee is due.",
            },
          },
          {
            situation: {
              nl: "No-show / niet opkomen (zonder tijdige afzegging)",
              en: "No-show / failure to attend (without timely cancellation)",
            },
            terms: {
              nl: "Bij het niet verschijnen op de afspraak zonder afmelding wordt 50% van de totale kosten van de behandeling in rekening gebracht.",
              en: "If you do not attend without cancelling, 50% of the total treatment fee will be charged.",
            },
          },
        ],
      },
      note: {
        nl: "Let op: Annuleringen of wijzigingen dienen altijd schriftelijk (per e-mail) of telefonisch tijdens openingstijden aan ons te worden doorgegeven.",
        en: "Please note: Cancellations or changes must always be communicated to us in writing (by email) or by phone during opening hours.",
      },
    },
    {
      id: "deposits",
      title: {
        nl: "3. Aanbetalingen & spaarpuntensysteem",
        en: "3. Deposits & loyalty points system",
      },
      bullets: [
        {
          title: {
            nl: "Aanbetaling per behandelingstype",
            en: "Deposit per treatment type",
          },
          text: {
            nl: "Voor het definitief reserveren van een afspraak hanteren wij de volgende aanbetalingen. Door de aanbetaling te voldoen, gaat u akkoord met onze prijslijst en algemene voorwaarden.",
            en: "To confirm an appointment, the following deposits apply. By paying the deposit, you agree to our price list and terms and conditions.",
          },
          subItems: [
            {
              nl: "Huidbehandelingen (zoals acne, laser, gezichtsbehandelingen e.d.): € 50,-",
              en: "Skin treatments (such as acne, laser, facial treatments, etc.): €50",
            },
            {
              nl: "Injectables & cosmetische behandelingen (zoals fillers & botox): € 100,-",
              en: "Injectables & cosmetic treatments (such as fillers & botox): €100",
            },
          ],
        },
        {
          title: {
            nl: "Behoud van aanbetaling (spaarpunten)",
            en: "Retention of deposit (loyalty points)",
          },
          text: {
            nl: "Reeds voldane aanbetalingen worden bij regelmatige annulering (meer dan 48 uur van tevoren) niet contant of per bank terugbetaald, maar blijven behouden als spaarpunten / tegoed in ons systeem.",
            en: "Deposits already paid are not refunded in cash or by bank transfer in the case of timely cancellation (more than 48 hours in advance), but are retained as loyalty points / credit in our system.",
          },
        },
        {
          title: { nl: "Geldigheid van tegoed", en: "Validity of credit" },
          text: {
            nl: "Dit tegoed blijft onbeperkt geldig. U kunt dit tegoed op elk gewenst moment inzetten bij het boeken van een toekomstige behandeling of bij speciale acties/aanbiedingen.",
            en: "This credit remains valid indefinitely. You may use it at any time when booking a future treatment or during special offers.",
          },
        },
        {
          title: { nl: "Verrekening", en: "Settlement" },
          text: {
            nl: "Aanbetalingen worden verrekend met het eindbedrag van uw (laatste) behandeling.",
            en: "Deposits are deducted from the final amount of your (last) treatment.",
          },
        },
      ],
    },
    {
      id: "insurance",
      title: {
        nl: "4. Vergoedingen zorgverzekering",
        en: "4. Health insurance reimbursement",
      },
      bullets: [
        {
          title: { nl: "Facturatie & declaratie", en: "Invoicing & claims" },
          text: {
            nl: "Voor diverse huidbehandelingen (zoals acnetherapie, laserontharing e.d.) kunnen wij op verzoek een gespecificeerde factuur/behandelverklaring verstrekken die u kunt indienen bij uw zorgverzekeraar.",
            en: "For various skin treatments (such as acne therapy, laser hair removal, etc.), we can provide a detailed invoice/treatment statement on request that you may submit to your health insurer.",
          },
        },
        {
          title: {
            nl: "Eigen verantwoordelijkheid cliënt",
            en: "Client’s own responsibility",
          },
          text: {
            nl: "Het indienen van de declaratie en het controleren van uw polisvoorwaarden (en eventuele aanvullende verzekering) is de volledige eigen verantwoordelijkheid van de cliënt.",
            en: "Submitting the claim and checking your policy terms (and any supplementary insurance) is entirely the client’s responsibility.",
          },
        },
        {
          title: {
            nl: "Geen garantie op vergoeding",
            en: "No guarantee of reimbursement",
          },
          text: {
            nl: "Omdat zorgverzekeraars uiteenlopende voorwaarden hanteren en beslissingen zelfstandig nemen, kan onze kliniek geen garantie bieden dat uw behandeling daadwerkelijk (geheel of gedeeltelijk) wordt vergoed. Onze kliniek draagt hierin geen enkele aansprakelijkheid.",
            en: "Because insurers apply different conditions and make decisions independently, our clinic cannot guarantee that your treatment will be reimbursed (in full or in part). Our clinic accepts no liability in this regard.",
          },
        },
      ],
    },
    {
      id: "packages",
      title: {
        nl: "5. Kuren & pakketbehandelingen",
        en: "5. Courses & treatment packages",
      },
      bullets: [
        {
          text: {
            nl: "Op de aanschaf van behandelpakketten (bijv. kuren voor laserontharing, huidverbetering of meerdere sessies) zijn specifieke aanvullende voorwaarden van toepassing.",
            en: "Specific additional terms apply to the purchase of treatment packages (e.g. courses for laser hair removal, skin improvement, or multiple sessions).",
          },
        },
        {
          text: {
            nl: "Bij de aanschaf van een pakket ontvangt u een afzonderlijk document/overeenkomst waarin de termijnen, geldigheid en voorwaarden per kuur gedetailleerd staan beschreven.",
            en: "When purchasing a package, you will receive a separate document/agreement detailing the deadlines, validity and conditions for each course.",
          },
        },
      ],
    },
    {
      id: "aftercare",
      title: {
        nl: "6. Nazorg, instructies & aansprakelijkheid",
        en: "6. Aftercare, instructions & liability",
      },
      intro: {
        nl: "Belangrijk voor een optimaal resultaat:",
        en: "Important for an optimal result:",
      },
      bullets: [
        {
          title: { nl: "Nazorginstructies", en: "Aftercare instructions" },
          text: {
            nl: "Na afloop van de behandeling ontvangt u van onze specialist mondelinge en/of schriftelijke nazorginstructies (bijvoorbeeld met betrekking tot zonlicht, huidverzorgingsproducten, zweten, warmte/sauna).",
            en: "After treatment, our specialist will give you verbal and/or written aftercare instructions (for example regarding sunlight, skincare products, sweating, heat/sauna).",
          },
        },
        {
          title: {
            nl: "Eigen verantwoordelijkheid",
            en: "Own responsibility",
          },
          text: {
            nl: "Het strikt opvolgen van deze instructies is essentieel voor uw veiligheid en het uiteindelijke resultaat.",
            en: "Strictly following these instructions is essential for your safety and the final result.",
          },
        },
        {
          title: { nl: "Aansprakelijkheid", en: "Liability" },
          text: {
            nl: "Indien de cliënt de verstrekte nazorginstructies niet of onvolledig opvolgt, draagt de cliënt hiervoor de volledige eigen verantwoordelijkheid. De kliniek kan in geen geval aansprakelijk worden gesteld voor eventuele complicaties, bijwerkingen, verminderde resultaten of schade die het gevolg zijn van het niet-naleven van de nazorgvoorschriften.",
            en: "If the client does not follow, or only partially follows, the aftercare instructions provided, the client bears full responsibility. The clinic cannot under any circumstances be held liable for complications, side effects, reduced results or damage resulting from failure to follow the aftercare guidelines.",
          },
        },
      ],
    },
    {
      id: "privacy",
      title: {
        nl: "7. Privacy, beeldmateriaal & overige huisregels",
        en: "7. Privacy, imagery & other house rules",
      },
      bullets: [
        {
          title: { nl: "Persoonsgegevens", en: "Personal data" },
          text: {
            nl: "Wij vragen uw toestemming voor het verwerken van uw contact- en medische gegevens. Deze gegevens worden strikt vertrouwelijk en veilig opgeslagen conform de AVG-wetgeving, uitsluitend voor dossieropbouw en facturatie.",
            en: "We ask for your consent to process your contact and medical data. These data are stored strictly confidentially and securely in accordance with GDPR, solely for record-keeping and invoicing.",
          },
        },
        {
          title: { nl: "Foto's & social media", en: "Photos & social media" },
          text: {
            nl: "Indien u op de dag van de afspraak instemt met het maken van voor-en-na-foto's of beeldmateriaal van uw behandeling, geeft u tevens toestemming om deze te gebruiken voor onze zakelijke social media en website. Indien u dit niet wenst, kunt u dit op elk moment vooraf aangeven.",
            en: "If you consent on the day of your appointment to before-and-after photos or other imagery of your treatment, you also consent to their use on our business social media and website. If you do not wish this, you may indicate so at any time in advance.",
          },
        },
        {
          title: { nl: "Parkeren", en: "Parking" },
          text: {
            nl: "In de directe omgeving geldt betaald parkeren van maandag tot en met zondag tussen 09:00 en 23:00 uur. Houd rekening met extra reistijd.",
            en: "Paid parking applies in the immediate area Monday to Sunday between 09:00 and 23:00. Please allow extra travel time.",
          },
        },
      ],
    },
  ],
};
