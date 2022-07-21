import React, { useState } from 'react';
import { useGetEventsByVenue } from './hooks/useGetEventsByVenue';
import { EventResultsPageView } from './EventResultsPageView';

export const EventsResultsPage: React.FC = () => {
  const [venueName, setVenueName] = useState('');
  const { events, setPageNumber, hasNextPage, pageNumber, responseStatus } =
    useGetEventsByVenue(venueName);

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
