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
      <div className="result-container">
        <div className="result-item">
          <h2>Short Selector</h2>
          <textarea
            rows={4}
            cols={100}
            type="text"
            name="full-selector"
            className="output-result"
            value={shortSelector}
            readOnly
          />
          <button onClick={(e) => copyOnClipboard(shortSelector)}>Copy</button>
        </div>
        <div className="result-item">
          <h2> JS Selector</h2>
          <textarea
            rows={4}
            cols={100}
            type="text"
            name="full-selector"
            className="output-result"
            value={querySelector}
            readOnly
          />
          <button onClick={(e) => copyOnClipboard(querySelector)}>Copy</button>
        </div>
      </div>
    </div>
  );
}
