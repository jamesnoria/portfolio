import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getText} from "../../utils/translations";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const {isSpanish} = useContext(LanguageContext);
  
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">{getText(workExperiences.title, isSpanish)}</h1>
              <h3 className="experience-heading-sub-text">
                {getText(workExperiences.subtitle, isSpanish)}
              </h3>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: getText(card.date, isSpanish),
                        companylogo: card.companylogo,
                        role: getText(card.role, isSpanish),
                        descBullets: getText(card.descBullets, isSpanish)
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
