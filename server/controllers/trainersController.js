const { Trainer } = require('../models');

module.exports.createTrainer = async (req, res, next) => {
  try {
    const { body } = req;

    const trainer = await Trainer.create(body);

    res.status(201).send({ data: trainer});
  } catch (error) {
    next(error);
  }
};

module.exports.getTrainer = async (req, res, next) => {
  try {
    const {
      params: {trainerId},
    } = req;
  

    const trainer = await Trainer.findOne({ _id:trainerId});

    res.status(200).send({ data: trainer });
  } catch (error) {
    next(error);
  }
};

module.exports.getTrainers = async (req, res, next) => {
  try {
    const trainers = await Trainer.find();

    res.status(200).send({ data: trainers });
  } catch (error) {
    next(error);
  }
};

module.exports.updateTrainer = async (req, res, next) => {
  try {
    const {
      body,
      params: {trainerId},
    } = req;

    const updatedTrainer = await Trainer.findByIdAndUpdate(
      trainerId,
      body,
      { new: true }
    );

    res.status(200).send({ data: updatedTrainer });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTrainer = async (req, res, next) => {
  try {
    const {
      params: {trainerId},
    } = req;

    const deletedTrainer = await Trainer.findByIdAndDelete(
      trainerId
    );

    res.status(200).send({ data: deletedTrainer });
  } catch (error) {
    next(error);
  }
};