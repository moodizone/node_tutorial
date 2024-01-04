import * as mongoose from "mongoose";

interface UserType extends Document {
  username: string;
  name: string;
  age?: number;
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    nullable: true,
  },
});
export const User = mongoose.model<UserType>("User", userSchema);
