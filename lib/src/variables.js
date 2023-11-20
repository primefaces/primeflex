const { Rule } = require('postcss');

// @todo
const addColors = (colors, root, opts) => {};

const addTheme = (name, theme, root, opts) => {
    const selector = theme.default ? ':root' : `[data-pf-theme="${theme.name || name}"]`;
    const rule = new Rule({ selector });
    const p = opts.prefix.cssVariable;

    rule.append({ prop: `--${p}text-primary`, value: theme.colors.text.primary });
    rule.append({ prop: `--${p}text-secondary`, value: theme.colors.text.primary });

    rule.append({ prop: `--${p}border-radius`, value: theme.borderRadius });

    rule.append({ prop: `--${p}primary-color`, value: theme.colors.primary.main });
    rule.append({ prop: `--${p}primary-color-invert`, value: theme.colors.primary.invert });

    // Legacy properties
    rule.append({ prop: `--${p}text-color`, value: theme.colors.text.primary });
    rule.append({ prop: `--${p}text-color-secondary`, value: theme.colors.text.primary });
    rule.append({ prop: `--${p}primary-color-text`, value: theme.colors.primary.invert });

    for (let color in theme.colors) {
        if (color !== 'text') {
            for (let shade in theme.colors[color]) {
                rule.append({ prop: `--${p}${color}-${shade}`, value: theme.colors[color][shade] });
            }
        }
    }

    rule.append({ prop: `color-scheme`, value: theme.colorScheme });

    root.before(rule);
};

module.exports = (root, opts) => {
    // @todo
    if (opts.inheritThemes) {
        for (let themeName in opts.themes) {
            // Pass the theme name to the addTheme function
            addTheme(themeName, opts.themes[themeName], root, opts);
        }
    }
};
