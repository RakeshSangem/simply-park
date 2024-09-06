import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    homeAddress: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
    },
    profilePicture: {
      type: String,
    },
    billingInformation: {
      billingAddress: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
      },
      paymentMethods: [
        {
          type: String,
          enum: ['credit_card', 'paypal', 'digital_wallet'],
        },
      ],
    },
    bookingHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
      },
    ],
    favoriteSpots: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingSpot',
      },
    ],
    notificationPreferences: {
      bookingConfirmations: {
        email: {
          type: Boolean,
          default: true,
        },
        sms: {
          type: Boolean,
          default: false,
        },
      },
      promotions: {
        email: {
          type: Boolean,
          default: true,
        },
      },
    },
    userRole: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    vehicleInformation: [
      {
        make: String,
        model: String,
        licensePlate: String,
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

const User = mongoose.model('User', userSchema);

export default User;
