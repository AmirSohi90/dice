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
  isSoldOut: boolean;
};

const buttonText = ({
  hasEventOccurred,
  isOnSaleNow,
  isSoldOut,
}: {
  hasEventOccurred: boolean;
  isOnSaleNow: boolean;
  isSoldOut: boolean;
}): string => {
  if (hasEventOccurred) return 'HAS OCCURRED';
  if (isSoldOut) return 'SOLD OUT';
  return isOnSaleNow ? 'BOOK NOW' : 'GET REMINDED';
};

export const BookNow: React.FC<Props> = ({
  url,
  tickets,
  currency,
  isOnSaleNow,
  hasEventOccurred,
  isSoldOut,
}) => {
  return (
    <EventButtonWrapper>
      <EventButtonLink
        isDisabled={hasEventOccurred || isSoldOut}
        href={isOnSaleNow ? url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
      >
        {buttonText({ hasEventOccurred, isOnSaleNow, isSoldOut })}
      </EventButtonLink>
      <EventLowestTicketPriceText>
        {getLowestPrice(tickets, currency)}
      </EventLowestTicketPriceText>
    </EventButtonWrapper>
  );
};
