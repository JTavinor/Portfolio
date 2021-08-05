import React from "react";
import { HiChevronDoubleDown } from "react-icons/hi";

function LandingCard(props) {
  return (
    <>
      <div className="outerLandingCont">
        <div
          className="darkInnerContainer"
          style={{ justifyContent: "center", height: "100%" }}
        >
          <div style={{ justifySelf: "center", alignSelf: "center" }}>
            <h1 className="headings mainHeader ">Hi, I'm Joe Tavinor</h1>
            <h2 className="subHeader headings" style={{ fontSize: "2.4rem" }}>
              I'm a developer based in London
            </h2>
          </div>
          <div
            className="downChevron"
            style={{ justifySelf: "flex-end", marginTop: "10%" }}
          >
            {/* <h3>Scroll down to find out more</h3>
            <a href="#about">
              <HiChevronDoubleDown size="50px" />
            </a> */}
          </div>
        </div>
      </div>
      <div className="background1"></div>
    </>
  );
}

export default LandingCard;
