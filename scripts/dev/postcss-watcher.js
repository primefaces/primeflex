/* eslint-disable */
const { execSync } = require('child_process');
const chokidar = require('chokidar');

const watcher = chokidar.watch(['./lib', './postcss.config.js']);

watcher
    .on('add', function (path) {
        //console.info('✅File\x1b[32m', path, '\x1b[0mhas been added');

        execSync('npm run build:css');
    })
    .on('change', function (path) {
        console.info('🔄File\x1b[34m', path, '\x1b[0mhas been changed');

        execSync('npm run build:css');
    })
    .on('unlink', function (path) {
        console.warn('🈁File\x1b[90m', path, '\x1b[0mhas been removed');
    })
    .on('error', function (error) {
        console.error('⛔Error happened', error);
    });
/* eslint-enable */
