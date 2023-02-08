import { useState } from "react";
import {
 add,
 differenceInDays,
 endOfMonth,
 format,
 setDate,
 startOfMonth,
 sub,
} from "date-fns";

// import Cell from "./Cell";
import { getMonth } from "../../utils/calendar";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import { Month } from "../Month";
import { Sidebar } from "../Sidebar";

const Calendar = () => {
 const [currentMonth, setCurrentMonth] = useState(getMonth())


 return (
  <>
   <div className="h-screen flex flex-columns">
    <CalendarHeader />
    <div className="flex flex-1">
     <Sidebar />
     <Month month={currentMonth} />
    </div>
   </div>
  </>
 )
};

export default Calendar;
