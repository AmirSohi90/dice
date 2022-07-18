import { waitFor } from '@testing-library/react';
import apis from '../../../../apis/apis';
import { EventData } from '../../../../types/EventData';
import { useGetEventsByVenue } from '../useGetEventsByVenue';
import { renderHookWithProviders } from '../../../../testHelpers/renderHookWithProviders';
import { EventDataBuilder } from '../../../../testHelpers/builders/eventDataBuilder';

const data: EventData = new EventDataBuilder().build();

describe('[useGetEventsByVenue]', () => {
  afterEach(() => jest.resetAllMocks());

  it('should return a list of formatted event data', async () => {
    jest
      .spyOn(apis, 'getEventsByVenue')
      .mockResolvedValueOnce({ data: [data], links: { self: 'link' } });

    const { result } = renderHookWithProviders(() =>
      useGetEventsByVenue('test-venue')
    );

    await waitFor(() => {
      expect(apis.getEventsByVenue).toHaveBeenCalledTimes(1);
      expect(result.current).toEqual({
        data: [
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
            description: data.description,
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
        ],
      });
    });
  });
});
