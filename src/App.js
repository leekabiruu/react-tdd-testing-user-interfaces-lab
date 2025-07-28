import React from "react";

function App() {
  return (
    <div className="portfolio">
      <h1>Hi, I'm John Doe</h1>

      <img
        src="profile.jpg"
        alt="Profile photo of John Doe"
        className="profile-image"
      />

      <h2>About Me</h2>

      <p className="bio">
        I'm a passionate web developer with expertise in React and JavaScript. I
        love building accessible, user-friendly applications that solve real
        problems.
      </p>

      <div className="links">
        <a
          href="https://github.com/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;
