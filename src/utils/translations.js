// Navigation translations
export const navigationTranslations = {
  en: {
    skills: "Skills",
    workExperiences: "Work Experiences", 
    resume: "Resume",
    contactMe: "Contact Me",
    contactMeBtn: "Contact me",
    downloadResume: "Download my resume",
    
    // Resume Modal
    downloadResumeTitle: "Download Resume",
    spanish: "Spanish",
    english: "English", 
    close: "Close",
  },
  es: {
    skills: "Habilidades",
    workExperiences: "Experiencias Laborales",
    resume: "Currículum", 
    contactMe: "Contáctame",
    contactMeBtn: "Contáctame",
    downloadResume: "Descargar mi currículum",
    
    // Resume Modal
    downloadResumeTitle: "Descargar Currículum",
    spanish: "Español",
    english: "Inglés",
    close: "Cerrar",
  }
};

// Utility function to get text in the current language
export const getText = (textObject, isSpanish) => {
  if (typeof textObject === 'string') {
    return textObject;
  }
  return isSpanish ? textObject.es : textObject.en;
};

// Hook for navigation translations
export const useTranslation = (isSpanish) => {
  const t = (key) => {
    const lang = isSpanish ? 'es' : 'en';
    return navigationTranslations[lang][key] || key;
  };
  
  return { t };
};
