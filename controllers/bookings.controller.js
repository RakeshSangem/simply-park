import Booking from '../models/booking.model.js';
import User from '../models/user.model.js';

export async function getAllBookings(req, res) {
  try {
    const bookings = await Booking.find();

    if (!bookings) {
      res.json({
        message: 'No bookings found!',
      });
    }
    res.json(bookings);
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error occurred while retrieving bookings.',
    });
  }
}

export async function getBookingById(req, res) {
  const id = req.params.id;

  console.log(typeof id); // checking th type of id because the id should be in the string.

  try {
    const booking = await Booking.findById(id);

    const user = await User.findById(booking.user);

    booking.user = user;

    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error occurred while retrieving booking.',
    });
  }
}

export async function createBooking(req, res) {
  try {
    const booking = req.body;

    console.log('booking', booking);

    const newBooking = await Booking.create(booking);

    res.status(201).json({
      message: 'New booking created',
      newBooking,
    });
  } catch (err) {
    if (err) {
      res.status(400).json({
        error: err.message,
      });
    }
    res.status(400).json({
      error: 'Some error occurred while creating the Booking.',
    });
  }
}

export async function updateBooking(req, res) {
  try {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
      booking.name = req.body?.name;
      booking.email = req.body?.email;
      booking.phone = req.body?.phone;
      booking.address = req.body?.address;
      booking.bookingDate = req.body?.bookingDate;
      booking.bookingTime = req.body?.bookingTime;
      booking.noOfGuests = req.body?.noOfGuests;
      booking.specialRequest = req.body?.specialRequest;

      const updatedBooking = await booking.save();
      res.json(updatedBooking);
    }
  } catch (err) {
    res.status(400).json({
      message: err.message || 'Some error occurred while updating the Booking.',
    });
  }
}

export async function deleteBooking(req, res) {
  try {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
      const parkingSpot = await ParkingSpot.findById(booking.parkingSpot);

      if (parkingSpot) {
        parkingSpot.isBooked = false;
        await parkingSpot.save();
      }

      await booking.remove();
      res.json({
        message: 'Booking removed',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error occurred while deleting the Booking.',
    });
  }
}
