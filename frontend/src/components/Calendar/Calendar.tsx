import { useState, useContext, useEffect, Fragment} from "react";
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
import { Month } from "./Month";
import { Sidebar } from "../Sidebar";

import { getMonth } from "../../utils/calendar";
import { useCalendarContext } from '../../context/CalendarContext/CalendarContext';
import CreateEventModal from "../CreateEventModal/CreateEventModal";

const Calendar = () => {
 const [monthArray, setMonthArray] = useState(getMonth())
 const { monthIndex, showEventModal } = useCalendarContext()

 useEffect(() => {
  setMonthArray(getMonth(monthIndex))
 }, [monthIndex])

 return (
  <Fragment>
    {showEventModal && (
      <CreateEventModal />
    )}
    <div className="h-screen flex flex-col">
      <CalendarHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month month={monthArray} />
      </div>
    </div>
  </Fragment>
 )
};

export default Calendar;
