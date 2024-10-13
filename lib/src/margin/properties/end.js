const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let endMargins = {
        'me-auto': 'auto'
    };

    for (const i in scales) {
        endMargins['me-' + i] = `${scales[i]}rem`;
        endMargins['-me-' + i] = `-${scales[i]}rem`;
    }

    styleClass('margin-inline-end', endMargins, root, opts, true);
};
