import { useQuery } from 'react-query';
import apis from '../../../apis/apis';
import {
  EventData,
  Lineup,
  MusicTracks,
  TicketTypes,
} from '../../../types/EventData';
import { calculateResponseStatus, ResponseStatus } from "./calculateResponseStatus";

type GetEventsByVenueResponse = { data: Array<EventsByVenueResponse> | undefined, responseStatus: ResponseStatus };

type EventsByVenueResponse = {
  id: string;
  previewTrack: string | null;
  name: string;
  lineup: Array<Lineup>;
  description: string;
  isFeatured: boolean;
  tickets: Array<{
    id: number;
    name: string;
    price: number;
    soldOut: boolean;
  }>;
  startTime: string;
  startDate: string;
  isSoldOut: boolean;
  image: string;
  venue: string;
  city: string;
  country: string;
  onSaleFrom: string;
  currency: string;
  url: string;
};

const mapLineUp = (lineup: Array<Lineup>) =>
  lineup.filter((artist) => artist.details !== 'Doors open');

const getStartTime = (lineup: Array<Lineup>) =>
  lineup.find((artist) => artist.details === 'Doors open')?.time || '';

const getPreviewTrack = (
  spotifyTracks: Array<MusicTracks>,
  appleMusicTracks: Array<MusicTracks>
) => {
  const eventHasSpotifyTrack = !!spotifyTracks.length;
  const eventHasAppleTrack = !!appleMusicTracks.length;

  if (eventHasSpotifyTrack) return spotifyTracks[0].preview_url;
  if (eventHasAppleTrack) return appleMusicTracks[0].preview_url;
  return null;
};

const getTicketData = (tickets: Array<TicketTypes>) =>
  tickets.map(({ id, name, price, sold_out }) => ({
    id,
    name,
    price: price.total,
    soldOut: sold_out,
  }));

const mapEventData = (event: EventData): EventsByVenueResponse => ({
  id: event.id,
  name: event.name,
  description: event.description,
  isFeatured: event.featured,
  isSoldOut: event.sold_out,
  venue: event.venue,
  city: event.location.city,
  country: event.location.country,
  url: event.url,
  image: event.event_images.square,
  currency: event.currency,
  lineup: mapLineUp(event.lineup),
  startTime: getStartTime(event.lineup),
  previewTrack: getPreviewTrack(event.apple_music_tracks, event.spotify_tracks),
  tickets: getTicketData(event.ticket_types),
  startDate: event.date,
  onSaleFrom: event.sale_start_date,
});

export const useGetEventsByVenue = (
  venueName: string
): GetEventsByVenueResponse => {
  const queryKey = `venueName:${venueName}`;
  const options = { enabled: !!venueName };
  const queryResult = useQuery(
    queryKey,
    () => apis.getEventsByVenue(venueName),
    options
  );

  const {data} = queryResult

  const responseStatus = calculateResponseStatus(queryResult, venueName)

  return {
    data:
      data && !!data.data.length ? data.data.map((event: EventData) => mapEventData(event)) : undefined,
    responseStatus
  };
};
