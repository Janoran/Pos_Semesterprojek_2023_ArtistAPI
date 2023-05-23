const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const singleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  song: {
    type: songSchema,
    required: true,
  },
});

const albumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  songs: {
    type: [songSchema],
    required: true,
  },
});

const artistSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  singles: {
    type: [{
        type: singleSchema,
        required: true,
    }],
    default: [],
  },
  albums: {
    type: [{
        type: albumSchema,
        required: true,
    }],
    default: [],
  },
}, { versionKey: false });

module.exports = mongoose.model('Artist', artistSchema);
