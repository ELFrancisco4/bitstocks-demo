import React from "react";
import "./navbar-design.css";
import ReactLogo from "./bitstocks.svg";
function NavBar() {
  const controlLoginHover = (e) => {
    e.target.style.background = "#fff";
    e.target.style.color = "#599ce9";
  };

  const defaultState = (e) => {
    e.target.style.background = "#599ce9";
    e.target.style.color = "#fff";
  };

  const controlRegisterHover = (e) => {
    e.target.style.background = "#fff";
    e.target.style.color = "#ccc";
  };

  const defaultState2 = (e) => {
    e.target.style.background = "#ccc";
    e.target.style.color = "#fff";
  };
  return (
    <div className="container">
      <div className="flex-box">
        <button
          type="button"
          id="log-in"
          onMouseEnter={controlLoginHover}
          onMouseLeave={defaultState}
        >
          Login
        </button>
        <button
          type="button"
          id="register"
          onMouseEnter={controlRegisterHover}
          onMouseLeave={defaultState2}
        >
          Register
        </button>
        <div>
          <a className="links" href="/">
            Media
          </a>
        </div>
        <div>
          <a className="links" href="/">
            Gravity
          </a>
        </div>
        <div>
          <a className="links" href="/">
            About
          </a>
        </div>
      </div>
      <div className="flexbox1">
        <img className="logo" height={40} src={ReactLogo} alt={ReactLogo} />
      </div>
      ;
    </div>
  );
}

export default NavBar;
