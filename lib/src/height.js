const { styleClass } = require('./utils');

const addFixedHeights = (obj, prefix, opts) => {
    for (let i = 1; i <= opts.fixedRemLimit.height; i++) {
        obj[prefix + i + 'rem'] = i + 'rem';
    }
};

module.exports = (root, opts) => {
    let heights = {
        'h-full': '100%',
        'h-screen': '100vh',
        'h-auto': 'auto',
        'h-min': 'min-content',
        'h-max': 'max-content',
        'h-fit': 'fit-content'
    };

    let minHeights = {
        'min-h-auto': 'auto',
        'min-h-0': '0px',
        'min-h-full': '100%',
        'min-h-screen': '100vh',
        'min-h-min': 'min-content',
        'min-h-max': 'max-content',
        'min-h-fit': 'fit-content'
    };

    let maxHeights = {
        'max-h-auto': 'auto',
        'max-h-0': '0px',
        'max-h-full': '100%',
        'max-h-screen': '100vh',
        'min-h-min': 'min-content',
        'min-h-max': 'max-content',
        'min-h-fit': 'fit-content'
    };

    addFixedHeights(heights, 'h-', opts);
    addFixedHeights(minHeights, 'min-h-', opts);
    addFixedHeights(maxHeights, 'max-h-', opts);

    styleClass('height', heights, root, opts, true);
    styleClass('min-height', minHeights, root, opts, true);
    styleClass('max-height', maxHeights, root, opts, true);
};
