const surfaceShades = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const rgbaShades = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function getColors(shadeType = '', classNamePrefix = '', cssVariablePrefix = '', scopedCssVariable, hasRgba = true) {
    const shades = shadeType === 'surface' ? surfaceShades : colorShades;
    let classes = {};

    for (let shade of shades) {
        const className = `${classNamePrefix}${shade}`;
        const value = `var(--${cssVariablePrefix}${shade})`;

        classes[`${className}`] = scopedCssVariable ? `${scopedCssVariable}: ${value}` : value;

        if (hasRgba) {
            for (let rgba of rgbaShades) {
                const rgbaValue = `color-mix(in srgb, ${value}, ${rgba / 100}%, transparent)`;

                classes[`${className}\\/${rgba}`] = scopedCssVariable ? `${scopedCssVariable}: ${rgbaValue}` : rgbaValue;
            }
        }
    }

    return classes;
}

function getThemeColors(themes, classNamePrefix = '', cssVariablePrefix = '', scopedCssVariable, hasRgba = true) {
    let classes = {};

    for (let themeName in themes) {
        if (themes.hasOwnProperty(themeName)) {
            let colorNames = Object.keys(themes[themeName].colors);

            for (let color of colorNames) {
                Object.assign(classes, getColors(color, `${classNamePrefix}${color}-`, `${cssVariablePrefix}${color}-`, scopedCssVariable, hasRgba));
            }
        }
    }

    return classes;
}

function getWhiteAndBlackRgbaColors(classNamePrefix = '', scopedCssVariable) {
    let classes = {};

    for (let rgbaShade of rgbaShades) {
        const classNameSuffix = `\\/${rgbaShade}`;
        const alphaSuffix = `-alpha-${rgbaShade}`;
        const whiteColor = `color-mix(in srgb, #ffffff ${rgbaShade}%, transparent)`;
        const blackColor = `color-mix(in srgb, #000000 ${rgbaShade}%, transparent)`;
        const whiteValue = scopedCssVariable ? `${scopedCssVariable}: ${whiteColor}` : whiteColor;
        const blackValue = scopedCssVariable ? `${scopedCssVariable}: ${blackColor}` : blackColor;

        classes[`${classNamePrefix}white${classNameSuffix}`] = whiteValue;
        classes[`${classNamePrefix}white${alphaSuffix}`] = whiteValue;
        classes[`${classNamePrefix}black${classNameSuffix}`] = blackValue;
        classes[`${classNamePrefix}black${alphaSuffix}`] = blackValue;
    }

    return classes;
}

module.exports = {
    surfaceShades,
    colorShades,
    rgbaShades,
    getColors,
    getThemeColors,
    getWhiteAndBlackRgbaColors
};
