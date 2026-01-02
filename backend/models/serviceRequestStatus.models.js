import mongoose from 'mongoose';

const serviceRequestStatusSchema = new mongoose.Schema({
    ServiceRequestStatusID: {
        type: Number,
        required: true,
        unique: true
    },
    ServiceRequestStatusName: {
        type: String,
        required: true,
        maxlength: 250
    },
    ServiceRequestStatusSystemName: {
        type: String,
        required: true,
        maxlength: 100
    },
    Sequence: {
        type: Number,
        default: 0
    },
    Description: {
        type: String,
        maxlength: 250
    },
    UserID: {
        type: Number,
        required: true
    },
    ServiceRequestStatusCssClass: {
        type: String,
        maxlength: 250
    },
    IsOpen: {
        type: Boolean,
        default: false
    },
    IsNoFurtherActionRequired: {
        type: Boolean,
        default: false
    },
    IsAllowedForTechnician: {
        type: Boolean,
        default: false
    }
});

const ServiceRequestStatus = mongoose.model('ServiceRequestStatus', serviceRequestStatusSchema);

export default ServiceRequestStatus;


