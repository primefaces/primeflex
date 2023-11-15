const { styleClass } = require('./utils');

module.exports = (root, opts) => {
    const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const rgbaShades = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    const p = opts.prefix.cssVariable;

    const fill = {
        'fill-none': 'none',
        'fill-inherit': 'inherit',
        'fill-current': 'currentColor',
        'fill-transparent': 'transparent',
        'fill-white': '#ffffff',
        'fill-black': '#000000'
    };

    const stroke = {
        'stroke-none': 'none',
        'stroke-inherit': 'inherit',
        'stroke-current': 'currentColor',
        'stroke-transparent': 'transparent',
        'stroke-white': '#ffffff',
        'stroke-black': '#000000'
    };

    const strokeWidth = {
        'stroke-0': '0',
        'stroke-1': '1',
        'stroke-2': '2'
    };

    function generateRgbaClassNamesAndValues(type, color, cs, rgbaShade) {
        const rgbaValue = `color-mix(in srgb, var(--${p}${color}-${cs}) ${rgbaShade}%, transparent)`;
        const classNameSuffix = `\\/${rgbaShade}`;

        if (type === 'fill') {
            fill[`fill-${color}-${cs}${classNameSuffix}`] = rgbaValue;
        } else if (type === 'stroke') {
            stroke[`stroke-${color}-${cs}${classNameSuffix}`] = rgbaValue;
        }
    }

    for (let themeName in opts.themes) {
        if (opts.themes.hasOwnProperty(themeName)) {
            let colorNames = Object.keys(opts.themes[themeName].colors);

            for (let color of colorNames) {
                for (let cs of colorShades) {
                    fill[`fill-${color}-${cs}`] = `var(--${p}${color}-${cs})`;
                    stroke[`stroke-${color}-${cs}`] = `var(--${p}${color}-${cs})`;

                    for (let rgbaShade of rgbaShades) {
                        generateRgbaClassNamesAndValues('fill', color, cs, rgbaShade);
                        generateRgbaClassNamesAndValues('stroke', color, cs, rgbaShade);
                    }
                }
            }
        }
    }

    function generateWhiteAndBlackRgbaShades(rgbaShades) {
        for (let rgbaShade of rgbaShades) {
            const classNameSuffix = `\\/${rgbaShade}`;
            const alphaSuffix = `-alpha-${rgbaShade}`;
            const whiteValue = `color-mix(in srgb, #ffffff ${rgbaShade}%, transparent)`;
            const blackValue = `color-mix(in srgb, #000000 ${rgbaShade}%, transparent)`;

            fill[`fill-white${classNameSuffix}`] = whiteValue;
            fill[`fill-white${alphaSuffix}`] = whiteValue;
            fill[`fill-black${classNameSuffix}`] = blackValue;
            fill[`fill-black${alphaSuffix}`] = blackValue;

            stroke[`stroke-white${classNameSuffix}`] = whiteValue;
            stroke[`stroke-white${alphaSuffix}`] = whiteValue;
            stroke[`stroke-black${classNameSuffix}`] = blackValue;
            stroke[`stroke-black${alphaSuffix}`] = blackValue;
        }
    }

    generateWhiteAndBlackRgbaShades(rgbaShades);

    styleClass('fill', fill, root, opts, true, true);
    styleClass('stroke', stroke, root, opts, true, true);
    styleClass('stroke-width', strokeWidth, root, opts, true, true);
};
