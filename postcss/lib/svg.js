const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const colorNames = ['blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'teal', 'orange', 'bluegray', 'purple', 'gray', 'red', 'primary'];
    const colorShades = [50,100,200,300,400,500,600,700,800,900];

    const fill = {
        'fill-none': 'none',
        'fill-inherit': 'inherit',
        'fill-current': 'currentColor',
        'fill-transparent': 'transparent',
        'fill-white': '#ffffff',
        'fill-black': '#000000',
    };

    const stroke = {
        'stroke-none': 'none',
        'stroke-inherit': 'inherit',
        'stroke-current': 'currentColor',
        'stroke-transparent': 'transparent',
        'stroke-white': '#ffffff',
        'stroke-black': '#000000',
    };

    const strokeWidth = {
        'stroke-0': '0',
        'stroke-1': '1',
        'stroke-2': '2',
    };

    for (let color of colorNames) {
        for (let cs of colorShades) {
            fill['fill-' + color + '-' + cs] = 'var(--' + color + '-' + cs + ')';
            stroke['stroke-' + color + '-' + cs] = 'var(--' + color + '-' + cs + ')';
        }
    }

    styleClass('fill', fill, root, opts, true, true);
    styleClass('stroke', stroke, root, opts, true, true);
    styleClass('stroke-width', strokeWidth, root, opts, true, true);
};
