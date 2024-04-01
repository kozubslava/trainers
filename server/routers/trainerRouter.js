const trainerRouter = require("express").Router();
const TrainerController = require("../controllers/trainersController");

trainerRouter
  .route("/")
  .post(TrainerController.createTrainer)
  .get(TrainerController.getTrainers);

trainerRouter
  .route("/:trainerId")
  .get(TrainerController.getTrainers)
  .put(TrainerController.updateTrainer)
  .delete(TrainerController.deleteTrainer);

module.exports = trainerRouter;
