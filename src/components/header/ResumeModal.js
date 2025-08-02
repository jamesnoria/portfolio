import React, { useContext } from "react";
import { createPortal } from "react-dom";
import StyleContext from "../../contexts/StyleContext";
import "./ResumeModal.scss";

const ResumeModal = ({ show, onClose, resumeLinks }) => {
  const { isDark } = useContext(StyleContext);
  
  if (!show) return null;
  
  const modalContent = (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className={`resume-modal ${isDark ? 'dark-modal' : ''}`} onClick={e => e.stopPropagation()}>
        <h3>Download Resume</h3>
        <div className="resume-options">
          <a href={resumeLinks.spanish} target="_blank" rel="noopener noreferrer" className="resume-btn">Spanish</a>
          <a href={resumeLinks.english} target="_blank" rel="noopener noreferrer" className="resume-btn">English</a>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
  
  // Render modal in a portal to ensure it appears above everything
  return createPortal(modalContent, document.body);
};

export default ResumeModal;
