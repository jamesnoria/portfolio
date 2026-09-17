// Navigation translations
export const navigationTranslations = {
  en: {
    skills: "Skills",
    workExperiences: "Work Experiences",
    achievements: "Languages & Certifications",
    resume: "Resume",
    contactMe: "Contact Me",
    contactMeBtn: "Contact me",
    downloadResume: "View my CV",

    // Resume Modal
    downloadResumeTitle: "View CV",
    spanish: "Spanish CV",
    english: "English CV",
    close: "Close"
  },
  es: {
    skills: "Habilidades",
    workExperiences: "Experiencias Laborales",
    achievements: "Idiomas y Certificaciones",
    resume: "Currículum",
    contactMe: "Contáctame",
    contactMeBtn: "Contáctame",
    downloadResume: "Ver mi CV",

    // Resume Modal
    downloadResumeTitle: "Ver CV",
    spanish: "CV en Español",
    english: "CV en Inglés",
    close: "Cerrar"
  }
};

// Utility function to get text in the current language
export const getText = (textObject, isSpanish) => {
  if (typeof textObject === "string") {
    return textObject;
  }
  return isSpanish ? textObject.es : textObject.en;
};

// Hook for navigation translations
export const useTranslation = isSpanish => {
  const t = key => {
    const lang = isSpanish ? "es" : "en";
    return navigationTranslations[lang][key] || key;
  };

  return {t};
};
