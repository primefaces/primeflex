const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let startPaddings = {};

    for (const i in scales) {
        startPaddings['ps-' + i] = `${scales[i]}rem`;
    }

    styleClass('padding-inline-start', startPaddings, root, opts, true);
};
