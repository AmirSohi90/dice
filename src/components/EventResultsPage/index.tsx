import React, { useState } from 'react';
import {
  SearchByVenueForm,
  SearchByVenueTextInput,
  SearchFormWrapper,
} from './EventResultsPage.styles';
import { useGetEventsByVenue } from './hooks/useGetEventsByVenue';
import { getFormattedDate } from "../../helpers/getFormattedDate";

export const EventsResultsPage = () => {
  const [venueName, setVenueName] = useState('');
  const { data } = useGetEventsByVenue(venueName);

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
      {data?.map((event) => {

        const {formattedDate, formattedTime} = getFormattedDate(event.startDate)
        console.log(formattedTime)

        return (
          <div key={event.id}>
            <span>{formattedDate} - {formattedTime}</span>
            <span>{event.name}</span>
            <span>{event.venue}</span>
            <span>
              {event.city}, {event.country}
            </span>
            <p>{event.description}</p>
            {event.lineup.map((artist) => (
              <span key={artist.details}>{artist.details}</span>
            ))}
            {event.tickets.map((ticket) => (
              <span key={ticket.id}>
                {ticket.name} {ticket.price}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};
