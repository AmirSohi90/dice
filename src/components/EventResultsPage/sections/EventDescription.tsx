import React, { Dispatch, SetStateAction } from 'react';
import {
  EventDescriptionWrapper,
  EventInfoTitle,
  EventLineupListItem,
  EventLineupOrderedList,
  EventMoreInfo,
  EventMoreInfoText,
  EventSoldOutText,
  EventTicketListItem,
  EventTicketsOrderedList,
  EventDescriptionText,
} from '../EventResultsPage.styles';
import { getFormattedPrice } from '../../../helpers/getFormattedPrice';
import { Currencies, Lineup } from '../../../types/EventData';
import { Ticket } from '../hooks/useGetEventsByVenue';

type Props = {
  setShouldShowMore: Dispatch<SetStateAction<boolean>>;
  shouldShowMore: boolean;
  description: string;
  lineup: Array<Lineup>;
  tickets: Array<Ticket>;
  currency: Currencies;
};

export const EventDescription: React.FC<Props> = ({
  setShouldShowMore,
  shouldShowMore,
  description,
  lineup,
  tickets,
  currency,
}) => {
  const createMarkup = () => {
    return { __html: description };
  };

  return (
    <EventDescriptionWrapper>
      <EventMoreInfo
        onClick={() => setShouldShowMore(shouldShowMore ? false : true)}
        isExpanded={shouldShowMore}
      >
        <EventMoreInfoText>More info</EventMoreInfoText>
        <EventMoreInfoText>+</EventMoreInfoText>
      </EventMoreInfo>
      {shouldShowMore && (
        <>
          <EventDescriptionText dangerouslySetInnerHTML={createMarkup()} />
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
  );
};
