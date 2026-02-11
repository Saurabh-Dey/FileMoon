const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    fullname: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    mobile: {
        type: String,
        trime: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid Email"
        ]
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
}, {timestamps: true})

const UserModel = model("User", userSchema)

module.exports = UserModel