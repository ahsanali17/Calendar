import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";

export type ContextProps = {
 children: React.ReactNode;
}

export type ContextObjectValue = {
 monthIndex: number,
 setMonthIndex: Dispatch<SetStateAction<number>>;
}
