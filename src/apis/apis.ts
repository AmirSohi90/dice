import { EventData } from '../types/EventData';

type EventsByVenueResponseData = {
  data: Array<EventData>;
  links: { self: string; next?: string };
};

const getEventsByVenue = async (
  venueName: string
): Promise<EventsByVenueResponseData> => {
  const res = await fetch(
    `https://events-api.dice.fm/v1/events?page[size]=12&filters[venue]=${venueName}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  return res.json();
};

const apis = {
  getEventsByVenue,
};

export default apis;
