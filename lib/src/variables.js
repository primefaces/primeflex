const { Rule } = require('postcss');

const addTheme = (name, theme, root, opts) => {
    const selector = theme.default ? ':root' : `[data-pf-theme="${theme.name || name}"]`;
    const rule = new Rule({ selector });
    const p = opts.prefix.cssVariable;
    const colors = { ...opts.colors, ...theme.colors };

    rule.append({ prop: `--${p}text-primary`, value: colors.text.primary });
    rule.append({ prop: `--${p}text-secondary`, value: colors.text.primary });

    rule.append({ prop: `--${p}border-radius`, value: theme.borderRadius });

    rule.append({ prop: `--${p}primary-color`, value: colors.primary.main });
    rule.append({ prop: `--${p}primary-color-invert`, value: colors.primary.invert });

    // Legacy properties
    rule.append({ prop: `--${p}text-color`, value: colors.text.primary });
    rule.append({ prop: `--${p}text-color-secondary`, value: colors.text.primary });
    rule.append({ prop: `--${p}primary-color-text`, value: colors.primary.invert });

    for (let color in colors) {
        if (color !== 'text') {
            for (let shade in colors[color]) {
                rule.append({ prop: `--${p}${color}-${shade}`, value: colors[color][shade] });
            }
        }
    }

    rule.append({ prop: `color-scheme`, value: theme.colorScheme });

    root.before(rule);
};

module.exports = (root, opts) => {
    for (let themeName in opts.themes) {
        // Pass the theme name to the addTheme function
        addTheme(themeName, opts.themes[themeName], root, opts);
    }
};
