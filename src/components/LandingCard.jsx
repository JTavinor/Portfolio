import React from "react";
import { HiChevronDoubleDown } from "react-icons/hi";

function LandingCard(props) {
  return (
    <div className="outerLandingCont">
      <div className="innerContainer">
        <div className="headings">
          <h1 className="mainHeader">Hi, I'm Joe Tavinor</h1>
          <h2 className="subHeader">I'm a developer based in London</h2>
        </div>
        <div className="downTown">
          <h3>Scroll down to see my projects and more</h3>
          <HiChevronDoubleDown size="100px" />
        </div>
      </div>
    </div>
  );
}

export default LandingCard;
