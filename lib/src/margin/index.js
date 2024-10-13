const { styleClass } = require('../../utils');
const bottom = require('./properties/bottom');
const left = require('./properties/left');
const right = require('./properties/right');
const start = require('./properties/start');
const end = require('./properties/end');
const top = require('./properties/top');
const x = require('./modules/x');
const y = require('./modules/y');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let margins = {
        'm-auto': 'auto'
    };

    for (const i in scales) {
        margins['m-' + i] = scales[i] + 'rem';
        i !== 0 && (margins['-m-' + i] = '-' + scales[i] + 'rem');
    }

    styleClass('margin', margins, root, opts, true);

    // properties
    bottom(root, opts);
    left(root, opts);
    right(root, opts);
    start(root, opts);
    end(root, opts);
    top(root, opts);

    // modules
    x(root, opts);
    y(root, opts);
};
