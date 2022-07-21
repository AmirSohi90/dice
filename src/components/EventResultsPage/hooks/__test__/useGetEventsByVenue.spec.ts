import { waitFor, renderHook } from '@testing-library/react';
import apis from '../../../../apis/apis';
import { EventData } from '../../../../types/EventData';
import { useGetEventsByVenue } from '../useGetEventsByVenue';
import { renderHookWithProviders } from '../../../../testHelpers/renderHookWithProviders';
import { EventDataBuilder } from '../../../../testHelpers/builders/eventDataBuilder';
import { ResponseStatus } from '../calculateResponseStatus';
import exp from "constants";

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
]

describe('[useGetEventsByVenue]', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  afterEach(() => jest.resetAllMocks());

  it('should return a list of formatted event data', async () => {
    jest.spyOn(apis, 'getEventsByVenue').mockResolvedValueOnce({
      data: [data],
      links: { self: 'link' },
    });

    const {result} = renderHook(() => useGetEventsByVenue('test-venue'))

    await waitFor(() => {
      expect(apis.getEventsByVenue).toHaveBeenCalledTimes(1);
      expect(result.current.eventData).toEqual(mappedData);
    });
  });

  it('should return a LOADING status if API has not responded yet', async () => {
    jest.spyOn(apis, 'getEventsByVenue').mockReturnValue(Promise.resolve());

    const { result } = renderHook(() =>
      useGetEventsByVenue('test-venue')
    );

    await waitFor(() => {
      expect(result.current.eventData).toEqual([]);
      expect(result.current.isLoading).toEqual(true)
    });
  });
});
