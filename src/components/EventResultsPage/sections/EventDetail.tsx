import React, { useState } from 'react';
import {
  EventButtonLink,
  EventButtonWrapper,
  EventDataAndTime,
  EventDescription,
  EventDescriptionWrapper,
  EventImage,
  EventInfoTitle,
  EventLineupListItem,
  EventLineupOrderedList,
  EventLowestTicketPriceText, EventMoreInfo, EventMoreInfoText,
  EventName,
  EventSoldOutText,
  EventTicketListItem,
  EventTicketsOrderedList,
  EventVenue,
  EventVenueLocation,
  EventWrapper,
} from '../EventResultsPage.styles';
import { Currencies, Lineup } from '../../../types/EventData';
import { getFormattedDate } from '../../../helpers/getFormattedDate';
import { getFormattedPrice } from '../../../helpers/getFormattedPrice';
import { getLowestPrice } from '../../../helpers/getLowestPrice';

type Props = {
  image: string;
  startDate: string;
  name: string;
  venue: string;
  city: string;
  country: string;
  description: string;
  lineup: Array<Lineup>;
  tickets: Array<{ id: number; name: string; price: number; soldOut: boolean }>;
  url: string;
  currency: Currencies;
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
  currency
}) => {
  const { formattedDate, formattedTime } = getFormattedDate(startDate);
  const [shouldShowMore, setShouldShowMore] = useState<boolean>(false);
  return (
    <EventWrapper>
      <EventImage alt="image of event" image={image}></EventImage>
      <EventDataAndTime>
        {formattedDate} - {formattedTime}
      </EventDataAndTime>
      <EventName>{name}</EventName>
      <EventVenue>{venue}</EventVenue>
      <EventVenueLocation>
        {city}, {country}
      </EventVenueLocation>
      <EventDescriptionWrapper>
        <EventMoreInfo onClick={() => setShouldShowMore(shouldShowMore ? false : true)} isExpanded={shouldShowMore}>
          <EventMoreInfoText>More info</EventMoreInfoText>
          <EventMoreInfoText>+</EventMoreInfoText>
        </EventMoreInfo>
        {shouldShowMore && (
          <>
            <EventDescription
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <EventInfoTitle>LINE UP</EventInfoTitle>
            <EventLineupOrderedList>
              {lineup.map((artist) => (
                <EventLineupListItem key={artist.details}>
                  {artist.details}
                </EventLineupListItem>
              ))}
            </EventLineupOrderedList>
            <EventInfoTitle>TICKETS</EventInfoTitle>
            <EventTicketsOrderedList>
              {tickets.map((ticket) => (
                <EventTicketListItem key={ticket.id}>
                  {ticket.name} -{' '}
                  <b>{getFormattedPrice(currency, ticket.price)}</b>{' '}
                  {ticket.soldOut && (
                    <EventSoldOutText>SOLD OUT</EventSoldOutText>
                  )}
                </EventTicketListItem>
              ))}
            </EventTicketsOrderedList>{' '}
          </>
        )}
      </EventDescriptionWrapper>
      <EventButtonWrapper>
        <EventButtonLink href={url}>BOOK NOW</EventButtonLink>
        <EventLowestTicketPriceText>
          {getLowestPrice(tickets, currency)}
        </EventLowestTicketPriceText>
      </EventButtonWrapper>
    </EventWrapper>
  );
};
