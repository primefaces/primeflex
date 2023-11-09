const { styleClass } = require('./utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let paddings = {};
    let xPaddings = {};
    let yPaddings = {};
    let topPaddings = {};
    let rightPaddings = {};
    let bottomPaddings = {};
    let leftPaddings = {};

    for (const i in scales) {
        paddings['p-' + i] = scales[i] + 'rem';
    }

    for (const i in scales) {
        topPaddings['pt-' + i] = `${scales[i]}rem`;
        rightPaddings['pr-' + i] = `${scales[i]}rem`;
        bottomPaddings['pb-' + i] = `${scales[i]}rem`;
        leftPaddings['pl-' + i] = `${scales[i]}rem`;
    }

    for (const i in scales) {
        xPaddings['px-' + i] = scales[i] + 'rem';
    }

    for (const i in scales) {
        yPaddings['py-' + i] = scales[i] + 'rem';
    }

    styleClass('padding', paddings, root, opts, true);
    styleClass(['padding-left', 'padding-right'], xPaddings, root, opts, true);
    styleClass(['padding-top', 'padding-bottom'], yPaddings, root, opts, true);
    styleClass('padding-top', topPaddings, root, opts, true);
    styleClass('padding-right', rightPaddings, root, opts, true);
    styleClass('padding-bottom', bottomPaddings, root, opts, true);
    styleClass('padding-left', leftPaddings, root, opts, true);
};
