import React, { Dispatch, SetStateAction } from 'react';
import { SearchForm } from './sections/SearchForm';
import { EventsByVenueResponse } from './hooks/useGetEventsByVenue';
import { EventsList } from './sections/EventsList';
import { LoadMore } from './sections/LoadMore';
import { ResponseStatus } from './hooks/calculateResponseStatus';

type Props = {
  venueName: string;
  setVenueName: Dispatch<SetStateAction<string>>;
  events: Array<EventsByVenueResponse>;
  hasNextPage: boolean;
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageNumber: number;
  responseStatus: ResponseStatus;
};

export const EventResultsPageView: React.FC<Props> = ({
  venueName,
  setVenueName,
  events,
  hasNextPage,
  setPageNumber,
  pageNumber,
  responseStatus,
}) => {
  const shouldShowLoadMoreButton =
    hasNextPage && responseStatus === ResponseStatus.SUCCESS && !!events.length;
  return (
    <>
      <SearchForm venueName={venueName} setVenueName={setVenueName} />
      <EventsList venueName={venueName} events={events} />
      {shouldShowLoadMoreButton && (
        <LoadMore
          shouldDisableButton={!shouldShowLoadMoreButton}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      )}
    </>
  );
};
