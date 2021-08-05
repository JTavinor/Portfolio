import React from "react";
import Project from "./Project";

import { HiChevronDoubleDown } from "react-icons/hi";

import dengie from "C:/Users/Paul/Portfolio/src/assets/DengieTakeaway.png";
import words from "C:/Users/Paul/Portfolio/src/assets/WordGame.png";
import tax from "C:/Users/Paul/Portfolio/src/assets/Tax.png";

function ProjectsCard(props) {
  return (
    <>
      <div className="brightOuterCont" id="projects">
        <div className="darkInnerContainer">
          <h1 className="header">Projects</h1>
          <h2 className="subHeader" style={{ alignSelf: "flex-start" }}>
            Here are some projects I have completed using React, Node and Python
          </h2>
          <div className="grid-container">
            <Project
              description="A takeaway app I made using React, Redux and Node with MongoDB. 
            I utilised many new skills, including using Redux to handle all API calls and to pass 
            data around the app. I used Modals to allow users to choose different options and quantities.
            The app is fully optimised for all different screen sizes. For the address form I used Formik along 
            with Yup for validation. All the data is stored on MongoDB, and a completed order is posted to the database.
            To improve user experience I used Redux Persist to keep the users basket, added loading icons for 
            pending API calls and used error screens."
              image={dengie}
              repo="https://github.com/JTavinor/DengieTakeawayApp"
              repo2="https://github.com/JTavinor/DengieTakeawayAppApi"
              title="Dengie Takeaways"
              url="https://jt-dengie-takeaways.herokuapp.com/"
            />
            <Project
              description="A word association game that gives users 3 lives or 90 seconds 
          to guess as many associated words as possible. Users then have the option to submit their score to
          the leaderboard (stored on mongoDB). Users can create an account, which is verified and authenticated
          using JWTs and secured using salting and hashing. With an account, users can view and delete their scores,
          as well as seeing all their wrong answers along with potential answers. Styled with Bootstrap."
              image={words}
              repo="https://github.com/JTavinor/synonym_game"
              repo2="https://github.com/JTavinor/synonym-game-backend"
              title="Word Association Game"
              url="http://jtwordgame.herokuapp.com/"
            />
            <Project
              description="A coding challenge where I had to take tax details (Tax brackets,personal allowance etc.) 
            and create a calculator to allow users to either calculate their take home pay from a salary, 
            or what they should ask as a salary to get a desired take home pay. Created using React."
              image={tax}
              repo="https://github.com/JTavinor/Tax-calculator"
              title="Tax calculator"
            />
            <Project
              description="A coding challenge where I had to take two massive CSV files containing user and company
          data. Firstly I had to find the two users with the most number of jobs liked by both.
          Secondly I had to find the two companies with the highest number of users that liked a job at both
          companies. To do this I used javascript and converted the CSV files to JSON in order to manipulate
          them easier. This was a great challenge as it really strengthened my understanding of async/await.
          Created with Javascript."
              repo="https://github.com/JTavinor/otta"
              title="Best matching companies/users."
            />
            <Project
              description="A program using Python to take two csv files (Sales and work shifts) to calculate
          a shops best and worst hours (Labour as a percentage of sales). I used Regex to extract the
          data we needed in a uniform structure before processing the data as needed."
              repo="https://github.com/JTavinor/csv_project"
              title="Labour efficiency calculator"
            />
            <Project
              description="A python program that allows users to add books to, maniuplate, and view their library
          using JSON. Contains checks to prevent breaking edge cases such as if a user tries to delete
          a book that shares a name with another."
              repo="https://github.com/JTavinor/json_library_project"
              title="JSON book library"
            />
          </div>
          <a href="Joseph Tavinor CV.pdf" download className="downloadCVDark">
            Download CV
          </a>
          {/* <a href="#skills">
          <HiChevronDoubleDown size="80px" />
        </a> */}
        </div>
      </div>
      <div className="background3"></div>
    </>
  );
}

export default ProjectsCard;
