import React, { useEffect, useRef, useState } from 'react';
import { EventImageWrapper, EventWrapper } from '../EventResultsPage.styles';
import { Currencies, Lineup } from '../../../types/EventData';
import { PreviewTrack } from './PreviewTrack';
import { ImageTextToRender } from './ImageTextToRender';
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
}) => {
  const [shouldShowMore, setShouldShowMore] = useState<boolean>(false);

  return (
    <EventWrapper>
      <EventImage
        image={image}
        shouldShowMore={shouldShowMore}
        onSaleFrom={onSaleFrom}
        isFeatured={isFeatured}
        previewTrack={previewTrack}
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
      <BookNow tickets={tickets} currency={currency} url={url} />
    </EventWrapper>
  );
};
