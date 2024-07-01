const mongoose = require("mongoose");

// Define the movie schema
const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true
    },
    artwork: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    },
    album_name: {
        type: String,
        required: true,
    },
    view: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;