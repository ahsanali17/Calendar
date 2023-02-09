import React, { Fragment, useEffect, useState } from 'react'
import dayjs from 'dayjs';

import { getMonth } from '../../../utils/calendar';
import { useCalendarContext } from '../../../context/CalendarContext/CalendarContext'

const SmallCalendar = () => {
 const [ currentMonthIdx, setCurrentMonthIdx ] = useState(dayjs().month())
 const [ currentMonth, setCurrentMonth ] = useState(getMonth())

 const { monthIndex } = useCalendarContext();

 const handlePrevMonth = () => {
  setCurrentMonthIdx(currentMonthIdx - 1);
 }

 const handleNextMonth = () => {
  setCurrentMonthIdx(currentMonthIdx + 1);
 }

 function getDayClass(day: any) {
  const format = "DD-MM-YY";
  const getDate = dayjs().format(format);
  const currentDay = day.format(format);
  if(getDate === currentDay) {
    return "bg-blue-500 rounded-full text-white";
  } else {
    return "";
  }
 }

 useEffect(() => {
  setCurrentMonth(getMonth(currentMonthIdx))
 }, [currentMonthIdx])

 useEffect(() => {
  setCurrentMonthIdx(monthIndex);
 }, [monthIndex])

 return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_left
          </span>
          </button>
          <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_right
          </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
            <span key={i} className="text-sm py-1 text-center">
              {day.format("dd").charAt(0)}
            </span>
          ))}
          {currentMonth.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((day, idx) => (
                <button
                  key={idx}
                  // onClick={() => {
                  //   setSmallCalendarMonth(currentMonthIdx);
                  //   setDaySelected(day);
                  // }}
                  className={`py-1 w-full ${getDayClass(day)}`}
                >
                  <span className="text-sm">{day.format("D")}</span>
                </button>
              ))}
            </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SmallCalendar;
