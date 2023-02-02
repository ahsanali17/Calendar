import { NextFunction, Request, Response } from 'express';
import dayjs from 'dayjs';

import Events from "../models/Event";

// POST
const createEvent = async(req: Request, res: Response, next: NextFunction) => {
 try {
  const event = new Events(req.body);

  await event.save();

  event
  ?  res.status(201).json({ event })
  : res.status(404).json({message: "Event was not created"})
 } catch(error) {
  res.status(500).json({ error });
 }
}

// GET
const getEvents = async(req: Request, res: Response, next: NextFunction) => {
 const start = req.params.start.toString();
 const end = req.params.end.toString();

 if(!start || !end) {
  return res.status(404).json({ message: 'Start and End query parameters are required'});
 }

 const startDate = dayjs(start).toDate();
 const endDate = dayjs(end).toDate();

 try {
  const events = await Events.find({
   start: { $gte: startDate },
   end: { $lte: endDate}
 });

  events
   ? res.status(200).json({ events })
   : res.status(404).json({ message: "Event was not found "})
 } catch(error) {
  res.status(500).json({ error });
 }
}

export default { createEvent };