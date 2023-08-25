const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const scales = opts.spacing;
    const directions = ['t','r','b','l'];
    let margins = {};
    let xMargins = {};
    let yMargins = {};

    for (const i in scales) {
        margins['m-' + i] = scales[i] + 'rem';
    }
    for (let i = 1; i < scales.length; i++) {
        margins['-m-' + i] = '-' + scales[i] + 'rem';
    }
    margins['m-auto'] = 'auto';

    for (let d of directions) {
        for (const i in scales) {
            margins['m' + d + '-' + i] = scales[i] + 'rem';
        }
        for (const i in scales) {
            margins['-m' + d + '-' + i] = '-' + scales[i] + 'rem';
        }
        margins['m' + d + '-auto'] = 'auto';
    }

    for (const i in scales) {
        xMargins['mx-' + i] = scales[i] + 'rem';
    }
    for (const i in scales) {
        xMargins['-mx-' + i] = '-' + scales[i] + 'rem';
    }
    xMargins['mx-auto'] = 'auto';

    for (const i in scales) {
        yMargins['my-' + i] = scales[i] + 'rem';
    }
    for (const i in scales) {
        yMargins['-my-' + i] = '-' + scales[i] + 'rem';
    }
    yMargins['my-auto'] = 'auto';

    styleClass('margin', margins, root, opts, true);
    styleClass(['margin-left', 'margin-right'], xMargins, root, opts, true);
    styleClass(['margin-top', 'margin-bottom'], yMargins, root, opts, true);
}