import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        validate: {
            validator: (v: any) => v?.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
            message: (props: any) => `${props?.value} is not valid email`
        }
    },
    password: {
        type: String,
        min: 8,
        required: true
    },
    name: String,
    facebook: String
})

export default mongoose.model("User", userSchema)