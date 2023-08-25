const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const position = {
        'static': 'static',
        'fixed': 'fixed',
        'absolute': 'absolute',
        'relative': 'relative',
        'sticky': 'sticky'
    };

    const top = {
        'top-auto': 'auto',
        'top-0': '0px',
        'top-50': '50%',
        'top-100': '100%'
    };

    const left = {
        'left-auto': 'auto',
        'left-0': '0px',
        'left-50': '50%',
        'left-100': '100%'
    };

    const right = {
        'right-auto': 'auto',
        'right-0': '0px',
        'right-50': '50%',
        'right-100': '100%'
    };

    const bottom = {
        'bottom-auto': 'auto',
        'bottom-0': '0px',
        'bottom-50': '50%',
        'bottom-100': '100%'
    };

    styleClass('position', position, root, opts, true);
    styleClass('top', top, root, opts, true);
    styleClass('left', left, root, opts, true);
    styleClass('right', right, root, opts, true);
    styleClass('bottom', bottom, root, opts, true);
}