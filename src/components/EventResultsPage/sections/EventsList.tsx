import React from 'react';
import {
    EventSearchResultsTitleWrapper,
    EventsWrapper,
    EventSearchResultsText, EventsListWrapper,
} from '../EventResultsPage.styles';
import { EventDetail } from './EventDetail';
import { EventsByVenueResponse } from '../hooks/useGetEventsByVenue';

type Props = {
  events: Array<EventsByVenueResponse>;
  venueName: string;
};

export const EventsList: React.FC<Props> = ({ events, venueName }) => {
  return (
    <EventsListWrapper>
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
    </EventsListWrapper>
  );
};
