import type { Lang } from "@/i18n/translations";

type LocalizedString = Record<Lang, string>;

type AftercareSection = {
  id: string;
  title: LocalizedString;
  bullets: LocalizedString[];
};

export const aftercarePage: {
  title: LocalizedString;
  intro: LocalizedString[];
  sections: AftercareSection[];
  contactTitle: LocalizedString;
  contactText: LocalizedString;
  closing: LocalizedString;
} = {
  title: {
    nl: "Nazorg na Botox- en Fillerbehandelingen",
    en: "Aftercare following Botox and filler treatments",
  },
  intro: [
    {
      nl: "Deze informatie is bedoeld om u te helpen bij een goed herstel na een botox- of fillerbehandeling.",
      en: "This information is intended to help you recover well after a botox or filler treatment.",
    },
    {
      nl: "Het zorgvuldig opvolgen van deze adviezen vermindert de kans op bijwerkingen en zorgt voor een optimaal resultaat.",
      en: "Carefully following this advice reduces the chance of side effects and helps achieve an optimal result.",
    },
  ],
  sections: [
    {
      id: "botox",
      title: {
        nl: "Nazorg na een Botoxbehandeling",
        en: "Aftercare after a Botox treatment",
      },
      bullets: [
        {
          nl: "Raak het behandelde gebied de eerste 24 uur zo min mogelijk aan.",
          en: "Touch the treated area as little as possible for the first 24 hours.",
        },
        {
          nl: "Niet wrijven of masseren op de injectieplaatsen gedurende 24 uur.",
          en: "Do not rub or massage the injection sites for 24 hours.",
        },
        {
          nl: "Blijf de eerste 4 uur na de behandeling rechtop (niet liggen).",
          en: "Remain upright for the first 4 hours after treatment (do not lie down).",
        },
        {
          nl: "Vermijd intensieve lichaamsbeweging gedurende 24 uur.",
          en: "Avoid intensive exercise for 24 hours.",
        },
        {
          nl: "Gebruik de eerste 24 uur geen sauna, zonnebank of stoombad.",
          en: "Do not use a sauna, sunbed or steam bath for the first 24 hours.",
        },
        {
          nl: "Drink geen alcohol gedurende minimaal 24 uur.",
          en: "Do not drink alcohol for at least 24 hours.",
        },
        {
          nl: "Make-up mag voorzichtig worden aangebracht na ongeveer 12 uur.",
          en: "Makeup may be applied carefully after about 12 hours.",
        },
        {
          nl: "Het effect van botox begint meestal na 3–7 dagen en is optimaal na 10–14 dagen.",
          en: "The effect of botox usually begins after 3–7 days and is optimal after 10–14 days.",
        },
      ],
    },
    {
      id: "filler",
      title: {
        nl: "Nazorg na een Fillerbehandeling",
        en: "Aftercare after a filler treatment",
      },
      bullets: [
        {
          nl: "Koel het behandelde gebied indien nodig met een coldpack (niet direct op de huid).",
          en: "If needed, cool the treated area with a cold pack (not directly on the skin).",
        },
        {
          nl: "Vermijd druk, massage of wrijving op het behandelde gebied gedurende 48 uur, tenzij anders geadviseerd.",
          en: "Avoid pressure, massage or friction on the treated area for 48 hours, unless otherwise advised.",
        },
        {
          nl: "Niet sporten gedurende 24–48 uur.",
          en: "Do not exercise for 24–48 hours.",
        },
        {
          nl: "Vermijd sauna, zonnebank en extreme hitte gedurende 48 uur.",
          en: "Avoid sauna, sunbed and extreme heat for 48 hours.",
        },
        {
          nl: "Drink geen alcohol gedurende 24 uur.",
          en: "Do not drink alcohol for 24 hours.",
        },
        {
          nl: "Make-up kan meestal na 12 uur voorzichtig worden aangebracht.",
          en: "Makeup can usually be applied carefully after 12 hours.",
        },
        {
          nl: "Zwelling, roodheid of blauwe plekken zijn normaal en verdwijnen meestal binnen enkele dagen.",
          en: "Swelling, redness or bruising is normal and usually disappears within a few days.",
        },
        {
          nl: "Het uiteindelijke resultaat is zichtbaar na ongeveer 1–2 weken.",
          en: "The final result is visible after about 1–2 weeks.",
        },
      ],
    },
  ],
  contactTitle: {
    nl: "Wanneer contact opnemen?",
    en: "When to contact us?",
  },
  contactText: {
    nl: "Neem direct contact op met uw behandelaar bij hevige pijn, toenemende zwelling, verkleuring van de huid, koorts of andere klachten die u niet vertrouwt.",
    en: "Contact your practitioner immediately in case of severe pain, increasing swelling, skin discoloration, fever, or any other symptoms you are concerned about.",
  },
  closing: {
    nl: "Bewaar dit document goed en neem het mee indien u vragen heeft tijdens uw herstel.",
    en: "Keep this information and bring it with you if you have questions during your recovery.",
  },
};
