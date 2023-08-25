const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const scales = [0, 0.25, 0.5, 1, 1.5, 2, 3, 4, 5];
    let gaps = {};
    let columnGaps = {};
    let rowGaps = {};

    for (let i = 0; i < scales.length; i++) {
        gaps['gap-' + i] = scales[i] + 'rem';
        columnGaps['column-gap-' + i] = scales[i] + 'rem';
        rowGaps['row-gap-' + i] = scales[i] + 'rem';
    }

    styleClass('gap', gaps, root, opts, true);
    styleClass('column-gap', columnGaps, root, opts, true);
    styleClass('row-gap', rowGaps, root, opts, true);
}