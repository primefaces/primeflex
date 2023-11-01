const { styleClass } = require('./utils');

module.exports = (root, opts) => {
    const repeatProps = {
        'bg-repeat': 'repeat',
        'bg-no-repeat': 'no-repeat',
        'bg-repeat-x': 'repeat-x',
        'bg-repeat-y': 'repeat-y',
        'bg-repeat-round': 'round',
        'bg-repeat-space': 'space'
    };

    const sizeProps = {
        'bg-auto': 'auto',
        'bg-cover': 'cover',
        'bg-contain': 'contain'
    };

    const positionProps = {
        'bg-bottom': 'bottom',
        'bg-center': 'center',
        'bg-left': 'left',
        'bg-left-bottom': 'left bottom',
        'bg-left-top': 'left top',
        'bg-right': 'right',
        'bg-right-bottom': 'right bottom',
        'bg-right-top': 'right top',
        'bg-top': 'top'
    };

    styleClass('background-repeat', repeatProps, root, opts, true);
    styleClass('background-size', sizeProps, root, opts, true);
    styleClass('background-position', positionProps, root, opts, true);
};
