import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
	googleId: string;
	displayName: string;
	firstName: string;
	lastName: string;
	image: string;
 refresh_token: string | undefined | null;
	access_token: string | undefined | null;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema({
	_id: { type: String },
	googleId: { type: String },
	displayName: { type: String },
	firstName: { type: String },
	lastName: { type: String },
	image: { type: String },
 refresh_token: {type: String},
 access_token: {type: String},
	created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IUserModel>('User', UserSchema);
