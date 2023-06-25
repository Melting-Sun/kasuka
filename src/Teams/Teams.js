import React from "react";
import "./Teams.css";
import Teamsbox from "./Teamsbox";

function Teams(props) {
  return (
    <>
      <div className="teams-header-wrapper">
        <div className="teams-title">
          <p className="teams-title-p">teams</p>
        </div>

        <div className="teams-header">
          <h2 className="teams-header-h">check out our team</h2>
        </div>
      </div>

      <div className="teams-main-container">
        <Teamsbox
          image={"/img/team-1.jpg"}
          name={"walter white"}
          role={"cook"}
        />
        <Teamsbox
          image={"/img/team-1.jpg"}
          name={"walter white"}
          role={"cook"}
        />
        <Teamsbox
          image={"/img/team-1.jpg"}
          name={"walter white"}
          role={"cook"}
        />
        <Teamsbox
          image={"/img/team-1.jpg"}
          name={"walter white"}
          role={"cook"}
        />
      </div>
    </>
  );
}

export default Teams;
