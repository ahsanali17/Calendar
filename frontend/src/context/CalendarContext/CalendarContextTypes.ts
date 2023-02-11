import { Action } from "@remix-run/router";
import dayjs, { Dayjs } from "dayjs";
import { Dispatch, ReducerAction, SetStateAction } from "react";

export type ContextProps = {
 children: React.ReactNode;
}

export type ContextObjectValue = {
 monthIndex: number,
 setMonthIndex: Dispatch<SetStateAction<number>>;
 smallCalendarMonth: number,
 setSmallCalendarMonth: Dispatch<SetStateAction<number>>;
 selectedDay: Dayjs,
 setSelectedDay: Dispatch<SetStateAction<Dayjs>>;
 showEventModal: boolean,
 setShowEventModal: Dispatch<SetStateAction<boolean>>;
 selectedEvent: null,
 setSelectedEvent: Dispatch<SetStateAction<null>>,
 savedEvents: [],
 dispatchCallEvent: Dispatch<Action>;
 labels: Label[],
 updateLabel: (label: Label) => void
 filteredEvents: any[]
}

export type Label = {
 label: string,
 checked: boolean
};

export type CalendarEventProps = {
 title: string,
 description: string,
 label: string,
 day: number,
 id: number
}

type Action = {
 type: string;
 payload: CalendarEventProps
}