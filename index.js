const app = require('./src/server');
const CONFIG = require('@config');

try {
  app.listen(CONFIG.port);
} catch (err) {
  console.log('error');
}
