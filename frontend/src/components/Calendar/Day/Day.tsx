import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';

import { useCalendarContext } from '../../../context/CalendarContext/CalendarContext';

const Day = ({day, rowIdx}: any) => {
  const [dayEvents, setDayEvents] = useState<any[]>([])
  const { setSelectedDay, setShowEventModal, savedEvents , setSelectedEvent, filteredEvents} = useCalendarContext();
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") == dayjs().format("DD-MM-YY")
    ? 'bg-blue-600 text-white rounded-full w-7'
    : "";
  }

  // useEffect(() => {
  //   const events = filteredEvents.filter(
  //     (evt) =>
  //       dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
  //   );
  //   console.log("events", events)
  //   setDayEvents(events);
  // }, [filteredEvents, day]);

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
        setSelectedDay(day);
        setShowEventModal(true);
      }}>
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt?.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt?.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Day;