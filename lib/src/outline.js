const { styleClass } = require('./utils');

module.exports = (root, opts) => {
    const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const rgbaShades = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    const p = opts.prefix.cssVariable;
    let outlineColor = {};

    for (let themeName in opts.themes) {
        if (opts.themes.hasOwnProperty(themeName)) {
            let colorNames = Object.keys(opts.themes[themeName].colors);

            for (let color of colorNames) {
                for (let cs of colorShades) {
                    outlineColor[`outline-${color}-${cs}`] = `var(--${p}${color}-${cs})`;
                }
            }
        }
    }

    outlineColor = {
        ...outlineColor,
        'outline-transparent': 'transparent',
        'outline-white': '#ffffff',
        'outline-black': '#000000'
    };

    const outlineWidth = {
        'outline-0': '0px',
        'outline-1': '1px',
        'outline-2': '2px',
        'outline-4': '4px',
        'outline-8': '8px'
    };

    const outline = {
        'outline-none': '2px solid transparent'
    };

    const outlineStyle = {
        outline: 'solid',
        'outline-dashed': 'dashed',
        'outline-dotted': 'dotted',
        'outline-double': 'double',
        'outline-inset': 'inset',
        'outline-outset': 'outset'
    };

    const outlineOffset = {
        'outline-offset-0': '0',
        'outline-offset-1': '1px',
        'outline-offset-2': '2px',
        'outline-offset-4': '4px',
        'outline-offset-8': '8px'
    };

    function generateClassNamesAndValues(color, cs, rgbaShade) {
        const rgbaValue = `color-mix(in srgb, var(--${p}${color}-${cs}) ${rgbaShade}%, transparent)`;
        const classNameSuffix = `\\/${rgbaShade}`;

        outlineColor[`outline-${color}-${cs}${classNameSuffix}`] = rgbaValue;
    }

    function generateWhiteAndBlackRgbaShades(rgbaShades) {
        for (let rgbaShade of rgbaShades) {
            const classNameSuffix = `\\/${rgbaShade}`;
            const alphaSuffix = `-alpha-${rgbaShade}`;
            const whiteValue = `color-mix(in srgb, #ffffff ${rgbaShade}%, transparent)`;
            const blackValue = `color-mix(in srgb, #000000 ${rgbaShade}%, transparent)`;

            outlineColor[`outline-white${classNameSuffix}`] = whiteValue;
            outlineColor[`outline-white${alphaSuffix}`] = whiteValue;
            outlineColor[`outline-black${classNameSuffix}`] = blackValue;
            outlineColor[`outline-black${alphaSuffix}`] = blackValue;
        }
    }

    generateWhiteAndBlackRgbaShades(rgbaShades);

    for (let themeName in opts.themes) {
        if (opts.themes.hasOwnProperty(themeName)) {
            let colorNames = Object.keys(opts.themes[themeName].colors);

            for (let color of colorNames) {
                for (let cs of colorShades) {
                    for (let rgbaShade of rgbaShades) {
                        generateClassNamesAndValues(color, cs, rgbaShade);
                    }
                }
            }
        }
    }

    styleClass('outline', outline, root, opts, false, true);
    styleClass('outline-color', outlineColor, root, opts, false, true);
    styleClass('outline-width', outlineWidth, root, opts, false, true);
    styleClass('outline-style', outlineStyle, root, opts, false, true);
    styleClass('outline-offset', outlineOffset, root, opts, false, true);
};
