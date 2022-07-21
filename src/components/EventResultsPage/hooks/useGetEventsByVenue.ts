import { useQuery } from 'react-query';
import apis from '../../../apis/apis';
import { Currencies, EventData, Lineup, MusicTracks, TicketTypes, } from '../../../types/EventData';
import { calculateResponseStatus, ResponseStatus, } from './calculateResponseStatus';
import { useDebouncedValue } from './useDebounceValue';
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type GetEventsByVenueResponse = {
  eventData: Array<EventsByVenueResponse>;
  hasNextPage: boolean;
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageNumber: number;
  responseStatus: ResponseStatus
};

export type EventsByVenueResponse = {
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
  currency: Currencies;
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

export const mapEventData = (event: EventData): EventsByVenueResponse => ({
  id: event.id,
  name: event.name,
  description: event.raw_description,
  isFeatured: event.featured,
  isSoldOut: event.sold_out,
  venue: event.venue,
  city: event.location?.city || "",
  country: event.location?.country || "",
  url: event.url,
  image: event.event_images?.square || "",
  currency: event.currency,
  lineup: mapLineUp(event.lineup),
  startTime: getStartTime(event.lineup),
  previewTrack: getPreviewTrack(event.apple_music_tracks, event.spotify_tracks),
  tickets: getTicketData(event.ticket_types),
  startDate: event.date,
  onSaleFrom: event.sale_start_date,
});

// TODO sort out loading, then sort out errors, map them to a status

export const useGetEventsByVenue = (
  venueName: string,
): GetEventsByVenueResponse => {
  const debouncedValue = useDebouncedValue(venueName);
  const [pageNumber, setPageNumber] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [eventData, setData] = useState<Array<EventsByVenueResponse>>([])

  useEffect(() => {
      setData([]);
      setPageNumber(1);
  }, [venueName])

  useEffect(() => {
    if(debouncedValue) {
      setLoading(true)
      apis.getEventsByVenue(debouncedValue, pageNumber).then(res => {
        if(res.data.length) {
          const mappedEventData = res.data.map(mapEventData)
          const concatenatedData = [...eventData, ...mappedEventData]
          setData(concatenatedData);
        }
        setHasNextPage(res.links.next ? true : false)
      }).catch((err) => {
        setError(err)
      }).finally(() => setLoading(false));
    }
  }, [debouncedValue, pageNumber])

  const responseStatus = calculateResponseStatus(isLoading, error)

  return {
    eventData,
    hasNextPage,
    setPageNumber,
    responseStatus,
    pageNumber
  }
};
