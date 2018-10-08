const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const LabelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Label = mongoose.model('labels', LabelSchema);
