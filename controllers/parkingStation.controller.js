import ParkingStation from '../models/parkingStation.model.js';

export async function getAllParkingStations(req, res) {
  // get the location lat and lng from the query params and use google maps api to get the nearby parking stations

  // const { lat, lng } = req.query;

  // console.log(lat, lng);

  // const location = {
  //   lat: parseFloat(lat),
  //   lng: parseFloat(lng),
  // };

  // const radius = 1000;

  // const parkingStations = await ParkingStation.find({
  //   location: {
  //     $near: {
  //       $maxDistance: radius,
  //       $geometry: {
  //         type: 'Point',
  //         coordinates: [location.lng, location.lat],
  //       },
  //     },
  //   },
  // });

  try {
    const parkingStations = await ParkingStation.find();

    if (parkingStations.length === 0) {
      return res.status(404).json({
        error: 'No parking stations found',
      });
    }

    res.status(200).json(parkingStations);
  } catch (err) {
    res.status(500).json({
      message:
        err.message || 'Some error occurred while retrieving parking stations.',
    });
  }
}

export async function getParkingStationById(req, res) {
  try {
    const parkingStation = await ParkingStation.findById(req.params.id);
    res.json(parkingStation);
  } catch (err) {
    res.status(500).json({
      message:
        err.message || 'Some error occurred while retrieving parking station.',
    });
  }
}

export async function createParkingStation(req, res) {
  try {
    const { name, address } = req.body;

    const existingParkingStation = await ParkingStation.findOne({
      name,
      address,
    });

    if (existingParkingStation) {
      return res.status(400).json({
        error: 'Parking Station already exists',
      });
    }

    const newParkingStation = await ParkingStation.create(req.body);

    res.status(201).json({
      message: 'New parking station created',
      newParkingStation,
    });
  } catch (err) {
    res.status(400).json({
      message:
        err.message ||
        'Some error occurred while creating the Parking Station.',
    });
  }
}

export async function updateParkingStation(req, res) {
  try {
    const parkingStation = await ParkingStation.findById(req.params.id);

    if (parkingStation) {
      parkingStation.name = req.body.name;
      parkingStation.address = req.body.address;
      parkingStation.parkingSpots = req.body.parkingSpots;

      const updatedParkingStation = await parkingStation.save();

      res.json({
        message: 'Parking Station updated',
        updatedParkingStation,
      });
    }
  } catch (err) {
    res.status(400).json({
      message:
        err.message ||
        'Some error occurred while updating the Parking Station.',
    });
  }
}

export async function deleteParkingStation(req, res) {
  try {
    const parkingStation = await ParkingStation.findById(req.params.id);

    if (parkingStation) {
      await parkingStation.remove();
      res.json({
        message: 'Parking Station removed',
      });
    }
  } catch (err) {
    res.status(500).json({
      message:
        err.message ||
        'Some error occurred while deleting the Parking Station.',
    });
  }
}

export async function getParkingSpotsByParkingStationId(req, res) {
  try {
    const parkingStation = await ParkingStation.findById(
      req.params.id
    ).populate('parkingSpots');

    if (parkingStation) {
      res.json(parkingStation.parkingSpots);
    }
  } catch (err) {
    res.status(500).json({
      message:
        err.message ||
        'Some error occurred while retrieving parking spots of the Parking Station.',
    });
  }
}
