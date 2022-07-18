export type EventData = {
  apple_music_tracks: Array<{
    open_url: string;
    preview_url: string;
    title: string;
  }>;
  lineup: Array<{ details: string; time: string }>;
  sold_out: boolean;
  status: string;
  name: string;
  event_images: {
    brand: null;
    landscape: string;
    portrait: string;
    square: string;
  };
  spotify_tracks: Array<{
    open_url: string;
    preview_url: string;
    title: string;
  }>;
  id: string;
  timezone: string;
  description: string;
  sale_start_date: string;
  location: {
    city: string;
    country: string;
  };
  currency: string;
  date: string;
  ticket_types: Array<{
    id: number;
    name: string;
    price: { face_value: number; fees: number; total: number };
    sold_out: boolean;
  }>;
  venue: string;
  featured: boolean;
  url: string;
};
