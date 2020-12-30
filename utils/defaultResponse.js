module.exports = () => {
  const resultErrorObject = {
    error: false,
    message: '',
  };

  const resultSuccessObject = {};

  return {
    error: (error, res, status = 500) => {
      resultErrorObject.error = true;
      resultErrorObject.message = error.message;
      resultErrorObject.data = null;

      res.status(status).json(resultErrorObject);
    },

    success: (message, response, res, state) => {
      resultSuccessObject.error = false;
      resultSuccessObject.message = message;
      let status = state;
      if (response == null) {
        status = 201;
      }
      resultSuccessObject.data = response;
      res.status(status).json(resultSuccessObject);
    },
  };
};
