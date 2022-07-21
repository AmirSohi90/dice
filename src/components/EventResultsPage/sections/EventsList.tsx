import React from 'react';
import { EventsWrapper } from '../EventResultsPage.styles';
import { EventDetail } from './EventDetail';
import { EventsByVenueResponse } from '../hooks/useGetEventsByVenue';

type Props = {
  events: Array<EventsByVenueResponse>;
};

export const EventsList: React.FC<Props> = ({ events }) => {
  return (
    <EventsWrapper>
      {events?.map((event) => (
        <EventDetail {...event} />
      ))}
    </EventsWrapper>
  );
};
