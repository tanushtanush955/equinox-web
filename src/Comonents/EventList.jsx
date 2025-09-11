import EventItem from "./EventItem";
import "../Styles/EventList.css";

const EventList = ({ events, showMessage, theme }) => {
  return (
    <div className="events-grid">
      {events.map((event, index) => (
        <EventItem
          key={index}
          event={event}
          showMessage={showMessage}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default EventList;
