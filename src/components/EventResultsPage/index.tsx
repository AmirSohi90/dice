import React, { useState } from 'react';
import {
  EventsWrapper,
  SearchByVenueForm,
  SearchByVenueTextInput,
  SearchFormWrapper,
} from './EventResultsPage.styles';
import { useGetEventsByVenue } from './hooks/useGetEventsByVenue';
import { EventDetail } from './sections/EventDetail';

export const EventsResultsPage: React.FC = () => {
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
      <EventsWrapper>
        {data?.map((event, index) => (
          <EventDetail
            key={event.id}
            image={event.image}
            startDate={event.startDate}
            name={event.name}
            venue={event.venue}
            city={event.city}
            country={event.country}
            description={event.description}
            lineup={event.lineup}
            tickets={event.tickets}
            url={event.url}
            currency={event.currency}
            previewTrack={event.previewTrack}
            isFeatured={event.isFeatured}
            onSaleDate={event.onSaleFrom}
            index={index}
          />
        ))}
      </EventsWrapper>
      {/*<button onClick={setEndpoint} />*/}
    </div>
  );
};
