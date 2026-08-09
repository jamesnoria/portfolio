import React, {useContext} from "react";
import {createPortal} from "react-dom";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {useTranslation} from "../../utils/translations";
import "./ResumeModal.scss";

const ResumeModal = ({show, onClose, resumeLinks}) => {
  const {isDark} = useContext(StyleContext);
  const {isSpanish} = useContext(LanguageContext);
  const {t} = useTranslation(isSpanish);

  if (!show) return null;

  const modalContent = (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div
        className={`resume-modal ${isDark ? "dark-modal" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          className="resume-close-icon"
          onClick={onClose}
          aria-label={t("close")}
        >
          ×
        </button>
        <h3>{t("downloadResumeTitle")}</h3>
        <div className="resume-options">
          <a
            href={resumeLinks.spanish}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            {t("spanish")}
            <span className="download-symbol" aria-hidden="true">
              ↓
            </span>
          </a>
          <a
            href={resumeLinks.english}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            {t("english")}
            <span className="download-symbol" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </div>
    </div>
  );

  // Render modal in a portal to ensure it appears above everything
  return createPortal(modalContent, document.body);
};

export default ResumeModal;
