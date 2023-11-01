const { styleClass } = require('./utils');

module.exports = (root, opts) => {
    const overflow = {
        'overflow-auto': 'auto',
        'overflow-hidden': 'hidden',
        'overflow-visible': 'visible',
        'overflow-scroll': 'scroll'
    };

    const overflowX = {
        'overflow-x-auto': 'auto',
        'overflow-x-hidden': 'hidden',
        'overflow-x-visible': 'visible',
        'overflow-x-scroll': 'scroll'
    };

    const overflowY = {
        'overflow-y-auto': 'auto',
        'overflow-y-hidden': 'hidden',
        'overflow-y-visible': 'visible',
        'overflow-y-scroll': 'scroll'
    };

    styleClass('overflow', overflow, root, opts, true);
    styleClass('overflow-x', overflowX, root, opts, true);
    styleClass('overflow-y', overflowY, root, opts, true);
};
