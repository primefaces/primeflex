const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let startMargins = {
        'ms-auto': 'auto'
    };

    for (const i in scales) {
        startMargins['ms-' + i] = `${scales[i]}rem`;
        startMargins['-ms-' + i] = `-${scales[i]}rem`;
    }

    styleClass('margin-inline-start', startMargins, root, opts, true);
};
