const { styleClass } = require('./utils');
const { Rule } = require('postcss');

module.exports = (root, opts) => {
    const surfaceShades = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const rgbaShades = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    const colorNames = Object.keys(opts.themes['primeone-dark'].colors);
    const texts = {};
    const surfaces = {};
    const borders = {};
    const p = opts.prefix.cssVariable;
    const colored = {
        text: {},
        background: {},
        border: {}
    };
    const rgbaWhite = {
        text: {},
        background: {},
        border: {}
    };
    const rgbaBlack = {
        text: {},
        background: {},
        border: {}
    };
    const misc = {
        text: {
            'text-primary': `var(--${p}primary-color)`,
            'text-white': '#ffffff',
            'text-color': `var(--${p}text-color)`,
            'text-color-secondary': `var(--${p}text-color-secondary)`,
            'bg-primary': `var(--${p}primary-color-text)`,
            'bg-primary-reverse': `var(--${p}primary-color)`
        },
        background: {
            'bg-white': '#ffffff',
            'bg-primary': `var(--${p}primary-color)`,
            'bg-primary-reverse': `var(--${p}primary-color-text)`,
            'surface-ground': `var(--${p}surface-ground)`,
            'surface-section': `var(--s${p}urface-section)`,
            'surface-card': `var(--${p}surface-card)`,
            'surface-overlay': `var(--${p}surface-overlay)`,
            'surface-hover': `var(--${p}surface-hover)`
        },
        border: {
            'border-primary': `var(--${p}primary-color)`,
            'border-white': '#ffffff',
            'surface-hover': `var(--${p}surface-hover)`
        }
    };

    for (let s of surfaceShades) {
        texts['text-' + s] = `var(--${p}surface-${s})`;
        surfaces['surface-' + s] = `var(--${p}surface-${s})`;
        borders['border-' + s] = `var(--${p}surface-${s})`;
    }

    for (let color of colorNames) {
        for (let cs of colorShades) {
            colored.text['text-' + color + '-' + cs] = `var(--${p}${color}-${cs})`;
            colored.background['bg-' + color + '-' + cs] = `var(--${p}${color}-${cs})`;
            colored.border['border-' + color + '-' + cs] = `var(--${p}${color}-${cs})`;
        }
    }

    for (let rgbaShade of rgbaShades) {
        rgbaWhite.text['text-white-alpha-' + rgbaShade] = 'rgba(255,255,255,' + rgbaShade / 100 + ')';
        rgbaWhite.background['bg-white-alpha-' + rgbaShade] = 'rgba(255,255,255,' + rgbaShade / 100 + ')';
        rgbaWhite.border['border-white-alpha-' + rgbaShade] = 'rgba(255,255,255,' + rgbaShade / 100 + ')';
    }

    for (let rgbaShade of rgbaShades) {
        rgbaBlack.text['text-black-alpha-' + rgbaShade] = 'rgba(0,0,0' + rgbaShade / 100 + ')';
        rgbaBlack.background['bg-black-alpha-' + rgbaShade] = 'rgba(0,0,0' + rgbaShade / 100 + ')';
        rgbaBlack.border['border-black-alpha-' + rgbaShade] = 'rgba(0,0,0,' + rgbaShade / 100 + ')';
    }

    function hexToRgba(hex, alpha) {
        const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function generateRgbaValue(colorValue, alpha) {
        let rgbaValue;
        const isRgb = colorValue.startsWith('rgb');

        if (isRgb) {
            const correctedValue = colorValue.replace(/\s+/g, ',');

            rgbaValue = `rgba(${correctedValue.substring(4, correctedValue.length - 1)}, ${alpha})`;
        } else {
            rgbaValue = hexToRgba(colorValue, alpha);
        }

        return rgbaValue;
    }

    function generateClassNamesAndValues(color, cs, rgbaShade, colorValue, alpha, colored) {
        const rgbaValue = generateRgbaValue(colorValue, alpha);
        const classNameSuffix = `\\/${rgbaShade}`;

        colored.text[`text-${color}-${cs}${classNameSuffix}`] = rgbaValue;
        colored.background[`bg-${color}-${cs}${classNameSuffix}`] = rgbaValue;
        colored.border[`border-${color}-${cs}${classNameSuffix}`] = rgbaValue;
    }

    function generateWhiteAndBlackRgbaShades(rgbaShades, rgbaWhite, rgbaBlack) {
        for (let rgbaShade of rgbaShades) {
            const classNameSuffix = `\\/${rgbaShade}`;
            const alphaSuffix = `-alpha-${rgbaShade}`;
            const whiteValue = `rgba(255,255,255,${rgbaShade / 100})`;
            const blackValue = `rgba(0,0,0,${rgbaShade / 100})`;

            rgbaWhite.text[`text-white${classNameSuffix}`] = whiteValue;
            rgbaWhite.background[`bg-white${classNameSuffix}`] = whiteValue;
            rgbaWhite.border[`border-white${classNameSuffix}`] = whiteValue;
            rgbaBlack.text[`text-black${classNameSuffix}`] = blackValue;
            rgbaBlack.background[`bg-black${classNameSuffix}`] = blackValue;
            rgbaBlack.border[`border-black${classNameSuffix}`] = blackValue;
            rgbaWhite.text[`text-white${alphaSuffix}`] = whiteValue;
            rgbaWhite.background[`bg-white${alphaSuffix}`] = whiteValue;
            rgbaWhite.border[`border-white${alphaSuffix}`] = whiteValue;
            rgbaBlack.text[`text-black${alphaSuffix}`] = blackValue;
            rgbaBlack.background[`bg-black${alphaSuffix}`] = blackValue;
            rgbaBlack.border[`border-black${alphaSuffix}`] = blackValue;
        }
    }

    for (let color of colorNames) {
        for (let cs of colorShades) {
            if (opts.themes['primeone-dark'].colors[color][cs]) {
                const colorValue = opts.themes['primeone-dark'].colors[color][cs];

                for (let rgbaShade of rgbaShades) {
                    const alpha = rgbaShade / 100;

                    generateClassNamesAndValues(color, cs, rgbaShade, colorValue, alpha, colored);
                }
            }
        }
    }

    generateWhiteAndBlackRgbaShades(rgbaShades, rgbaWhite, rgbaBlack);

    function generateGradientClasses(type, colorNames, colorShades, rgbaShades, opts) {
        const gradientColors = {};

        for (let color of colorNames) {
            for (let cs of colorShades) {
                const colorValue = opts.themes['primeone-dark'].colors[color][cs];

                if (!colorValue) continue;

                gradientColors[`.${type}-${color}-${cs}`] = `--gradient-${type}: ${colorValue};`;

                for (let rgbaShade of rgbaShades) {
                    const isRgb = colorValue.startsWith('rgb');
                    const alpha = rgbaShade / 100;
                    let rgbaValue;

                    if (isRgb) {
                        const correctedValue = colorValue.replace(/\s+/g, ',');

                        rgbaValue = `rgba(${correctedValue.substring(4, correctedValue.length - 1)}, ${alpha})`;
                    } else {
                        rgbaValue = hexToRgba(colorValue, alpha);
                    }

                    gradientColors[`.${type}-${color}-${cs}\\/${rgbaShade}`] = `--gradient-${type}: ${rgbaValue};`;
                }
            }
        }

        gradientColors[`.${type}-from-to`] = `--gradient-from: var(--${type}-from-color); --gradient-to: var(--${type}-to-color, var(--${type}-from-color)00);`;

        return gradientColors;
    }

    const bgImage = {
        'bg-none': 'none'
    };

    const gradientDirections = {
        'bg-gradient-to-t': 'to top',
        'bg-gradient-to-tr': 'to top right',
        'bg-gradient-to-r': 'to right',
        'bg-gradient-to-br': 'to bottom right',
        'bg-gradient-to-b': 'to bottom',
        'bg-gradient-to-bl': 'to bottom left',
        'bg-gradient-to-l': 'to left',
        'bg-gradient-to-tl': 'to top left'
    };

    const radialGradientDirections = {
        'bg-radial-gradient-to-t': 'at top',
        'bg-radial-gradient-to-tr': 'at top right',
        'bg-radial-gradient-to-r': 'at right',
        'bg-radial-gradient-to-br': 'at bottom right',
        'bg-radial-gradient-to-b': 'at bottom',
        'bg-radial-gradient-to-bl': 'at bottom left',
        'bg-radial-gradient-to-l': 'at left',
        'bg-radial-gradient-to-tl': 'at top left'
    };

    const gradients = {};

    for (let direction in gradientDirections) {
        gradients[
            direction
        ] = `linear-gradient(${gradientDirections[direction]}, var(--gradient-from) var(--gradient-from-percentage, 0%),var(--gradient-via, var(--gradient-from)) var(--gradient-via-percentage, 50%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%))`;
    }

    for (let direction in radialGradientDirections) {
        gradients[
            direction
        ] = `radial-gradient(${radialGradientDirections[direction]}, var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to,var(--gradient-via, var(--gradient-from)) var(--gradient-via-percentage, 50%), var(--gradient-from),transparent) var(--gradient-to-percentage, 100%))`;
    }

    const gradientFromColors = generateGradientClasses('from', colorNames, colorShades, rgbaShades, opts);

    const gradientViaColors = generateGradientClasses('via', colorNames, colorShades, rgbaShades, opts);
    const gradientToColors = generateGradientClasses('to', colorNames, colorShades, rgbaShades, opts);

    function appendGradientRules(gradientColors, root) {
        for (const className in gradientColors) {
            let rule = new Rule({ selector: className });
            const properties = gradientColors[className].split(';');

            properties.forEach((prop) => {
                const [key, value] = prop.split(':');

                if (key && value) {
                    rule.append({ prop: key.trim(), value: value.trim() });
                }
            });
            root.before(rule);
        }
    }

    appendGradientRules(gradientFromColors, root);
    appendGradientRules(gradientToColors, root);
    appendGradientRules(gradientViaColors, root);

    const percentageClasses = {};

    for (let i = 0; i <= 100; i += 10) {
        percentageClasses[`.from-${i}\\%`] = `--gradient-from-percentage: ${i}%;`;
        percentageClasses[`.via-${i}\\%`] = `--gradient-via-percentage: ${i}%;`;
        percentageClasses[`.to-${i}\\%`] = `--gradient-to-percentage: ${i}%;`;
    }

    for (const className in percentageClasses) {
        let rule = new Rule({ selector: className });
        const properties = percentageClasses[className].split(';');

        properties.forEach((prop) => {
            const [key, value] = prop.split(':');

            if (key && value) {
                rule.append({ prop: key.trim(), value: value.trim() });
            }
        });
        root.before(rule);
    }

    styleClass('background-image', gradients, root, opts, true, true);
    styleClass('background-image', bgImage, root, opts, true, true);
    //surfaces
    styleClass('color', texts, root, opts, true, true);
    styleClass('background-color', surfaces, root, opts, true, true);
    styleClass('border-color', borders, root, opts, true, true);

    //transparent
    styleClass('background-color', { 'bg-transparent': 'transparent' }, root, opts, true, true);
    styleClass('border-color', { 'border-transparent': 'transparent' }, root, opts, true, true);

    //palette
    styleClass('color', colored.text, root, opts, true, true);
    styleClass('background-color', colored.background, root, opts, true, true);
    styleClass('border-color', colored.border, root, opts, true, true);

    //rgba
    styleClass('color', rgbaWhite.text, root, opts, true, true);
    styleClass('background-color', rgbaWhite.background, root, opts, true, true);
    styleClass('border-color', rgbaWhite.border, root, opts, true, true);
    styleClass('color', rgbaBlack.text, root, opts, true, true);
    styleClass('background-color', rgbaBlack.background, root, opts, true, true);
    styleClass('border-color', rgbaBlack.border, root, opts, true, true);

    //misc
    styleClass('color', misc.text, root, opts, true, true);
    styleClass('background-color', misc.background, root, opts, true, true);
    styleClass('border-color', misc.border, root, opts, true, true);
};
