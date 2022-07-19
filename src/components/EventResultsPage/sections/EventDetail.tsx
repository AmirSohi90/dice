import React from 'react';
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
  EventName,
  EventTicketListItem,
  EventTicketsOrderedList,
  EventVenue,
  EventVenueLocation,
  EventWrapper,
} from '../EventResultsPage.styles';
import { Currencies, Lineup } from '../../../types/EventData';
import { getFormattedDate } from '../../../helpers/getFormattedDate';
import { getFormattedPrice } from "../../../helpers/getFormattedPrice";

type Props = {
  image: string;
  startDate: string;
  name: string;
  venue: string;
  city: string;
  country: string;
  description: string;
  lineup: Array<Lineup>;
  tickets: Array<{id: number; name: string; price: number}>;
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
  return (
    <EventWrapper>
      <EventImage image={image}></EventImage>
      <EventDataAndTime>
        {formattedDate} - {formattedTime}
      </EventDataAndTime>
      <EventName>{name}</EventName>
      <EventVenue>{venue}</EventVenue>
      <EventVenueLocation>
        {city}, {country}
      </EventVenueLocation>
      <EventDescriptionWrapper>
        <EventDescription dangerouslySetInnerHTML={{ __html: description }} />
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
              {ticket.name} - <b>{getFormattedPrice(currency, ticket.price)}</b>
            </EventTicketListItem>
          ))}
        </EventTicketsOrderedList>
      </EventDescriptionWrapper>
      <EventButtonWrapper>
        <EventButtonLink href={url}>BOOK NOW</EventButtonLink>
        <span>{tickets[0].price}</span>
      </EventButtonWrapper>
    </EventWrapper>
  );
};
