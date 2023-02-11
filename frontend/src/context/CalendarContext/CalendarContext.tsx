import React, {createContext, useContext, useState, useEffect, useReducer, useMemo} from "react";
import dayjs from "dayjs";

import {ContextProps, ContextObjectValue, Label} from './CalendarContextTypes'
import EventsReducer from '../reducers/EventReducer'

const CalendarContext = createContext<ContextObjectValue>({} as ContextObjectValue);

const initEvents = () => {
  const storageEvents = localStorage.getItem('savedEvents')
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  console.log('parsedEvents', parsedEvents)
  return parsedEvents;
}

export default function CalendarContextWrapper({ children }: ContextProps) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(0);
  const [selectedDay, setSelectedDay ] = useState(dayjs());
  const [showEventModal, setShowEventModal ] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState<Label[]>([]);
  const [savedEvents, dispatchCallEvent] = useReducer(EventsReducer, [], initEvents)

const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt: { label: any; }) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  function updateLabel(label: Label) {
    setLabels(
      labels.map((lbl) => (lbl.label === label.label ? label : lbl))
    );
  }

  const defaultContextObject: ContextObjectValue = {
    monthIndex,
    setMonthIndex,
    smallCalendarMonth,
    setSmallCalendarMonth,
    selectedDay,
    setSelectedDay,
    showEventModal,
    setShowEventModal,
    selectedEvent,
    setSelectedEvent,
    savedEvents,
    dispatchCallEvent,
    labels,
    updateLabel,
    filteredEvents
  };


  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  // useEffect(() => {
  //   setLabels((prevLabels) => {
  //     return [...new Set(savedEvents.map((evt) => evt.label))].map(
  //       (label) => {
  //         const currentLabel = prevLabels.find(
  //           (lbl) => lbl.label === label
  //         );
  //         return {
  //           label: label,
  //           checked: currentLabel ? currentLabel.checked : true,
  //         };
  //       }
  //     );
  //   });
  // }, [savedEvents]);

  useEffect(() => {
    if(smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth)
    }
  }, [smallCalendarMonth])

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  return (
    <CalendarContext.Provider value={defaultContextObject}>
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendarContext = () => useContext(CalendarContext);
