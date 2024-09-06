import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    spot: {
      type: mongoose.Schema.Types.ObjectId, // sdfjosjfpoiqjf32432p
      ref: 'ParkingSpot',
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['confirmed', 'canceled', 'completed'],
      default: 'confirmed',
    },
    paymentMethod: {
      type: String,
      enum: ['credit_card', 'debit_card'],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    versionKey: false,
  }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
