'use strict';
var fs = require('fs');
fs.createReadStream('.prod_vars-env')
  .pipe(fs.createWriteStream('.env'));
