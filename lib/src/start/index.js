const { styleClass } = require('../../utils');

module.exports = (root, opts) => {
    const start = {
        'start-auto': 'auto',
        'start-0': '0px',
        'start-50': '50%',
        'start-100': '100%'
    };

    styleClass('inset-inline-start', start, root, opts, true);
};
