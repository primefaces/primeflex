const { Rule, AtRule } = require('postcss');

function getSelector(selector, themeName) {
    return themeName ? `:is([data-pf-theme="${themeName}"] .${themeName}\\:${selector})` : `.${selector}`;
}

function getThemes(opts = {}) {
    const themes = opts.themes || {};
    const themeKeys = Object.keys(themes) || [];
    const defaultThemeKey = themeKeys.find((key) => (themeKeys[key] ? themeKeys[key].default : false)) || themeKeys[0];
    const themeNames = themeKeys.map((key) => (defaultThemeKey === key ? '' : themes[key].name || key));

    return {
        themeNames,
        then(fn) {
            themeNames.forEach(fn);
        },
        always(fn) {
            themeNames.length ? themeNames.forEach(fn) : fn('');
        }
    };
}

function styleClass(propName, obj, parent, opts, responsive, states, withTheme) {
    const _styleClass = function (themeName) {
        const p = opts.prefix.className;
        const { important, separator, breakpoints } = opts;
        const pseudoStates = ['focus', 'hover', 'active'];
        const propNames = Array.isArray(propName) ? propName : [propName];

        for (const className in obj) {
            let rule = new Rule({ selector: getSelector(`${p}${className}`, themeName) });

            propNames.forEach((p) => rule.append({ prop: p, value: obj[className], important: important }));
            parent.before(rule);
        }

        if (states) {
            for (const className in obj) {
                for (const pseudo_state of pseudoStates) {
                    let rule = new Rule({ selector: getSelector(`${pseudo_state}${separator}${p}${className}:${pseudo_state}`, themeName) });

                    propNames.forEach((p) => rule.append({ prop: p, value: obj[className], important: important }));
                    parent.before(rule);
                }
            }
        }

        if (responsive) {
            for (const breakpoint in breakpoints) {
                let media = new AtRule({ name: 'media', params: `screen and (min-width: ${breakpoints[breakpoint]})` });

                for (const className in obj) {
                    let rule = new Rule({ selector: getSelector(`${breakpoint}${separator}${p}${className}`, themeName) });

                    propNames.forEach((p) => rule.append({ prop: p, value: obj[className], important }));
                    media.append(rule);
                }

                if (states) {
                    for (const className in obj) {
                        for (const pseudo_state of pseudoStates) {
                            let rule = new Rule({ selector: getSelector(`${breakpoint}${separator}${pseudo_state}${separator}${p}${className}:${pseudo_state}`, themeName) });

                            propNames.forEach((p) => rule.append({ prop: p, value: obj[className], important }));
                            media.append(rule);
                        }
                    }
                }

                parent.before(media);
            }
        }
    };

    withTheme ? getThemes(opts).always(_styleClass) : _styleClass(undefined);
}

function appendRules(root, opts, classNames) {
    for (const className in classNames) {
        const rule = new Rule({ selector: getSelector(`${className}`) });
        const properties = classNames[className].split(';');

        properties.forEach((prop) => {
            const [key, value] = prop.split(':');

            if (key && value) {
                rule.append({ prop: key.trim(), value: value.trim() });
            }
        });
        root.before(rule);
    }
}

module.exports = {
    styleClass,
    appendRules
};
