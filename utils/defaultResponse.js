module.exports = () => {
  const resultErrorObject = {
    error: false,
    message: '',
  };

  const resultSuccessObject = {};

  return {
    // Default response called from every controller in case of a error.
    error: (error, res, status = 500) => {
      resultErrorObject.error = true;
      resultErrorObject.message = error.message;
      resultErrorObject.data = null;

      res.status(status).json(resultErrorObject);
    },
    // Default response called from every controller in case of a success.
    success: (message, response, res, status) => {
      resultSuccessObject.error = false;
      resultSuccessObject.message = message;
      let state = status;
      if (response == null) {
        state = 201;
      }
      resultSuccessObject.data = response;
      res.status(state).json(resultSuccessObject);
    },
  };
};
