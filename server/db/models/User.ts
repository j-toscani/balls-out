import { Schema, model, Document } from "mongoose";

export const DOCUMENT_NAME = "User";
export const COLLECTION_NAME = "Users";

export default interface User extends Document {
  createdAt: Date;
  updatedAt: Date;
  username: string;
  email: string;
  password: string;
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
  username: {
    type: Schema.Types.String,
    required: true,
    maxlength: 250,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    maxlength: 250,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
});

export const UserModel = model<User>(DOCUMENT_NAME, schema, COLLECTION_NAME);
