const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title must be required"],
    trim: true,
  },

  description: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ['active', 'inactive']
    },
  
  createAt: {
    type: Date,
    default: Date.now,
  },
});

//model create
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
