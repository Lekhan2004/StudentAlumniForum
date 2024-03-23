import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css"; // Make sure to create this CSS file for styling

function Profile() {
  const { currentUser } = useSelector((state) => state.userAuthorLoginReducer);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-picture">
          <img src={currentUser.picture || "default-profile.png"} alt="Profile" />
        </div>
        <h2>{currentUser.username}</h2>
        <p><strong>Email:</strong> {currentUser.email}</p>
        <p><strong>Date of Birth:</strong> {currentUser.dob}</p>
        <p><strong>Branch:</strong> {currentUser.branch}</p>
        <p><strong>Phone Number:</strong> {currentUser.phone}</p>
        <p className="profile-description"><strong>Description:</strong> {currentUser.description}</p>
      </div>
    </div>
  );
}

export default Profile;
