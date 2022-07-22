import React from 'react';
import {
  EventSearchResultsTitleWrapper,
  EventsListWrapper,
} from '../EventResultsPage.styles';
import { EventDetail } from './EventDetail';
import { EventsByVenueResponse } from '../hooks/useGetEventsByVenue';
import {
  PageLayout,
  HeadingText,
} from '../../SharedStyledComponents/SharedStylingComponents.styles';

type Props = {
  events: Array<EventsByVenueResponse>;
  venueName: string;
};

export const EventsList: React.FC<Props> = ({ events, venueName }) => {
  return (
    <EventsListWrapper>
      {!!venueName && (
        <EventSearchResultsTitleWrapper>
          <HeadingText>Your search results for {venueName}</HeadingText>
        </EventSearchResultsTitleWrapper>
      )}
      <PageLayout>
        {events?.map((event) => (
          <EventDetail key={event.id} {...event} />
        ))}
      </PageLayout>
    </EventsListWrapper>
  );
};
