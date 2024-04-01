export const PDF_TO_AUDIO_STAGES = {
  UPLOAD_PDF: "UPLOAD_PDF",
  PREVIEW_PDF: "PREVIEW_PDF",
};

export const LANGUAGES = [
  {
    name: "English",
    variances: [
      {
        type: "AMERICAN",
        name: "American English 1",
        lang: "en-US",
        gender: "MALE",
        speaker: "Alex",
      },
      {
        type: "AMERICAN",
        name: "American English 2",
        lang: "en-US",
        gender: "MALE",
        speaker: "Fred",
      },
      {
        type: "AMERICAN",
        name: "American English - Female",
        lang: "en-US",
        gender: "FEMALE",
        speaker: "Samantha",
      },
      {
        type: "AMERICAN",
        name: "American English - Female 2",
        lang: "en-US",
        gender: "FEMALE",
        speaker: "Victoria",
      },
      {
        type: "BRITISH",
        name: "British English",
        lang: "en-GB",
        gender: "MALE",
        speaker: "Daniel",
      },
      {
        type: "SCOTISH",
        name: "Scotish English",
        lang: "en-SCOTLAND",
        speaker: "Fiona",
        gender: "FEMALE",
      },
      {
        type: "AUSTRALIAN",
        name: "Australian English",
        lang: "en-AU",
        speaker: "Karen",
        gender: "FEMALE",
      },
      {
        type: "INDIAN",
        name: "Indian English",
        gender: "MALE",
        lang: "en-IN",
        speaker: "Rishi",
      },
      {
        type: "INDIAN",
        name: "Indian English - Female",
        gender: "FEMALE",
        lang: "en-IN",
        speaker: "Veena",
      },
    ],
  },
  {
    name: "Italian",
    variances: [
      {
        type: "ITALIAN",
        name: "Original Italian 1",
        speaker: "Alice",
        lang: "it-IT",
        gender: "FEMALE",
      },
      {
        type: "ITALIAN",
        name: "Original Italian 2",
        speaker: "Luca",
        lang: "it-IT",
        gender: "MALE",
      },
    ],
  },
  {
    name: "French",
    variances: [
      {
        type: "CANADIAN",
        name: "Canadian French",
        speaker: "Amelie",
        gender: "FEMALE",
        lang: "fr-CA",
      },
      {
        type: "FRENCH",
        name: "Original French",
        speaker: "Thomas",
        gender: "MALE",
        lang: "fr-FR",
      },
    ],
  },
  {
    name: "Spanish",
    type: "SPANISH",
    variances: [
      {
        type: "AR",
        name: "Argentine",
        gender: "MALE",
        lang: "es-AR",
        speaker: "Diego",
      },
      {
        type: "SPANISH",
        name: "Original Spanish",
        gender: "MALE",
        lang: "es-ES",
        speaker: "Jorge",
      },
      {
        type: "SPANISH",
        name: "Original Spanish - Female",
        gender: "FEMALE",
        lang: "es-ES",
        speaker: "Monica",
      },
      {
        type: "SPANISH",
        name: "Mexican Spanish 1",
        gender: "FEMALE",
        lang: "es-MX",
        speaker: "Juan",
      },
      {
        type: "SPANISH",
        name: "Mexican Spanish 2",
        gender: "FEMALE",
        lang: "es-MX",
        speaker: "Paulina",
      },
    ],
  },
  {
    name: "Portuguese",
    type: "PORTGUESE",
    variances: [
      {
        type: "PORTUGUESE",
        name: "Original Portuguese",
        gender: "FEMALE",
        lang: "pt-PT",
        speaker: "Joana",
      },
      {
        type: "BRAZILIAN",
        name: "Brazilian Portuguese",
        gender: "FEMALE",
        lang: "pt-BR",
        speaker: "Luciana",
      },
    ],
  },
  {
    name: "HINDU",
    type: "Hindu",
    variances: [
      {
        type: "HINDU",
        name: "Indian Hindu",
        gender: "FEMALE",
        lang: "hi-IN",
        speaker: "Lekha",
      },
    ],
  },
  {
    name: "Finnish",
    type: "FINNISH",
    variances: [
      {
        type: "FINNISH",
        name: "Finish",
        gender: "MALE",
        lang: "fi-FI",
        speaker: "Satu",
      },
    ],
  },
  {
    name: "Chineese",
    type: "CHINEESE",
    variances: [
      {
        type: "CHINEESE",
        name: "Chineese",
        gender: "MALE",
        lang: "zh-CN",
        speaker: "Ting-Ting",
      },
    ],
  },
];

export const WEB_TO_AUDIO = "WEB_TO_AUDIO";
export const WEB_TO_PDF = "WEB_TO_PDF";
export const PDF_TO_AUDIO = "PDF_TO_AUDIO";
export const AUDIO_TO_PDF = "AUDIO_TO_PDF";

export const PROCESSING_STAGES = {
  CHOOSE_TOOL: "CHOOSE_TOOL",
  WEB_TO_AUDIO,
  WEB_TO_PDF,
  PDF_TO_AUDIO,
  AUDIO_TO_PDF,
};

export const TOOLSLIST = [
  {
    name: "Webpage-to-Audio",
    url: "c",
    action: WEB_TO_AUDIO,
  },
  { name: "Webpage-to-PDF", url: "c", action: WEB_TO_PDF },
  { name: "PDF-to-Audio", url: "c", action: PDF_TO_AUDIO },
  { name: "Audio-to-PDF", url: "c", action: AUDIO_TO_PDF },
];

export const STATUSES = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  DATA: "DATA",
  SUCCESS: "SUCCESS",
  NULL: "NULL",
};
