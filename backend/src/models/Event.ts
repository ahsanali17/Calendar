import mongoose, { Document, Schema } from 'mongoose';
export interface IEvent {
 start: Date,
 end: Date,
 title: String,
}

export interface IEventModel extends IEvent, Document {}

const EventSchema: Schema = new Schema({
 _id: {type: new mongoose.Types.ObjectId()},
 start: {type: Date},
 end: {type: Date},
 title: {type: String}
});

export default mongoose.model<IEventModel>('Event', EventSchema);
