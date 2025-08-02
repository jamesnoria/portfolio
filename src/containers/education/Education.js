import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";
import {getText} from "../../utils/translations";

export default function Education() {
  const {isSpanish} = useContext(LanguageContext);
  
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
                <div className="education-heading">
          <h1 className="education-heading-text">{getText(educationInfo.title, isSpanish)}</h1>
          <h3 className="education-heading-sub-text">
            {getText(educationInfo.subtitle, isSpanish)}
          </h3>
        </div>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
