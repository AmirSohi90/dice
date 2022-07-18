import { DAYS_OF_WEEK, MONTHS } from '../constants/dateObjects';

// TODO use this later when rendering the date, not when transforming the data

export const getFormattedDate = (date: string) => {
  const constructedDate = new Date(date);
  const dayOfWeek = DAYS_OF_WEEK[constructedDate.getDay()];
  const dateOfEvent = constructedDate.getDate();
  const month = MONTHS[constructedDate.getMonth()];
  const hours = constructedDate.getHours();
  const minutes = constructedDate.getMinutes() === 0 ? "00" : constructedDate.getMinutes();

  return {
    formattedDate: `${dayOfWeek} ${dateOfEvent} ${month}`,
    formattedTime: `${hours}:${minutes}`,
  };
};
