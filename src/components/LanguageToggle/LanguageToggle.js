import React, {useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import "./LanguageToggle.scss";

const LanguageToggle = () => {
  const {isSpanish, changeLanguage} = useContext(LanguageContext);

  return (
    <label className="language-switch">
      <input
        type="checkbox"
        aria-label={isSpanish ? "Cambiar a inglés" : "Switch to Spanish"}
        checked={isSpanish}
        onChange={changeLanguage}
      />
      <span className="language-slider round">
        <span className="language-label">{isSpanish ? "ES" : "EN"}</span>
      </span>
    </label>
  );
};

export default LanguageToggle;
