import React from "react";

export default function Info(){
  return(
    <div>
      <img src="./images/photo.jpeg" className="my-photo" alt="Profile"/>
      <h2 className="my-name">Tejasav Singh</h2>
      <h4 className="field">Frontend Developer</h4>

      <div className="button-container">
        <button className="mail">
          <img src="./images/icon.png" alt="Email Icon" />
          Email
        </button>
        <button className="linkedin">
          <img src="./images/Vector.png" alt="LinkedIn Icon"/>
          LinkedIn
        </button>
      </div>
    </div>
  )
}
