import React from 'react';
import {
  EventButtonLink,
  EventButtonWrapper,
  EventLowestTicketPriceText,
} from '../EventResultsPage.styles';
import { getLowestPrice } from '../../../helpers/getLowestPrice';
import { Currencies } from '../../../types/EventData';
import { Ticket } from '../hooks/useGetEventsByVenue';

type Props = {
  url: string;
  tickets: Array<Ticket>;
  currency: Currencies;
};

export const BookNow: React.FC<Props> = ({ url, tickets, currency }) => {
  return (
    <EventButtonWrapper>
      <EventButtonLink href={url}>BOOK NOW</EventButtonLink>
      <EventLowestTicketPriceText>
        {getLowestPrice(tickets, currency)}
      </EventLowestTicketPriceText>
    </EventButtonWrapper>
  );
};
