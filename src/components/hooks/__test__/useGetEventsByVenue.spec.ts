import { waitFor } from '@testing-library/react';
import apis from '../../../apis/apis';
import { EventData } from '../../../types/EventData';
import { useGetEventsByVenue } from '../useGetEventsByVenue';
import { renderHookWithProviders } from '../../../testHelpers/renderHookWithProviders';

const data: EventData = {
  apple_music_tracks: [],
  lineup: [
    {
      details: 'Doors open',
      time: '1:00 PM',
    },
    {
      details: 'Pan•American',
      time: '',
    },
  ],
  sold_out: false,
  status: 'off-sale',
  name: 'DURATIONS: Season pass',
  event_images: {
    brand: null,
    landscape:
      'https://dice-media.imgix.net/attachments/2022-03-09/28fe0827-d020-4754-bfcf-fba7ab7a87e7.jpg?rect=0%2C1200%2C3000%2C1800',
    portrait:
      'https://dice-media.imgix.net/attachments/2022-03-09/28fe0827-d020-4754-bfcf-fba7ab7a87e7.jpg?rect=345%2C0%2C2310%2C4200',
    square:
      'https://dice-media.imgix.net/attachments/2022-03-09/28fe0827-d020-4754-bfcf-fba7ab7a87e7.jpg?rect=0%2C600%2C3000%2C3000',
  },
  spotify_tracks: [
    {
      open_url: 'https://open.spotify.com/track/4OMvmUaRVC2ALltRUnRfcX',
      preview_url:
        'https://p.scdn.co/mp3-preview/c9d2dd97a30ec71fd9c8328a1c5dabbda8c8c130?cid=921526b9c2da4b7b96e197790a02347e',
      title: 'Narcissus By The Pool',
    },
  ],
  id: '622907b21cae6c00017bef1b',
  timezone: 'America/New_York',
  description:
    'DURATIONS full season pass. \n\nFeaturing access to the following four Sunday shows: \n\n4.03\nPan American \nUlla \nRelaxer\n\n7.10\nKara-Lis Coverdale\nCeler\nC. Lavender\n\n9.18\nQuiet Time feat.\nD.K.\nNueen\nGi Gi\nBen Bondy\n\n\n11.06\nValentino Mora\nRAMZi\n+ a very special guest\n\nPresented by Speakmans Gowanus LLC dba Public Records.\n\nThis is an 18+ event',
  sale_start_date: '2022-03-09T18:30:00Z',
  location: {
    city: 'New York',
    country: 'United States',
  },
  currency: 'USD',
  date: '2022-04-03T17:00:00Z',
  ticket_types: [
    {
      id: 204638,
      name: 'General Admission',
      price: {
        face_value: 7000,
        fees: 1385,
        total: 8385,
      },
      sold_out: false,
    },
  ],
  venue: 'Public Records',
  featured: false,
  url: 'https://link.dice.fm/l39c3b1d80b6',
};

describe('[useGetEventsByVenue]', () => {
  it('should return a list of formatted event data', async () => {
    jest
      .spyOn(apis, 'getEventsByVenue')
      .mockResolvedValueOnce({ data: [data], links: { self: 'link' } });

    // const { result } = renderHookWithProviders(useGetEventsByVenue);
    //
    // await waitFor(() => {
    //   expect(apis.getEventsByVenue).toHaveBeenCalledTimes(1);
    // });
    // expect(result.current).toEqual({});
  });
});
