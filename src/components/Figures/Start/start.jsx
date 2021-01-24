import React from "react";
import "./styles.scss";

const StartBtn = ({ onPlay, setOnPlay }) => (
  <div>
    <button
      className={`start ${onPlay ? " noDisplay" : " inlineDisplay"}`}
      onClick={() => setOnPlay(true)}
    >
      START
    </button>
  </div>
);

export default StartBtn;
