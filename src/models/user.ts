import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: ["user", "admin"],
    default: "user"
  }
})

export default models.User || model("User", UserSchema)
