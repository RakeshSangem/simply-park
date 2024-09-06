import mongoose from 'mongoose';

const parkingStationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      lat: Number,
      lng: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    image: {
      type: String,
    },
    type: {
      type: String,
      enum: ['covered', 'open'],
      default: 'open',
    },
    address: {
      type: String,
      required: true,
    },
    spots: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingSpot',
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

const ParkingStation = mongoose.model('ParkingStation', parkingStationSchema);

export default ParkingStation;
