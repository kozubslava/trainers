const rootRouter = require('express').Router();
const trainersRouter = require('./trainerRouter');

rootRouter.use('/trainers', trainersRouter);

module.exports = rootRouter;