const { styleClass } = require("./utils");

const addFixedWidths = (obj, prefix, opts) => {
    for ( let i = 1; i <= opts.fixedRemLimit.width; i++) {
        obj[prefix + i + 'rem'] = i + 'rem';
    }
}

module.exports = (root, opts) => {
    let widths = {
        'w-full': '100%',
        'w-screen': '100vw',
        'w-auto': 'auto',
        'w-min': 'min-content',
        'w-max': 'max-content',
        'w-fit': 'fit-content',
        'w-1': '8.3333%',
        'w-2': '16.6667%',
        'w-3': '25%',
        'w-4': '33.3333%',
        'w-5': '41.6667%',
        'w-6': '50%',
        'w-7': '58.3333%',
        'w-8': '66.6667%',
        'w-9': '75%',
        'w-10': '83.3333%',
        'w-11': '91.6667%',
        'w-12': '100%'
    };

    let minWidths = {
        'min-w-auto': 'auto',
        'min-w-0': '0px',
        'min-w-full': '100%',
        'min-w-screen': '100vw',
        'min-w-min': 'min-content',
        'min-w-max': 'max-content',
        'min-w-fit': 'fit-content'
    }

    let maxWidths = {
        'max-w-auto': 'auto',
        'max-w-0': '0px',
        'max-w-full': '100%',
        'max-w-screen': '100vw',
        'max-w-min': 'min-content',
        'max-w-max': 'max-content',
        'max-w-fit': 'fit-content'
    }

    addFixedWidths(widths, 'w-', opts);
    addFixedWidths(minWidths, 'min-w-', opts);
    addFixedWidths(maxWidths, 'max-w-', opts);

    styleClass('width', widths, root, opts, true);
    styleClass('min-width', minWidths, root, opts, true);
    styleClass('max-width', maxWidths, root, opts, true);
}