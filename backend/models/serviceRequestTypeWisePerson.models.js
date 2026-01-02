const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceRequestTypeWisePersonSchema = new Schema({
  ServiceRequestTypeWisePersonID: {
    type: Number,
    required: true,
    unique: true
  },
  ServiceRequestTypeID: {
    type: Number,
    required: true,
    ref: 'ServiceRequestType' // Useful for populating request details
  },
  StaffID: {
    type: Number,
    required: true
    // ref: 'Staff' 
  },
  FromDate: {
    type: Date,
    required: true
  },
  ToDate: {
    type: Date,
    default: null // Null indicates the assignment is still active
  },
  Description: {
    type: String,
    maxlength: 250,
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
  }
});


const ServiceRequestTypeWisePerson = mongoose.model('ServiceRequestTypeWisePerson', ServiceRequestTypeWisePersonSchema);
module.exports = ServiceRequestTypeWisePerson;