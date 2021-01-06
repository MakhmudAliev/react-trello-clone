const mongoose = require("mongoose");

const ColumnSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Column", ColumnSchema);
