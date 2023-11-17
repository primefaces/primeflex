/* eslint-disable */
const postcss = require('postcss');
const fs = require('fs-extra');
const path = require('path');

const INPUT_FILE = path.resolve(__dirname, '../../styles/primeflex.css');
const OUTPUT_FILE = path.resolve(__dirname, '../../styles/primeflex.output.css');

const plugins = [
    require('../../lib')({
        prefix: {
            className: '',
            cssVariable: ''
        }
    })
];

const inputCss = fs.readFileSync(INPUT_FILE, 'utf8');

postcss(plugins)
    .process(inputCss, { from: INPUT_FILE, to: OUTPUT_FILE })
    .then((result) => {
        fs.writeFileSync(OUTPUT_FILE, result.css);
    })
    .catch((error) => {
        console.error(error.message);
    });

/* eslint-enable */
