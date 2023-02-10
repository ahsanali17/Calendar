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
 dispatchCallEvent: Dispatch<ReducerAction<any>>,
 savedEvents: []
}
