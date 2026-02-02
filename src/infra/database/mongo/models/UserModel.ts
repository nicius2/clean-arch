import { Schema, model } from "mongoose";
import { UserRole } from "../../../../domain/enums/UserRole";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    cpf: { type: String, required: true, unique: true },

    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },

    passwordHash: { type: String, required: true },
  },
  { timestamps: true },
);

export const userModel = model("User", UserSchema);
