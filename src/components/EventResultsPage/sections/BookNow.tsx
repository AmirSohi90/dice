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
  hasEventOccurred: boolean;
};

const buttonText = (
  hasEventOccurred: boolean,
  isOnSaleNow: boolean
): string => {
  if (hasEventOccurred) return 'HAS OCCURRED';
  return isOnSaleNow ? 'BOOK NOW' : 'GET REMINDED';
};

export const BookNow: React.FC<Props> = ({
  url,
  tickets,
  currency,
  isOnSaleNow,
  hasEventOccurred,
}) => {
  return (
    <EventButtonWrapper>
      <EventButtonLink
          hasEventOccurred={hasEventOccurred}
        href={isOnSaleNow ? url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
      >
        {buttonText(hasEventOccurred, isOnSaleNow)}
      </EventButtonLink>
      <EventLowestTicketPriceText>
        {getLowestPrice(tickets, currency)}
      </EventLowestTicketPriceText>
    </EventButtonWrapper>
  );
};
