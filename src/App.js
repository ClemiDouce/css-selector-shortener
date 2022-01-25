import React, { useState } from "react";
import "./App.css";
import Result from "./Result";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

export default function App() {
  const [selector, setSelector] = useState("");
  const [result, setResult] = useState("");
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const handleClickEvent = (message) => {
    setOpen(true);
    setSnackMessage(message);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    if (selector === "") {
      setResult("");
    } else {
      let tab_selector = selector.split(" > ");
      let final = "";
      for (const element of tab_selector.reverse()) {
        if (element.includes(".") || element.includes("#")) {
          final = `${element} ${final}`;
          break;
        } else {
          final = `> ${element}`;
        }
      }
      setResult(final);
    }
  };

  return (
    <div className="App">
      <h1>Selector Shortener</h1>
      <div className="container">
        <form onSubmit={onInputSubmit}>
          <textarea
            rows={4}
            cols={100}
            type="text"
            name="full-selector"
            id="selector-input"
            value={selector}
            onChange={(e) => setSelector(e.target.value)}
          />
          <button type="submit">Make It 🩳</button>
        </form>
      </div>
      {result !== "" && <Result result={result} showSnack={handleClickEvent} />}
      <Snackbar
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
        open={open}
        autoHideDuration={1000}
        message={snackMessage}
        onClose={handleToClose}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleToClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
