import React, {useState, useEffect, useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import "./LanguageNotification.scss";

const LanguageNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {isSpanish} = useContext(LanguageContext);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const hasSeenNotification = localStorage.getItem(
      "hasSeenLanguageNotification"
    );

    if (!hasSeenNotification) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem("hasSeenLanguageNotification", "true");
      }, 9000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
        window.removeEventListener("resize", checkMobile);
      };
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenLanguageNotification", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="language-notification">
      <div className="notification-content">
        <span className="notification-icon" aria-hidden="true">
          🌐
        </span>
        <div className="notification-text">
          <strong>
            {isSpanish ? "Idioma detectado" : "Language detected"}
          </strong>
          <p>
            {isSpanish
              ? isMobile
                ? "Mostramos el sitio en español. Puedes cambiar a EN desde el menú ☰."
                : "Mostramos el sitio en español. Puedes cambiar a EN desde el switch superior."
              : isMobile
              ? "We are showing the site in English. You can switch to ES from the ☰ menu."
              : "We are showing the site in English. You can switch to ES from the top toggle."}
          </p>
          <span className="notification-toggle-hint">
            {isSpanish ? "ES ↔ EN" : "EN ↔ ES"}
          </span>
        </div>
        <button
          className="notification-close"
          onClick={handleClose}
          aria-label={isSpanish ? "Cerrar aviso" : "Close notification"}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default LanguageNotification;
