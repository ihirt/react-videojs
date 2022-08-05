import React from "react";
import { render } from "react-dom";
import Videojs from "./video.js";

// from https://videojs.com/guides/react/

const App = () => (
  <div id="tvPlayer">
    <Videojs />
  </div>
);

render(<App />, document.getElementById("root"));
