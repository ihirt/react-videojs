import React from "react";
import { render } from "react-dom";
import Videojs from "./video.js";

// from https://videojs.com/guides/react/

const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 800,
  height: 450,
  controls: true,
  sources: [
    {
      //src: '//vjs.zencdn.net/v/oceans.mp4',
      /*
      src: "http://techslides.com/demos/sample-videos/small.mp4",
      type: "video/mp4",
      */
      src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      //type: "application/x-mpegURL",
    },
  ],
};

const App = () => (
  <div>
    <Videojs {...videoJsOptions} />
  </div>
);

render(<App />, document.getElementById("root"));
