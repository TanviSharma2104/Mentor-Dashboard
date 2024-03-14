const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    mobileCode: {
        type: String,
        default: "+91"
    },
    mobileNumber: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    address: {
        type: String
    },
    pincode: {
        type: String
    }
}, {
    timestamps: true
});

exports.User = new mongoose.model("users", userSchema);