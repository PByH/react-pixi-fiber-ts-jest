import * as React from "react";
import * as ReactDOM from "react-dom";
import * as PIXI from "pixi.js";
import App from "./App";

window.PIXI = PIXI;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
