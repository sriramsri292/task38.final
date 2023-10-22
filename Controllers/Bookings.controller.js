const express = require('express');
const MahalRouter = express.Router();
const MahalModel = require('../Models/Bookings.model'); // Import your Mahal model

// GET all Mahals
MahalRouter.get('/', (req, res) => {
  MahalModel.find()
    .then((mahals) => {
      res.status(200).json({
        data: mahals,
        message: 'Mahals retrieved successfully',
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Internal Server Error',
      });
    });
});

// POST a new Mahal
MahalRouter.post('/create', (req, res) => {
  const data = req.body;
  const newMahal = new MahalModel(data);

  newMahal
    .save()
    .then((mahal) => {
      res.status(201).json({
        message: 'Mahal created successfully',
        data: mahal,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: 'Bad Request',
      });
    });
});

module.exports = MahalRouter;
