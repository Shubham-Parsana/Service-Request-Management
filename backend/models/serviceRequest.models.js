const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttachmentSchema = new Schema({
  OriginalName: String,
  Path: String,
});

const ServiceRequestSchema = new Schema({
  ServiceRequestID: {
    type: Number,
    required: true,
    unique: true,
  },
  ServiceRequestNo: {
    type: String,
    required: true,
    maxlength: 500,
  },
  ServiceRequestDateTime: {
    type: Date,
    required: true,
    default: Date.now,
  },

  ServiceRequestTypeID: {
    type: Number,
    required: true,
    ref: "ServiceRequestType",
  },
  UserID: { type: Number, required: true }, // Creator
  OnBehalfOfStaffID: { type: Number, default: null },
  StudentID: { type: Number, default: null },
  ResourceID: { type: Number, default: null },

  ServiceRequestTitle: { type: String, required: true, maxlength: 250 },
  ServiceRequestDescription: { type: String, required: true, maxlength: 2000 },
  PriorityLevel: { type: String, maxlength: 50, default: "Medium" },

  Attachments: [AttachmentSchema],

  Status: {
    CurrentStatusID: { type: Number, required: true },
    StatusDateTime: Date,
    StatusDescription: { type: String, maxlength: 500 },
    UpdatedByUserID: Number,
  },

  Approval: {
    Status: { type: String, maxlength: 50, default: "Pending" },
    DateTime: Date,
    UpdatedByUserID: Number,
    Description: { type: String, maxlength: 250 },
  },

  Assignment: {
    AssignedToUserID: Number,
    AssignedByUserID: Number,
    AssignedDateTime: Date,
    Description: { type: String, maxlength: 250 },
  },

  Created: { type: Date, required: true, default: Date.now },
  Modified: { type: Date, required: true, default: Date.now },
});

const ServiceRequest = mongoose.model("ServiceRequest", ServiceRequestSchema);
module.exports = ServiceRequest;
