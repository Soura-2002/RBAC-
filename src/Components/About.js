import React from "react";

function About({ mode }) {
  const textStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "#495057" : "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={{ padding: "20px", margin: "20px auto", maxWidth: "800px" }}>
      <div style={textStyle}>
        <h2>About RBAC User Management</h2>
        <p>
          The RBAC User Management System is a web-based application designed
          to simplify and streamline user, role, and permission management. It
          provides an intuitive interface for administrators to:
        </p>
        <ul>
          <li>Create and manage users.</li>
          <li>Assign roles to users.</li>
          <li>Define and configure permissions for each role.</li>
          <li>Switch between light and dark themes for better accessibility.</li>
          <li>Receive real-time feedback with alert notifications.</li>
        </ul>
        <p>
          This application leverages modern web technologies, including React
          and React Router, to deliver a seamless user experience.
        </p>
        <p>
          Future updates will include backend integration for persistent
          storage, authentication, and advanced analytics.
        </p>
      </div>
    </div>
  );
}

export default About;
