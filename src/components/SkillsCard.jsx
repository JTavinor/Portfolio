import React from "react";
import { HiChevronDoubleDown } from "react-icons/hi";

import {
  DiReact,
  DiPython,
  DiMongodb,
  DiCss3Full,
  DiSass,
} from "react-icons/di";
import { SiRedux, SiJavascript } from "react-icons/si";
import { FaNode, FaGitSquare, FaGithubSquare } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

function SkillsCard(props) {
  return (
    <>
      {" "}
      <div className="darkOuterCont" id="skills">
        <div className="brightInnerCont">
          <h1 className="header">Coding Skills</h1>
          <h2 className="subHeader" style={{ alignSelf: "flex-start" }}>
            These are my current skills in coding, as well as courses I have
            completed
          </h2>
          <div className="skillsCont">
            <div>
              <ul>
                <li className="skill">
                  <DiReact height="100%" style={{ paddingRight: "8px" }} />{" "}
                  React
                </li>
                <li className="skill">
                  <SiRedux height="100%" style={{ paddingRight: "8px" }} />{" "}
                  Redux
                </li>
                <li className="skill">
                  <FaNode height="100%" style={{ paddingRight: "8px" }} /> Node
                </li>
                <li className="skill">
                  <DiPython height="100%" style={{ paddingRight: "8px" }} />{" "}
                  Python
                </li>
                <li className="skill">
                  <DiMongodb height="100%" style={{ paddingRight: "8px" }} />{" "}
                  MongoDB
                </li>

                <li className="skill">
                  <FaGithubSquare
                    height="100%"
                    style={{ paddingRight: "8px" }}
                  />{" "}
                  Git
                </li>
                <li className="skill">
                  <SiJavascript height="100%" style={{ paddingRight: "8px" }} />{" "}
                  Javascript
                </li>
                <li className="skill">
                  <AiFillHtml5 height="100%" style={{ paddingRight: "8px" }} />{" "}
                  HTML
                </li>
                <li className="skill">
                  <DiCss3Full height="100%" style={{ paddingRight: "8px" }} />{" "}
                  CSS
                </li>
                <li className="skill">
                  <DiSass height="100%" style={{ paddingRight: "8px" }} /> Sass
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h3 className="courseHeader">Mastering React</h3>
                  <p className="coursePara">Code With Mosh</p>
                </li>
                <li>
                  <h3 className="courseHeader">The Ultimate Redux Course</h3>
                  <p className="coursePara">Code With Mosh</p>
                </li>
                <li>
                  <h3 className="courseHeader">The Complete Node.js Course</h3>
                  <p className="coursePara">Code With Mosh</p>
                </li>
                <li>
                  <h3 className="courseHeader">The Ultimate Git Course</h3>
                  <p className="coursePara">Code With Mosh</p>
                </li>
                <li>
                  <h3 className="courseHeader">The Complete Python Course</h3>
                  <p className="coursePara">Udemy</p>
                </li>
                <li>
                  <h3 className="courseHeader">
                    The Ultimate React Native Course
                  </h3>
                  <p className="coursePara">Code With Mosh</p>
                </li>
                <li>
                  <h3 className="courseHeader">Ultimate Javascript Mastery</h3>
                  <p className="coursePara">Code With Mosh</p>
                </li>
              </ul>
            </div>
          </div>
          {/* <a href="Joseph Tavinor CV.pdf" download className="downloadCVLight">
          Download CV
        </a>
        <a href="#contact">
          <HiChevronDoubleDown size="80px" />
        </a> */}
        </div>
      </div>
      <div className="background4"></div>
    </>
  );
}

export default SkillsCard;
