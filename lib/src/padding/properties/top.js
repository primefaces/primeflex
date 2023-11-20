const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let topPaddings = {};

    for (const i in scales) {
        topPaddings['pt-' + i] = `${scales[i]}rem`;
    }

    styleClass('padding-top', topPaddings, root, opts, true);
};
