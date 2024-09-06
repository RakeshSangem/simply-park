import mongoose from 'mongoose';

const parkingSpotSchema = new mongoose.Schema(
  {
    name: {
      type: String, // A403
      required: true,
    },
    isAvailable: {
      type: Boolean, // false
      default: true,
    },
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    versionKey: false,
  }
);

const ParkingSpot = mongoose.model('ParkingSpot', parkingSpotSchema);

export default ParkingSpot;
