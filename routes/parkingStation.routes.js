import express from 'express';
import {
  getAllParkingStations,
  getParkingStationById,
  createParkingStation,
} from '../controllers/parkingStation.controller.js';

const router = express.Router();

router.get('/', getAllParkingStations);
router.get('/:id', getParkingStationById);
router.post('/', createParkingStation);
// router.put('/:id', updateParkingStation);
// router.delete('/:id', deleteParkingStation);
// router.post('/:id/parkingspots', createParkingSpot);

export default router;
