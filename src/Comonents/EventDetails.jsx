import React, { useState } from "react"
import "../Styles/EventDetails.css"
import SideNav from './SideNav';

const EventDetails = ({ eventData, onclick }) => {
  const { 
    eventName, 
    description, 
    venue, 
    rules, 
    timings, 
    contactNo, 
    fees, 
    numOfTeams, 
    numOfParticipants 
  } = eventData || {};

  return (
	<div className='events-panel'>
    <div>
      <h2>{eventName || 'Event Name'}</h2>
      <p >{description || 'No description available.'}</p>
      <p ><strong>Venue:</strong> {venue || 'TBD'}</p>
      <div >
        <strong>Rules:</strong>
        <ul>
          {(rules || []).map((rule, index) => (
            <li key={index} className="mt-1">{rule}</li>
          ))}
        </ul>
      </div>
      <p><strong>Timings:</strong> {timings || 'TBD'}</p>
      <p><strong>Contact No:</strong> {contactNo || 'TBD'}</p>
      <p><strong>Fees:</strong> {fees || 'TBD'}</p>
      <p><strong>Number of Teams:</strong> {numOfTeams || 'TBD'}</p>
      <p><strong>Number of Participants:</strong> {numOfParticipants || 'TBD'}</p>
      <div className='back-button-panel'>
        <button className='back-button'
        onClick = {
          ()=>onclick('events')
        }>
          Back
        </button>
      </div>
    </div>
	</div>
  );
};

const EventsDataPanel =  ({onclick}) => {
	const eventData = {
		eventName: 'Tech Showdown 2025',
		description: 'An exciting technology competition featuring coding challenges, hackathons, and innovation showcases. Open to all tech enthusiasts!',
		venue: 'Equinox Convention Center, Hall A',
		rules: [
		'Participants must register before the deadline.',
		'No external devices or internet access during the competition.',
		'Teams must adhere to the time limits for each round.',
		'Any form of plagiarism will result in disqualification.'
		],
		timings: '09:00 AM - 06:00 PM, September 14, 2025',
		contactNo: '+91-9876543210',
		fees: '$75 per team',
		numOfTeams: 15,
		numOfParticipants: 75
	};

  const menu = [
    {
      key: "home",
      label: "Home",
      children: ["Dashboard", "Reports", "Analytics"],
    },
    {
      key: "profile",
      label: "Profile",
      children: ["My Account", "Friends", "Messages"],
    },
    {
      key: "settings",
      label: "Settings",
      children: ["General", "Privacy", "Notifications"],
    },
  ];


  return (
    <div>
      <div className="events-container">
        <EventDetails eventData={eventData} onclick={onclick}/>
        <SideNav menu={menu} />
      
      </div>
      <div>
        
      </div>
      
    </div>
  );
};

export default EventsDataPanel;