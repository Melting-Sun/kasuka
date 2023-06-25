import React from "react";
import "./ContactBox.css";

function ContactBox(props) {
  return (
    <div className="ContactBox-container">
      <div className="Contact-box-icon">
        <div className="inner-icon">{props.img}</div>
      </div>
      <div>
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
      </div>
    </div>
  );
}

export default ContactBox;
