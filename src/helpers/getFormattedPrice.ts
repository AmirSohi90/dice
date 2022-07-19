import { Currencies } from '../types/EventData';

const currencies = {
  USD: '$',
  GBP: '£',
  EUR: '€',
};

export const getFormattedPrice = (
  currency: Currencies,
  price: number
): string => {
  const formattedPrice = price / 100;
  const isDivisibleBy100 = price % 100 === 0;
  return `${currencies[currency]}${
    isDivisibleBy100 ? formattedPrice : formattedPrice.toFixed(2)
  }`;
};
