import React from "react";
import "./navbar-design.css";

function BodyComponent() {
  return (
    <div>
      <h2>Gravity</h2>
      <h3>Consciously Connected</h3>
      <p>
        For now, Gravity is the easiest place to buy, sell and store crypto in
        the UK and Europe.
      </p>
      <p>
        But we've got big plans to disrupt the world of finance as you know
        it...
      </p>
      <p>And it all starts with our iOS app, now in pre-order. </p>
      <p>
        Capital at risk.{" "}
        <a className="invest" href="/">
          Invest aware
        </a>
      </p>
      <button className="ios-btn">Pre-order iOS app</button>

      <div class="banner-bg">
        <a
          href="#video-popup"
          class="open-popup-link"
          data-effect="mfp-zoom-in"
        >
          <div>
            <img height={50}
              src="https://www.bitstocks.com/hubfs/Bitstocks%20-%20July%202019/Images/play-arrow.svg"
              
            ></img>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BodyComponent;
