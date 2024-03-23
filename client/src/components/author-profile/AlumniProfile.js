import React from "react";
import { useSelector } from "react-redux";
import "./AlumniProfile.css"; // Ensure you have this CSS file for styling

function AlumniProfile() {
    // Assuming currentUser contains all the alumni information
    const { currentUser } = useSelector(state => state.userAuthorLoginReducer);

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-picture">
                    <img src={currentUser.picture || "default-profile.png"} alt="Profile" />
                </div>
                <h2>{currentUser.username}</h2>
                <p><strong>Email:</strong> {currentUser.email}</p>
                <p><strong>Areas of Expertise:</strong></p>
                <ul>
                    {currentUser.areasOfExpertise?.map((area, index) => (
                        <li key={index}>{area}</li>
                    ))}
                </ul>
                <p><strong>Work Experience:</strong> {currentUser.workExperience}</p>
                <p><strong>Present Company:</strong> {currentUser.presentCompany}</p>
                {/* Add more alumni specific information as needed */}
            </div>
        </div>
    );
}

export default AlumniProfile;
