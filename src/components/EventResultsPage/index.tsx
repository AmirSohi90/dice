import React, { useState } from 'react';
import {
  EventsWrapper,
  SearchByVenueForm,
  SearchByVenueTextInput,
  SearchFormWrapper,
} from './EventResultsPage.styles';
import { EventDetail } from './sections/EventDetail';
import { useGetEventsByVenue } from './hooks/useGetEventsByVenue';
import { SearchForm } from "./sections/SearchForm";

export const EventsResultsPage: React.FC = () => {
  const [venueName, setVenueName] = useState('');
  const { eventData, setPageNumber, hasNextPage, pageNumber } =
    useGetEventsByVenue(venueName);

  return (
    <div>
        <SearchForm venueName={venueName} setVenueName={setVenueName} />
      {/*<SearchFormWrapper>*/}
      {/*  <SearchByVenueForm onSubmit={(e) => e.preventDefault()}>*/}
      {/*    <SearchByVenueTextInput*/}
      {/*      type="search"*/}
      {/*      name="Search"*/}
      {/*      placeholder="Search for an event by venue"*/}
      {/*      value={venueName}*/}
      {/*      onChange={(event) => setVenueName(event.target.value)}*/}
      {/*    />*/}
      {/*  </SearchByVenueForm>*/}
      {/*</SearchFormWrapper>*/}
      {!!venueName && <div>Your search results for {venueName}</div>}
      <EventsWrapper>
        {eventData?.map((event, index) => (
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
      {hasNextPage && <button onClick={() => setPageNumber(pageNumber + 1)} />}
    </div>
  );
};
