import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    DOB: { type: String, required: true },
    password: { type: String, required: true },
    follower: {},
    following: {},
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
