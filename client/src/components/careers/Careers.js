import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './careers.css'; // Ensure you have the CSS for styling

const CareersPage = () => {
  const [events, setEvents] = useState([]); // State to hold event data

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/author-api/career");
        console.log(response.data.payload,"res" ); 
        setEvents(response.data.payload);
        console.log(events,"events"); 

      } catch (error) {
        console.error("Error fetching events:", error);
        // Here you could set an error state and show an error message to the user, if desired
      }
    };

    fetchEvents();
  },[]); // Empty dependency array ensures this runs once on component mount

  return (
    <div className='careers-container'>
      {Array.isArray(events) && events.map(event => (
        <div key={event.id} className='career-card'>
          <img src={event.picture} alt={event.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div className='career-card-content'>
            <h3 className='career-card-title'>{event.title}</h3>
            <p className='career-card-date'>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className='career-card-description'>{event.description}</p>
          </div>
        </div>
      ))}
      {!Array.isArray(events) && <p>No events to display</p>}
    </div>
  );
};

export default CareersPage;
