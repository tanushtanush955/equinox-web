import "../Styles/Events.css";

import EventList from "./EventList";

const Events = ({ showMessage, setCurrentPage, theme }) => {
  // Temporary data (can later move to /data/eventsData.js)
  const eventsData = [
    {
      title: "Sample Event 1",
      date: "Jan 1, 2025",
      description: "This is just a sample event.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+1",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
    {
      title: "Sample Event 2",
      date: "Feb 15, 2025",
      description: "Another temporary event description.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sample+2",
    },
  ];

  return (
    <>
      <div className="main-content">
        <h2 className="title-text">Upcoming Events</h2>
        <p className="description-text">Check out our upcoming events below:</p>

        {/* Event list now handles rendering */}
        <EventList events={eventsData} showMessage={showMessage} theme={theme} />
      </div>

      <div className="sticky-bar">
        <button
          id="registerButton"
          className="register-button"
          onClick={() => setCurrentPage("registration")}
        >
          Register Now
        </button>
      </div>
    </>
  );
};

export default Events;
