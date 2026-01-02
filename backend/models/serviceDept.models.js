const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceDeptSchema = new Schema({
  ServiceDeptID: {
    type: Number,
    required: true,
    unique: true // Likely a primary key in SQL
  },
  ServiceDeptName: {
    type: String,
    required: true,
    maxlength: 250
  },
  CampusID: {
    type: Number,
    required: true
  },
  Description: {
    type: String,
    maxlength: 250,
    default: null // Marked as 'YES' for Is_Nullable
  },
  UserID: {
    type: Number,
    required: true
  },
  Created: {
    type: Date,
    required: true,
    default: Date.now
  },
  Modified: {
    type: Date,
    required: true,
    default: Date.now
  },
  CCEmailToCSV: {
    type: String,
    maxlength: 250,
    default: null // Marked as 'YES' for Is_Nullable
  },
  IsRequestTitleDisable: {
    type: Boolean, // Mapped from 'bit'
    default: false // Marked as 'YES' for Is_Nullable
  }
});

const ServiceDept = mongoose.model('ServiceDept', ServiceDeptSchema);
module.exports = ServiceDept;