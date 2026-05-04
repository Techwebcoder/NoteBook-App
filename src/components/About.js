import React from "react";

const About = (props) => {
  const style = {
    color: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div className="container my-3" style={style}>
      <h2>About iNotebook</h2>

      <p>
        iNotebook is a secure and efficient note-taking web application built
        using the MERN stack (MongoDB, Express, React, Node.js).
      </p>

      <h4>✨ Features</h4>
      <ul>
        <li>Create, edit, and delete notes easily</li>
        <li>User authentication (Login & Signup)</li>
        <li>Each user has their own private notes</li>
        <li>Dark & Light mode support</li>
        <li>Responsive and user-friendly UI</li>
      </ul>

      <h4>🔒 Security</h4>
      <p>
        All notes are securely stored and linked to individual users using JWT
        authentication. Your data remains private and protected.
      </p>

      <h4>🚀 Tech Stack</h4>
      <ul>
        <li>Frontend: React, Bootstrap</li>
        <li>Backend: Node.js, Express</li>
        <li>Database: MongoDB</li>
        <li>Authentication: JWT</li>
      </ul>

      <h4>📌 Purpose</h4>
      <p>
        This project helps users manage their notes in a secure and organized
        way while learning full-stack development concepts.
      </p>

      <p className="mt-4">
        <strong>Developed by:</strong> Rajakumar B
      </p>
    </div>
  );
};

export default About;