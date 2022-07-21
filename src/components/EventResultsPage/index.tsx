import React, { useState } from 'react';
import { useGetEventsByVenue } from './hooks/useGetEventsByVenue';
import { EventResultsPageView } from './EventResultsPageView';

export const EventsResultsPage: React.FC = () => {
  const [venueName, setVenueName] = useState('');
  console.log(venueName);
  const { events, setPageNumber, hasNextPage, pageNumber, responseStatus } =
    useGetEventsByVenue(venueName);
  console.log(events);

  return (
    <EventResultsPageView
      venueName={venueName}
      setVenueName={setVenueName}
      events={events}
      setPageNumber={setPageNumber}
      hasNextPage={hasNextPage}
      pageNumber={pageNumber}
      responseStatus={responseStatus}
    />
  );
};
