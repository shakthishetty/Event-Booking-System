import { createContext, useContext, useState } from 'react';
import { events as initialEvents } from '../data/mockEvents';

const EventContext = createContext(null);

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(initialEvents);

  const bookEvent = (eventId) => {
    setEvents(currentEvents =>
      currentEvents.map(event =>
        event.id === eventId
          ? { ...event, availableSeats: event.availableSeats - 1 }
          : event
      )
    );
    return true;
  };

  return (
    <EventContext.Provider value={{ events, bookEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);