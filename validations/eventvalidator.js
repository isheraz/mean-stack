const eventValidator = (body) => {
  const error = {};
  if (!body) error.body = 'Request Body is Empty';
  else if (!body.name) error.name = 'name field is required';
  if (!body.venue) error.venue = 'venue field is required';
  if (!body.date) error.date = 'date field is Required';
  return error;
};

module.exports = eventValidator;
