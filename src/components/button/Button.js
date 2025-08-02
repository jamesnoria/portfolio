import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, umamiEvent, onClick}) {
  if (onClick) {
    return (
      <div className={className}>
        <button className="main-button" onClick={onClick} data-umami-event={umamiEvent}>
          {text}
        </button>
      </div>
    );
  }
  
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"} data-umami-event={umamiEvent}>
        {text}
      </a>
    </div>
  );
}
