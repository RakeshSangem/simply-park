import express from 'express';

const router = express.Router();

import {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} from '../controllers/bookings.controller.js';

// routes for bookings
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.post('/', createBooking);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

export default router;
