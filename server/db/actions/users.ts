import User, { UserModel } from "../models/User";
import { UserBody } from "../../../types";
import { Schema, Types } from "mongoose";

export const createUser = async (user: UserBody) => {
  const now = new Date();
  user.createdAt = now;
  user.updatedAt = now;

  const userModel = await UserModel.create(user);
  const _savedUser = await userModel.save();
};

export const updateUser = async (user: User) => {
  const now = new Date();
  user.updatedAt = now;
  await UserModel.updateOne(user._id, user);
};

export const findUser = async (options: {
  email?: string;
  id?: Schema.Types.ObjectId;
}) => {
  const User = await UserModel.findOne(options);
  return User;
};

export const findUsers = async () => {
  const Users = await UserModel.find({});
  return Users;
};

//options: {
//mail?: string;
//id?: Schema.Types.ObjectId;
//}

export const findMe = async (id: Schema.Types.ObjectId) => {
  const me = UserModel.findById(id);
  return me;
};
