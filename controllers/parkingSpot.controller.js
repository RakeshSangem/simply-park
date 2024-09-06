import ParkingSpot from '../models/parkingSpot.model.js';

export async function getAllParkingSpots(req, res) {
  try {
    const parkingSpots = await ParkingSpot.find();
    res.status(200).json(parkingSpots);
  } catch (err) {
    res.status(500).json({
      message:
        err.message || 'Some error occurred while retrieving parking spots.',
    });
  }
}

export async function getParkingSpotById(req, res) {
  try {
    const parkingSpot = await ParkingSpot.findById(req.params.id);
    res.json(parkingSpot);
  } catch (err) {
    res.status(500).json({
      message:
        err.message || 'Some error occurred while retrieving parking spot.',
    });
  }
}

export async function createParkingSpot(req, res) {
  try {
    const parkingSpot = req.body;

    const newParkingSpot = await ParkingSpot.create(parkingSpot);

    res.status(201).json({
      message: 'New parking spot created',
      newParkingSpot,
    });
  } catch (err) {
    res.status(400).json({
      message:
        err.message || 'Some error occurred while creating the Parking Spot.',
    });
  }
}
