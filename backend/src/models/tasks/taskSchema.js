const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, 'Please add a task value'],
    },
    status: {
      type: String,
      default: 'Pendente',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);
