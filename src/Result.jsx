import React, { useEffect, useState } from "react";
import "./App.css";

export default function Result({ result, showSnack }) {
  const [shortSelector, setShortSelector] = useState("");
  const [querySelector, setQuerySelector] = useState("");

  useEffect(() => {
    setShortSelector(result);
    setQuerySelector(`document.querySelector("${result}")`);
  }, [result]);

  const copyOnClipboard = (toCopy) => {
    navigator.clipboard.writeText(toCopy);
    showSnack("Selecteur copié !");
  };

  return (
    <div className="container">
      <h1>Result</h1>
      <div className="result-display">
        <div className="result-item">
          <input
            type="text"
            className="input-result"
            readOnly
            value={shortSelector}
          />
          <button onClick={(e) => copyOnClipboard(shortSelector)}>Copy</button>
        </div>
        <div className="result-item">
          <input
            type="text"
            className="input-result"
            readOnly
            value={querySelector}
          />
          <button onClick={(e) => copyOnClipboard(querySelector)}>Copy</button>
        </div>
      </div>
    </div>
  );
}
