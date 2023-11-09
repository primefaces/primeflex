const { styleClass } = require('./utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let margins = {};
    let xMargins = {};
    let yMargins = {};
    let topMargins = {};
    let rightMargins = {};
    let bottomMargins = {};
    let leftMargins = {};

    for (const i in scales) {
        margins['m-' + i] = scales[i] + 'rem';
    }

    for (let i = 1; i < scales.length; i++) {
        margins['-m-' + i] = '-' + scales[i] + 'rem';
    }

    margins['m-auto'] = 'auto';

    for (const i in scales) {
        topMargins['mt-' + i] = `${scales[i]}rem`;
        topMargins['-mt-' + i] = `-${scales[i]}rem`;
        rightMargins['mr-' + i] = `${scales[i]}rem`;
        rightMargins['-mr-' + i] = `-${scales[i]}rem`;
        bottomMargins['mb-' + i] = `${scales[i]}rem`;
        bottomMargins['-mb-' + i] = `-${scales[i]}rem`;
        leftMargins['ml-' + i] = `${scales[i]}rem`;
        leftMargins['-ml-' + i] = `-${scales[i]}rem`;
    }

    topMargins['mt-auto'] = 'auto';
    rightMargins['mr-auto'] = 'auto';
    bottomMargins['mb-auto'] = 'auto';
    leftMargins['ml-auto'] = 'auto';

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
    styleClass('margin-top', topMargins, root, opts, true);
    styleClass('margin-right', rightMargins, root, opts, true);
    styleClass('margin-bottom', bottomMargins, root, opts, true);
    styleClass('margin-left', leftMargins, root, opts, true);
};
