import { Schema, model, Document } from "mongoose";
import User from "./User";

export const DOCUMENT_NAME = "Room";
export const COLLECTION_NAME = "Rooms";

export default interface Room extends Document {
  createdAt: Date;
  updatedAt: Date;
  users: User[];
}

const schema = new Schema({
  createdAt: {
    type: Schema.Types.Date,
    required: true,
  },
  updatedAt: {
    type: Schema.Types.Date,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
  ],
});

export const RoomModel = model<Room>(DOCUMENT_NAME, schema, COLLECTION_NAME);
