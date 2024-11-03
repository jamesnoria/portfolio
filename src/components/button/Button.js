import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, umamiEvent}) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"} data-umami-event={umamiEvent}>
        {text}
      </a>
    </div>
  );
}
