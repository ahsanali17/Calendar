import React, {createContext, useContext, useState, useEffect} from "react";
import dayjs from "dayjs";

import {ContextProps, ContextObjectValue} from './CalendarContextTypes'

const CalendarContext = createContext<ContextObjectValue>({} as ContextObjectValue);

export default function CalendarContextWrapper({ children }: ContextProps) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(0);
  const [selectedDay, setSelectedDay ] = useState(0);

  const defaultContextObject: ContextObjectValue = {
    monthIndex,
    setMonthIndex,
    smallCalendarMonth,
    setSmallCalendarMonth,
    selectedDay,
    setSelectedDay
  };

  useEffect(() => {
    if(smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth)
    }
  }, [smallCalendarMonth])

  return (
    <CalendarContext.Provider value={defaultContextObject}>
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendarContext = () => useContext(CalendarContext);
