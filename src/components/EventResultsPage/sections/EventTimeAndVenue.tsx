import React from 'react';
import {
  EventDataAndTime,
  EventName,
  EventVenue,
  EventVenueLocation,
} from '../EventResultsPage.styles';
import { getFormattedDate } from '../../../helpers/getFormattedDate';

type Props = {
  name: string;
  venue: string;
  city: string;
  country: string;
  startDate: string;
};

export const EventTimeAndVenue: React.FC<Props> = ({
  name,
  venue,
  city,
  country,
  startDate,
}) => {
  const { formattedDate, formattedTime } = getFormattedDate(startDate);

  return (
    <>
      <EventDataAndTime>
        {formattedDate} - {formattedTime}
      </EventDataAndTime>
      <EventName>{name}</EventName>
      <EventVenue>{venue}</EventVenue>
      <EventVenueLocation>
        {city}, {country}
      </EventVenueLocation>
    </>
  );
};
