import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password:{
      type:String,
      required: true
    },
    role:{
      type:String,
      required:true,
      enum:["admin","agronomist","farmer"],
    },
    phone:{
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [/^[6-9]\d{9}$/, "Invalid phone number"]
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User",userSchema);