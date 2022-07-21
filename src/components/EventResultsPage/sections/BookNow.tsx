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
  isOnSaleNow: boolean;
};

export const BookNow: React.FC<Props> = ({
  url,
  tickets,
  currency,
  isOnSaleNow,
}) => {
  const buttonText = isOnSaleNow ? 'BOOK NOW' : 'GET REMINDED';

  return (
    <EventButtonWrapper>
      <EventButtonLink
        href={isOnSaleNow ? url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
      >
        {buttonText}
      </EventButtonLink>
      <EventLowestTicketPriceText>
        {getLowestPrice(tickets, currency)}
      </EventLowestTicketPriceText>
    </EventButtonWrapper>
  );
};
