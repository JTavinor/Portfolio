import React from "react";

function ExperienceCard(props) {
  return (
    <div className="brightOuterCont">
      <div className="darkInnerContainer">
        <h1>Experience</h1>
        <ul>
          <li>
            <h2>Rannoch Adventure Ltd.</h2>
            <h3>Boat Technician</h3>
            <p>
              Building high performance ocean rowing boats. I initially started
              for one week painting the new offices. However despite not knowing
              anything about Boat Building I was taken on to help out around the
              workshop. From there I quickly established myself as an integral
              member of the team, and are now responsible for building the boats
              from start to finish, including making high performance oars. I
              have now moved more into fitting the electronics aboard the board.
            </p>
            <p>September 2018 - Present</p>
          </li>
          <li>
            <h2>Deliveroo</h2>
            <h3>Food Courier</h3>
            <p>
              After finishing university I wanted to take a year to experience a
              different culture, which resulted in me moving to Germany. The
              flexible hours, alongside travelling around the city meant
              Deliveroo was the perfect opportuniy to
            </p>
            <p>September 2017 - September 2018</p>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
