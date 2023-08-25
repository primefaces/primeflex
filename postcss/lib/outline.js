const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const colorNames = ['blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'teal', 'orange', 'bluegray', 'purple', 'gray', 'red', 'primary'];
    const colorShades = [50,100,200,300,400,500,600,700,800,900];

    const outlineWidth = {
        'outline-none': 'none',
        'outline-1': '1px',
        'outline-2': '2px',
        'outline-4': '4px',
        'outline-8': '8px',
    };

    const outlineColor = {
        'outline-transparent': 'transparent',
        'outline-white': '#ffffff',
        'outline-black': '#000000',
    };

    for (let color of colorNames) {
        for (let cs of colorShades) {
            outlineColor['outline-' + color + '-' + cs] = 'var(--' + color + '-' + cs + ')';
        }
    }

    const outlineStyle = {
        'outline-solid': 'solid',
        'outline-dashed': 'dashed',
        'outline-dotted': 'dotted',
        'outline-double': 'double',
        'outline-inset': 'inset',
        'outline-outset': 'outset',
    };

    const outlineOffset = {
        'outline-offset-0': '0',
        'outline-offset-1': '1px',
        'outline-offset-2': '2px',
        'outline-offset-4': '4px',
        'outline-offset-8': '8px',
    };

    styleClass('outline-width', outlineWidth, root, opts,false, true);
    styleClass('outline-color', outlineColor, root, opts,false, true);
    styleClass('outline-style', outlineStyle, root, opts,false, true);
    styleClass('outline-offset', outlineOffset, root, opts,false, true);
};