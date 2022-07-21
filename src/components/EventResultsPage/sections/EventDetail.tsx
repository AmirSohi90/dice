import React, { useState } from 'react';
import {
  EventButtonLink,
  EventButtonWrapper,
  EventDataAndTime,
  EventDescription,
  EventDescriptionWrapper,
  EventFeatured,
  EventImage,
  EventInfoTitle,
  EventLineupListItem,
  EventLineupOrderedList,
  EventLowestTicketPriceText,
  EventMoreInfo,
  EventMoreInfoText,
  EventName,
  EventSoldOutText,
  EventTicketListItem,
  EventTicketsOrderedList,
  EventTrack,
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
  tickets: Array<{
    id: number;
    name: string;
    price: number;
    soldOut: boolean;
  }>;
  url: string;
  previewTrack: string | null;
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
  const { formattedDate, formattedTime } = getFormattedDate(startDate);
  const [shouldShowMore, setShouldShowMore] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const audioElement = new Audio(previewTrack || '');

  const ImageTextToRender = () => {
    const currentDate = new Date();
    const onSaleDate = new Date(onSaleFrom);
    if (isFeatured)
      return (
        <EventFeatured isExpanded={shouldShowMore}>FEATURED</EventFeatured>
      );
    if (onSaleDate > currentDate) {
      return (
        <div>On Sale from {getFormattedDate(onSaleFrom).formattedDate}</div>
      );
    }
    return null;
  };

  const onPlay = () => {
    setIsPlayingAudio(true);
    audioElement.play();
  };

  const onPause = () => {
    setIsPlayingAudio(false);
    audioElement.pause();
  };

  return (
    <EventWrapper>
      <EventImage isExpanded={shouldShowMore} image={image}>
        {previewTrack && (
          <>
            {!isPlayingAudio ? (
              <EventTrack isExpanded={shouldShowMore} onClick={onPlay}>
                Play
              </EventTrack>
            ) : (
              <EventTrack isExpanded={shouldShowMore} onClick={onPause}>
                Pause
              </EventTrack>
            )}
          </>
        )}
        <ImageTextToRender />
      </EventImage>
      <EventDataAndTime>
        {formattedDate} - {formattedTime}
      </EventDataAndTime>
      <EventName>{name}</EventName>
      <EventVenue>{venue}</EventVenue>
      <EventVenueLocation>
        {city}, {country}
      </EventVenueLocation>
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
