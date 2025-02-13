// import { format, parseISO } from "date-fns";

// /**
//  * Formats a date to 'MM/dd/yyyy' format
//  * @param date - The date to format
//  * @returns The formatted date string
//  */
// export const formatDate = (date: string): string => {
//   return format(parseISO(date), "MM/dd/yyyy");
// };

// /**
//  * Gets the difference between two dates in days
//  * @param startDate - The start date
//  * @param endDate - The end date
//  * @returns The difference in days
//  */
// export const getDateDifference = (
//   startDate: string,
//   endDate: string
// ): number => {
//   const start = parseISO(startDate);
//   const end = parseISO(endDate);
//   const differenceInMilliseconds = end.getTime() - start.getTime();
//   return Math.floor(differenceInMilliseconds / (1000 * 3600 * 24));
// };
