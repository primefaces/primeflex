const { styleClass } = require('./utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    const directions = ['t', 'r', 'b', 'l'];
    let paddings = {};
    let xPaddings = {};
    let yPaddings = {};

    for (const i in scales) {
        paddings['p-' + i] = scales[i] + 'rem';
    }

    for (let d of directions) {
        for (const i in scales) {
            paddings['p' + d + '-' + i] = scales[i] + 'rem';
        }
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
};
