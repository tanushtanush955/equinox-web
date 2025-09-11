import "../Styles/EventItem.css";
// Renders a single event card
const EventItem = ({ event, showMessage, theme }) => {
  const viewMoreButtonColor = theme === "gold" ? "#facc15" : "#ef4444";
  const eventTitleColor = theme === "gold" ? "#facc15" : "#ef4444";

  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />	
      <div className="event-info">
        <h3 className="event-title" style={{ color: eventTitleColor }}>
          {event.title}
        </h3>
        <p className="event-date">{event.date}</p>
        <p className="event-description">{event.description}</p>
        <button
          className="view-more-button"
          onClick={() =>
            showMessage(`Viewing more details for: ${event.title}!`)
          }
          style={{
            borderColor: viewMoreButtonColor,
            color: viewMoreButtonColor,
          }}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default EventItem;
