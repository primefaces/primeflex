const fs = require('fs-extra');
const path = require('path');

fs.copySync(path.resolve(__dirname, '../lib/'), 'dist/');
fs.copySync(path.resolve(__dirname, '../package-lib.json'), 'dist/package.json');
fs.copySync(path.resolve(__dirname, '../README.md'), 'dist/README.md');
fs.copySync(path.resolve(__dirname, '../LICENSE.md'), 'dist/LICENSE.md');
