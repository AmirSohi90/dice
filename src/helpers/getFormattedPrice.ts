import { Currencies } from "../types/EventData";

const currencies = {
    USD: "$",
    GBP: "£",
    EUR: "€"
}

export const getFormattedPrice = (currency: Currencies, price: number): string => {
    const formattedPrice = price / 100;
    return `${currencies[currency]}${formattedPrice}`
}