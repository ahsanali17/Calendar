import dayjs from 'dayjs';

export function getMonth(month: number = dayjs().month()) {
 month = Math.floor(month);
 const year: number  = dayjs().year();

 const fristDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

 let currentMonthCounter = 0 - fristDayOfTheMonth;
 const daysMatrix = new Array(5).fill([]).map(() => {
  return new Array(7).fill(null).map(() => {
   currentMonthCounter++;
   return dayjs(new Date(year, month, currentMonthCounter));
  })
 })

 return daysMatrix;
}