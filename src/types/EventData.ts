export type MusicTracks = {
  open_url: string;
  preview_url: string;
  title: string;
};

export type Lineup = { details: string; time: string };

export type TicketTypes = {
  id: number;
  name: string;
  price: { face_value: number; fees: number; total: number };
  sold_out: boolean;
};

type Location = {
  city: string;
  country: string;
};

type EventImages = {
  brand: null;
  landscape: string;
  portrait: string;
  square: string;
};

export enum Currencies {
  USD = 'USD',
  GBP = 'GBP',
  EUR = 'EUR',
}

export type EventData = {
  apple_music_tracks: Array<MusicTracks>;
  lineup: Array<Lineup>;
  sold_out: boolean;
  status: string;
  name: string;
  event_images: EventImages;
  spotify_tracks: Array<MusicTracks>;
  id: string;
  timezone: string;
  description: string;
  raw_description: string;
  sale_start_date: string;
  location: Location;
  currency: Currencies;
  date: string;
  ticket_types: Array<TicketTypes>;
  venue: string;
  featured: boolean;
  url: string;
};
