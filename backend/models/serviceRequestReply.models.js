const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceRequestReplySchema = new Schema({
  ServiceRequestReplyID: {
    type: Number,
    required: true,
    unique: true
  },
  ServiceRequestID: {
    type: Number,
    required: true,
    ref: 'ServiceRequest' // Critical for linking back to the ticket
  },
  
  // Reply Content
  ReplyDateTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  ReplyDescription: {
    type: String,
    required: true,
    maxlength: 250
  },
  
  // Participant Identifiers
  StaffID: { type: Number, default: null },
  StudentID: { type: Number, default: null },
  UserID: { type: Number, required: true },
  
  // Attachment Handling
  Attachment: {
    OriginalName: { type: String, maxlength: 250 },
    Path: { type: String, maxlength: 250 }
  },
  
  // Status History Snapshot
  // These fields record the status state *caused* by this reply
  StatusSnapshot: {
    StatusID: { type: Number, required: true }, // Maps to ServiceRequestStatusID
    StatusDateTime: { type: Date, required: true },
    StatusDescription: { type: String, maxlength: 250 },
    UpdatedByUserID: { type: Number, required: true }
  },
  
  ServiceRequestTypeID: {
    type: Number,
    default: null // Nullable in SQL
  },
  
  Created: { type: Date, required: true, default: Date.now },
  Modified: { type: Date, required: true, default: Date.now }
});


const ServiceRequestReply = mongoose.model('ServiceRequestReply', ServiceRequestReplySchema);
module.exports = ServiceRequestReply;