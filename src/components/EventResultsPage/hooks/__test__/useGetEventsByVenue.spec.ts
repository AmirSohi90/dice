import { waitFor, renderHook } from '@testing-library/react';
import apis from '../../../../apis/apis';
import { EventData } from '../../../../types/EventData';
import { useGetEventsByVenue } from '../useGetEventsByVenue';
import { EventDataBuilder } from '../../../../testHelpers/builders/eventDataBuilder';
import { ResponseStatus } from '../../hooks/calculateResponseStatus';

const data: EventData = new EventDataBuilder().build();

const mappedData = [
  {
    id: data.id,
    previewTrack: data.spotify_tracks[0].preview_url,
    name: data.name,
    lineup: [
      {
        details: 'Pan•American',
        time: '',
      },
    ],
    description: data.raw_description,
    isFeatured: data.featured,
    tickets: [
      {
        id: 204638,
        name: 'General Admission',
        price: 8385,
        soldOut: false,
      },
    ],
    startTime: '1:00 PM',
    startDate: data.date,
    isSoldOut: data.sold_out,
    image: data.event_images.square,
    venue: data.venue,
    city: data.location.city,
    country: data.location.country,
    onSaleFrom: data.sale_start_date,
    currency: data.currency,
    url: data.url,
  },
];

describe('[useGetEventsByVenue]', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => jest.resetAllMocks());

  it('should return a list of formatted event data', async () => {
    jest.spyOn(apis, 'getEventsByVenue').mockResolvedValueOnce({
      data: [data],
      links: { self: 'link' },
    });

    const { result } = renderHook(() => useGetEventsByVenue('test-venue'));

    await waitFor(() => {
      expect(apis.getEventsByVenue).toHaveBeenCalledTimes(1);
      expect(result.current.events).toEqual(mappedData);
    });
  });

  it('should return a LOADING status if API has not responded yet', async () => {
    jest.spyOn(apis, 'getEventsByVenue').mockResolvedValueOnce({
      data: [data],
      links: { self: 'link' },
    });

    const { result } = renderHook(() => useGetEventsByVenue('test-venue'));

    expect(result.current.responseStatus).toEqual(ResponseStatus.LOADING);
  });

  it('should return an ERROR status if API fails', async () => {
    jest
      .spyOn(apis, 'getEventsByVenue')
      .mockReturnValueOnce(Promise.reject(new Error('Error message')));

    const { result } = renderHook(() => useGetEventsByVenue('test-venue'));

    await waitFor(() => {
      expect(result.current.responseStatus).toEqual(ResponseStatus.ERROR);
    });
  });
});
