const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceRequestTypeSchema = new Schema({
  ServiceRequestTypeID: {
    type: Number,
    required: true,
    unique: true
  },
  ServiceTypeID: {
    type: Number,
    required: true,
    ref: 'ServiceType'
  },
  ServiceDeptID: {
    type: Number,
    required: true,
    ref: 'ServiceDept'
  },
  ServiceRequestTypeName: {
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
    type: Number,
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
  
  RequestTotal: { type: Number, default: 0 },
  RequestPending: { type: Number, default: 0 },
  RequestClosed: { type: Number, default: 0 },
  RequestCancelled: { type: Number, default: 0 },
  
  IsVisibleResource: {
    type: Boolean, 
    default: true
  },
  DefaultPriorityLevel: {
    type: String,
    maxlength: 50,
    default: 'Medium'
  },
  ReminderDaysAfterAssignment: {
    type: Number,
    default: 0
  },
  IsMandatoryResource: {
    type: Boolean,
    default: false
  }
});



const ServiceRequestType = mongoose.model('ServiceRequestType', ServiceRequestTypeSchema);  
module.exports = ServiceRequestType;