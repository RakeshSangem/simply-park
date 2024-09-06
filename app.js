import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bookingRouter from './routes/bookings.routes.js';
import parkingSpotRouter from './routes/parkingSpot.routes.js';
import parkingStationRouter from './routes/parkingStation.routes.js';

const app = express();

// middlewares
app.use(cors());
app.use(morgan('short'));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the parking app API',
  });
});

// api routes
app.use('/api/bookings', bookingRouter);
app.use('/api/parkingspots', parkingSpotRouter);
app.use('/api/parkingstation', parkingStationRouter);

export default app;
