import express from 'express';
import {
  getAllParkingSpots,
  createParkingSpot,
} from '../controllers/parkingSpot.controller.js';

const router = express.Router();

router.get('/', getAllParkingSpots);
// router.get('/:id', getParkingSpotById);
router.post('/', createParkingSpot);

export default router;
