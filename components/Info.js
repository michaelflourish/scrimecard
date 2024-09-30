import React from 'react';

function Info() {
  return (
    <div className="info">
      <img src="./image/profilepics.jpeg" alt="Profile" className="profile-pic" />
      <h1 className="info--heading">Michael Flourish</h1>
      <p className="info--title">Software Developer</p>
      <p className="info--web">michaelflourish.com</p>
      <div className="buttons">
        <button className="email-btn">
          <i className="fas fa-envelope"></i> Email
        </button>
        <button className="linkedin-btn">
          <i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/olanrewaju-afolayan-9ba19094/"> LinkedIn </a>
        </button>
      </div>
    </div>
  );
}

export default Info;
