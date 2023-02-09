import React, {createContext, useContext, useState} from "react";
import dayjs from "dayjs";

import {ContextProps, ContextObjectValue} from './CalendarContextTypes'

const CalendarContext = createContext<ContextObjectValue>({} as ContextObjectValue);

export default function CalendarContextWrapper({ children }: ContextProps) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  const defaultContextObject: ContextObjectValue = {
    monthIndex,
    setMonthIndex,
  };

  return (
    <CalendarContext.Provider value={defaultContextObject}>
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendarContext = () => useContext(CalendarContext);
