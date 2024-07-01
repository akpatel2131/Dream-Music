
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

userSchema.methods.comparePasswrod = async function (loginPassword) {
    const isMatch = await bcrypt.compare(loginPassword, this.password);
    return isMatch;
};

const User = mongoose.model("User", userSchema);

module.exports = User;