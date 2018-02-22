const co = require('co');

module.exports = (ctx , next ) => {
  const {
    userName = 'Guest',
    greeting = 'Hello!!',
  } = ctx.request.query;

  ctx.body = {
    status: 200,
    error_code: null,
    error_message: null,
    data: { message: `${userName}, ${greeting}`},
  };

  return next();
};
