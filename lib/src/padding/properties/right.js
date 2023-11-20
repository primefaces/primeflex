const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let rightPaddings = {};

    for (const i in scales) {
        rightPaddings['pr-' + i] = `${scales[i]}rem`;
    }

    styleClass('padding-right', rightPaddings, root, opts, true);
};
