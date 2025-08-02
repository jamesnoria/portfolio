import React, {useContext, useState} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import ResumeModal from "../../components/header/ResumeModal";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {useTranslation, getText} from "../../utils/translations";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {isSpanish} = useContext(LanguageContext);
  const {t} = useTranslation(isSpanish);
  const [showResumeModal, setShowResumeModal] = useState(false);
  
  const resumeLinks = {
    spanish: "https://drive.google.com/file/d/1gZXjhkeDUdOrLEswBtb0EO3QLZZYigff/view?usp=sharing", // Replace with Spanish resume link
    english: "https://drive.google.com/file/d/1gZXjhkeDUdOrLEswBtb0EO3QLZZYigff/view?usp=sharing"  // Replace with English resume link
  };

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {getText(greeting.title, isSpanish)}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {getText(greeting.subTitle, isSpanish)}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text={t('contactMeBtn')}
                  href="#contact"
                  umamiEvent="contact me button"
                />
                {greeting.resumeLink && (
                  <Button
                    text={t('downloadResume')}
                    onClick={() => setShowResumeModal(true)}
                    umamiEvent="download resume button"
                    className="download-link-button"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
        <ResumeModal
          show={showResumeModal}
          onClose={() => setShowResumeModal(false)}
          resumeLinks={resumeLinks}
        />
      </div>
    </Fade>
  );
}
