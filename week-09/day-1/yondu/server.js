'use strict';

const yondu = require('./yondu');
const port = 3000;

yondu.app.listen(port, () => {
  console.log('Server running on port %d', port);
});
