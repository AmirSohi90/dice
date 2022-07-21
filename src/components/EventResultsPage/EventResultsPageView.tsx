import React, { Dispatch, SetStateAction } from 'react';
import { SearchForm } from './sections/SearchForm';
import { EventsByVenueResponse } from './hooks/useGetEventsByVenue';
import { EventsList } from './sections/EventsList';

type Props = {
  venueName: string;
  setVenueName: Dispatch<SetStateAction<string>>;
  events: Array<EventsByVenueResponse>;
  hasNextPage: boolean;
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageNumber: number;
};

export const EventResultsPageView: React.FC<Props> = ({
  venueName,
  setVenueName,
  events,
  hasNextPage,
  setPageNumber,
  pageNumber,
}) => {
  return (
    <>
      <SearchForm venueName={venueName} setVenueName={setVenueName} />
      {!!venueName && <div>Your search results for {venueName}</div>}
      <EventsList events={events} />
      {hasNextPage && <button onClick={() => setPageNumber(pageNumber + 1)} />}
    </>
  );
};
