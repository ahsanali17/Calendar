import React from "react";

import plusIcon from '../../../assets/plusIcon.svg';
import { useCalendarContext } from '../../../context/CalendarContext/CalendarContext';

const CreateEventButton = () => {
  const {setShowEventModal} = useCalendarContext()

  return (
    <button onClick={() => setShowEventModal(true)} className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <img src={plusIcon} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7">Create Event</span>
    </button>
  )

};

export default CreateEventButton;