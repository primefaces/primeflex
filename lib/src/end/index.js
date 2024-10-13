const { styleClass } = require('../../utils');

module.exports = (root, opts) => {
    const end = {
        'end-auto': 'auto',
        'end-0': '0px',
        'end-50': '50%',
        'end-100': '100%'
    };

    styleClass('inset-inline-end', end, root, opts, true);
};
