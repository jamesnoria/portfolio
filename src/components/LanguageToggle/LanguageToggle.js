import React, {useState, useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import "./LanguageToggle.scss";

const LanguageToggle = () => {
  const {isSpanish} = useContext(LanguageContext);
  const [isChecked, setChecked] = useState(isSpanish);
  const languageContext = useContext(LanguageContext);

  return (
    <label className="language-switch">
      <input
        type="checkbox"
        checked={isSpanish}
        onChange={() => {
          languageContext.changeLanguage();
          setChecked(!isChecked);
        }}
      />
      <span className="language-slider round">
        <span className="flag-emoji">{isChecked ? "🇪🇸" : "🇺🇸"}</span>
      </span>
    </label>
  );
};

export default LanguageToggle;
