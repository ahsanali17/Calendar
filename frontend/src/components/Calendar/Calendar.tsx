import { useState, useContext, useEffect} from "react";
import {
 add,
 differenceInDays,
 endOfMonth,
 format,
 setDate,
 startOfMonth,
 sub,
} from "date-fns";

import CalendarHeader from "./CalendarHeader/CalendarHeader";
import { Month } from "../Month";
import { Sidebar } from "../Sidebar";

import { getMonth } from "../../utils/calendar";
import { useCalendarContext } from '../../context/CalendarContext/CalendarContext';

const Calendar = () => {
 const [currentMonth, setCurrentMonth] = useState(getMonth())
 const { monthIndex } = useCalendarContext()

 useEffect(() => {
  setCurrentMonth(getMonth(monthIndex))
 }, [monthIndex])

 return (
   <div className="h-screen flex flex-col">
    <CalendarHeader />
    <div className="flex flex-1">
     <Sidebar />
     <Month month={currentMonth} />
    </div>
   </div>
 )
};

export default Calendar;
