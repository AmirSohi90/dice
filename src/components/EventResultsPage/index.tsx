import React, { useState } from 'react';
import {
  EventsWrapper,
  SearchByVenueForm,
  SearchByVenueTextInput,
  SearchFormWrapper,
  EventWrapper,
  EventDataAndTime,
  EventName,
  EventVenue,
  EventVenueLocation,
  EventDescriptionWrapper,
  EventDescription,
  EventInfoTitle,
  EventLineupOrderedList, EventLineupListItem,
  EventTicketsOrderedList,
  EventTicketListItem,
  EventButtonWrapper, EventButtonLink,
  EventImage
} from './EventResultsPage.styles';
import { useGetEventsByVenue } from './hooks/useGetEventsByVenue';
import { getFormattedDate } from '../../helpers/getFormattedDate';

export const EventsResultsPage = () => {
  const [venueName, setVenueName] = useState('');
  const { data } = useGetEventsByVenue(venueName);
  const newData = data?.length ? [data[0]] : [];

  console.log(newData);

  return (
    <div>
      <SearchFormWrapper>
        <SearchByVenueForm>
          <SearchByVenueTextInput
            type="text"
            name="Search"
            placeholder="Search for an event by venue"
            value={venueName}
            onChange={(event) => setVenueName(event.target.value)}
          />
        </SearchByVenueForm>
      </SearchFormWrapper>
      {!!venueName && <div>Your search results for {venueName}</div>}
      <EventsWrapper>
        {newData?.map((event) => {
          const { formattedDate, formattedTime } = getFormattedDate(
            event.startDate
          );
          return (
            <EventWrapper key={event.id}>
              <EventImage image={event.image}>

              </EventImage>
              <EventDataAndTime>
                {formattedDate} - {formattedTime}
              </EventDataAndTime>
              <EventName>{event.name}</EventName>
              <EventVenue>{event.venue}</EventVenue>
              <EventVenueLocation>
                {event.city}, {event.country}
              </EventVenueLocation>
              <EventDescriptionWrapper>
                <EventDescription dangerouslySetInnerHTML={{ __html: event.description }}/>
                <EventInfoTitle>LINE UP</EventInfoTitle>
                <EventLineupOrderedList>
                {event.lineup.map((artist) => (
                  <EventLineupListItem key={artist.details}>{artist.details}</EventLineupListItem>
                ))}
                </EventLineupOrderedList>
                <EventInfoTitle>TICKETS</EventInfoTitle>
                <EventTicketsOrderedList>
                  {event.tickets.map((ticket) => (
                    <EventTicketListItem key={ticket.id}>
                      {ticket.name} {ticket.price}
                    </EventTicketListItem>
                  ))}
                </EventTicketsOrderedList>
              </EventDescriptionWrapper>
              <EventButtonWrapper>
                <EventButtonLink href={event.url}>BOOK NOW</EventButtonLink>
                <span>{event.tickets[0].price}</span>
              </EventButtonWrapper>
            </EventWrapper>
          );
        })}
      </EventsWrapper>
    </div>
  );
};
