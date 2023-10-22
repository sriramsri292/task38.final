const mongoose = require('mongoose');

const mahalBookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mahal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mahal',
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String, // You can define payment status as "paid" or "unpaid"
    required: true,
  },
  // Add more fields as needed for your specific application
});

const MahalBooking = mongoose.model('MahalBooking', mahalBookingSchema);

module.exports = MahalBooking;
