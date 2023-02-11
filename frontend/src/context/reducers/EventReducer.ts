import { CalendarEventProps } from "../CalendarContext/CalendarContextTypes";

const EventsReducer = (state: any, {type, payload}: string | any) => {
  if (!Array.isArray(state)) {
    return state;
  }

  switch (type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map((event: CalendarEventProps) => event.id === payload.id ? payload : event);
    case 'delete':
      return state.filter((event: CalendarEventProps) => event.id !== payload.id);
    default:
      throw new Error();
  }
}
export default EventsReducer;
