const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceTypeSchema = new Schema({
  ServiceTypeID: {
    type: Number,
    required: true,
    unique: true
  },
  ServiceTypeName: {
    type: String,
    required: true,
    maxlength: 250
  },
  Description: {
    type: String,
    maxlength: 250,
    default: null
  },
  Sequence: {
    type: Number, // Handles SQL 'decimal'
    default: null
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
  IsForStaff: {
    type: Boolean,
    default: false // Defaults to false if null
  },
  IsForStudent: {
    type: Boolean,
    default: false // Defaults to false if null
  }
});


const ServiceType = mongoose.model('ServiceType', ServiceTypeSchema);
module.exports = ServiceType;