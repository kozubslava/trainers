module.exports.basicErrorHandler = async (err, req, res, next) => {
  const status = err.status || 500;

  const message = err.message || 'Internal server error';

  res.status(status).send({ error: { message } });
};