import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

function Project({ description, image, repo, repo2, title, url }) {
  return (
    <div className="projectCont">
      <div className="project">
        <h3 className="subSubHeader">{title}</h3>
        {image && (
          <a href={url} target="_blank">
            <img src={image} width="100%" height="220px" />
          </a>
        )}
        <p>{description}</p>
        <ul style={{ alignSelf: "flex-start" }}>
          {url && (
            <li>
              <a href={url} className="listAnchor" target="_blank">
                <AiOutlineGlobal height="100%" />{" "}
                <p style={{ margin: "0 0 0 5px " }}>Visit Site</p>
              </a>
            </li>
          )}
          <li>
            <a href={repo} className="listAnchor" target="_blank">
              <AiFillGithub height="100%" />{" "}
              <p style={{ margin: "0 0 0 5px " }}>Github Repo</p>
            </a>
          </li>
          {repo2 && (
            <li>
              <a href={repo2} className="listAnchor" target="_blank">
                <FaGithubSquare height="100%" />{" "}
                <p style={{ margin: "0 0 0 5px " }}>Github Repo (Backend)</p>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Project;
