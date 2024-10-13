const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let endPaddings = {};

    for (const i in scales) {
        endPaddings['pe-' + i] = `${scales[i]}rem`;
    }

    styleClass('padding-inline-end', endPaddings, root, opts, true);
};
