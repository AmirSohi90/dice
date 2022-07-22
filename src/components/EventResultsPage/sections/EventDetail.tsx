import React, { useState } from 'react';
import { EventWrapper } from '../EventResultsPage.styles';
import { Currencies, Lineup } from '../../../types/EventData';
import { EventDescription } from './EventDescription';
import { BookNow } from './BookNow';
import { EventTimeAndVenue } from './EventTimeAndVenue';
import { Ticket } from '../hooks/useGetEventsByVenue';
import { EventImage } from './EventImage';

type Props = {
  image: string;
  startDate: string;
  name: string;
  venue: string;
  city: string;
  country: string;
  description: string;
  lineup: Array<Lineup>;
  tickets: Array<Ticket>;
  url: string;
  previewTrack: string;
  currency: Currencies;
  isFeatured: boolean;
  onSaleFrom: string;
  isSoldOut: boolean;
};

export const EventDetail: React.FC<Props> = ({
  image,
  startDate,
  name,
  venue,
  city,
  country,
  description,
  lineup,
  tickets,
  url,
  currency,
  previewTrack,
  isFeatured,
  onSaleFrom,
    isSoldOut
}) => {
  const [shouldShowMore, setShouldShowMore] = useState<boolean>(false);
  const currentDate = new Date();
  const onSaleDate = new Date(onSaleFrom);
  const eventStartDate = new Date(startDate);
  const isOnSaleNow = onSaleDate < currentDate;
  const hasEventOccurred = eventStartDate < currentDate;

  return (
    <EventWrapper>
      <EventImage
        image={image}
        shouldShowMore={shouldShowMore}
        onSaleFrom={onSaleFrom}
        isFeatured={isFeatured}
        previewTrack={previewTrack}
        isOnSaleNow={isOnSaleNow}
      />
      <EventTimeAndVenue
        venue={venue}
        country={country}
        startDate={startDate}
        name={name}
        city={city}
      />
      <EventDescription
        description={description}
        shouldShowMore={shouldShowMore}
        setShouldShowMore={setShouldShowMore}
        currency={currency}
        tickets={tickets}
        lineup={lineup}
      />
      <BookNow
          isSoldOut={isSoldOut}
        hasEventOccurred={hasEventOccurred}
        isOnSaleNow={isOnSaleNow}
        tickets={tickets}
        currency={currency}
        url={url}
      />
    </EventWrapper>
  );
};
