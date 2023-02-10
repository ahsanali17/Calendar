import React, {createContext, useContext, useState, useEffect, useReducer} from "react";
import dayjs from "dayjs";

import {ContextProps, ContextObjectValue} from './CalendarContextTypes'
import EventsReducer from '../reducers/EventReducer'

const CalendarContext = createContext<ContextObjectValue>({} as ContextObjectValue);

const initEvents = () => {
  const storageEvents = localStorage.getItem('savedEvents')
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function CalendarContextWrapper({ children }: ContextProps) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(0);
  const [selectedDay, setSelectedDay ] = useState(dayjs());
  const [showEventModal, setShowEventModal ] = useState(false);
  const [savedEvents, dispatchCallEvent] = useReducer(EventsReducer, [], initEvents)

  const defaultContextObject: ContextObjectValue = {
    monthIndex,
    setMonthIndex,
    smallCalendarMonth,
    setSmallCalendarMonth,
    selectedDay,
    setSelectedDay,
    showEventModal,
    setShowEventModal,
    dispatchCallEvent,
    savedEvents
  };

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

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
