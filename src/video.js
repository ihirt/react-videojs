// taken from https://github.com/videojs/video.js/blob/master/docs/guides/react.md
import React from "react";
import videojs from "video.js";

export default class Videojs extends React.Component {
  options = {
    autoplay: false,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    //width: 800,
    //height: 450,
    fluid: true,
    controls: true,
  };

  onPlayerReady() {
    // set source dynamically
    console.log("onPlayerReady setting source");
    this.player.src({
      src: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",
      //src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
      type: "application/x-mpegURL",
    });
    this.player.play().catch((e) => {
      console.error("caught", e);
    });
    console.log("this %o, %o", this, this.player.hls);
  }

  componentDidMount() {
    // instantiate video.js
    //this.player = videojs(this.videoNode, this.props, this.onPlayerReady.bind(this));
    this.player = videojs("nyPlayer", this.options);
    this.player.on("ready", this.onPlayerReady.bind(this));

    console.log("node", this.videoNode, this);
    if (this.videoNode) {
      this.videoNode.setAttribute("webkit-playsinline", true);
      this.videoNode.setAttribute("playsinline", true);
    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    console.log("render");
    return (
      <div data-vjs-player>
        <video id="nyPlayer" ref={(node) => (this.videoNode = node)} className="video-js" />
      </div>
    );
  }
}
