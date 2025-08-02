import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {useTranslation} from "../../utils/translations";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";
import ResumeModal from "./ResumeModal";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {isSpanish} = useContext(LanguageContext);
  const {t} = useTranslation(isSpanish);
  const [showResumeModal, setShowResumeModal] = useState(false);
  
  const resumeLinks = {
    spanish: "https://drive.google.com/file/d/1gZXjhkeDUdOrLEswBtb0EO3QLZZYigff/view?usp=sharing", // Replace with Spanish resume link
    english: "https://drive.google.com/file/d/1gZXjhkeDUdOrLEswBtb0EO3QLZZYigff/view?usp=sharing"  // Replace with English resume link
  };
  
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" data-umami-event="skills tab">
                {t('skills')}
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" data-umami-event="experience tab">
                {t('workExperiences')}
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewResume && (
            <li>
              <button className="resume-popup-btn" onClick={() => setShowResumeModal(true)}>
                {t('resume')}
              </button>
            </li>
          )}
          <li>
            <a href="#contact" data-umami-event="contact me tab">{t('contactMe')}</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="toggle-container">
              <ToggleSwitch />
              <LanguageToggle />
            </a>
          </li>
        </ul>
        <ResumeModal
          show={showResumeModal}
          onClose={() => setShowResumeModal(false)}
          resumeLinks={{
            spanish: "https://drive.google.com/file/d/1gZXjhkeDUdOrLEswBtb0EO3QLZZYigff/view?usp=sharing", // Replace with Spanish resume link
            english: "https://drive.google.com/file/d/1gZXjhkeDUdOrLEswBtb0EO3QLZZYigff/view?usp=sharing"  // Replace with English resume link
          }}
        />
      </header>
    </Headroom>
  );
}
export default Header;
