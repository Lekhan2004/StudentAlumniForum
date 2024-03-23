import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AlumniCardsPage.css'; // Ensure you have the CSS for styling

const AlumniCardsPage = () => {
  const [alumniProfiles, setAlumniProfiles] = useState([]);

  useEffect(() => {
    const fetchAlumniProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user-api/alumnicards");
        setAlumniProfiles(response.data.payload);
      } catch (error) {
        console.error("Error fetching alumni profiles:", error);
        // Optionally handle errors, such as updating the UI to inform the user
      }
    };

    fetchAlumniProfiles();
  }, []);

  return (
    <div className='alumni-container'>
      {alumniProfiles.map(profile => (
        <div key={profile._id} className='alumni-card'>
          <div className='alumni-content'>
            <h3>{profile.username}</h3>
            <p><strong>Email:</strong> {profile.email}</p>
            {profile.socialLinks && profile.socialLinks.map((link, index) => (
              <p key={index}><strong>{link.platform}:</strong> <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a></p>
            ))}
            <p><strong>Pass Out Year:</strong> {profile.academicDetails.passOutYear}</p>
            <p><strong>Branch:</strong> {profile.academicDetails.branch}</p>
            <p><strong>Current Job:</strong> {profile.careerDetails.currentJob.title} at {profile.careerDetails.currentJob.company}</p>
            <p><strong>Areas of Expertise:</strong></p>
            <ul>
              {profile.careerDetails.areasOfExpertise.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlumniCardsPage;
