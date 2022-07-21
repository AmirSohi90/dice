import { Currencies } from '../types/EventData';
import { getFormattedPrice } from './getFormattedPrice';

type Tickets = Array<{
  id: number;
  name: string;
  price: number;
  soldOut: boolean;
}>;

export const getLowestPrice = (
  tickets: Tickets,
  currency: Currencies
): string => {
  const lowestPrice = Math.min(...tickets.map((ticket) => ticket.price));

  return getFormattedPrice(currency, lowestPrice);
};
