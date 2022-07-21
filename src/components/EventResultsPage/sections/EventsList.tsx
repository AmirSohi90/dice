import React from 'react';
import {
  EventSearchResultsTitleWrapper,
  EventsWrapper,
  EventSearchResultsText,
} from '../EventResultsPage.styles';
import { EventDetail } from './EventDetail';
import { EventsByVenueResponse } from '../hooks/useGetEventsByVenue';

type Props = {
  events: Array<EventsByVenueResponse>;
  venueName: string;
};

export const EventsList: React.FC<Props> = ({ events, venueName }) => {
  return (
    <>
      {!!venueName && (
        <EventSearchResultsTitleWrapper>
          <EventSearchResultsText>
            Your search results for {venueName}
          </EventSearchResultsText>
        </EventSearchResultsTitleWrapper>
      )}
      <EventsWrapper>
        {events?.map((event) => (
          <EventDetail {...event} />
        ))}
      </EventsWrapper>
    </>
  );
};
