const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceDeptPersonSchema = new Schema({
  ServiceDeptPersonID: {
    type: Number,
    required: true,
    unique: true
  },
  ServiceDeptID: {
    type: Number,
    required: true,
  },
  StaffID: {
    type: Number,
    required: true
  },
  FromDate: {
    type: Date,
    required: true
  },
  ToDate: {
    type: Date,
    default: null
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
  },
  IsHODStaff: {
    type: Boolean, 
    default: false
  }
});




const ServiceDeptPerson = mongoose.model('ServiceDeptPerson', ServiceDeptPersonSchema);
module.exports = ServiceDeptPerson;