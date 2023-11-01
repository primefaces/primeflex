const { Rule, AtRule } = require('postcss');
const { styleClass } = require('./utils');

const addBorder = (values, edge, element, opts, breakpoint) => {
    const p = opts.prefix.className;

    for (let value of values) {
        let rule = new Rule({ selector: `.${breakpoint}${p}border-${edge ? edge + '-' : ''}${value.name}` });

        if (!edge) {
            rule.append({ prop: 'border-style', value: value.style, important: opts.important });
            rule.append({ prop: 'border-width', value: value.width, important: opts.important });
        } else {
            if (edge === 'x') {
                rule.append({ prop: `border-left-width`, value: value.width, important: opts.important });
                rule.append({ prop: `border-left-style`, value: value.style, important: opts.important });
                rule.append({ prop: `border-right-width`, value: value.width, important: opts.important });
                rule.append({ prop: `border-right-style`, value: value.style, important: opts.important });
            } else if (edge === 'y') {
                rule.append({ prop: `border-top-width`, value: value.width, important: opts.important });
                rule.append({ prop: `border-top-style`, value: value.style, important: opts.important });
                rule.append({ prop: `border-bottom-width`, value: value.width, important: opts.important });
                rule.append({ prop: `border-bottom-style`, value: value.style, important: opts.important });
            } else {
                rule.append({ prop: `border-${edge}-style`, value: value.style, important: opts.important });
                rule.append({ prop: `border-${edge}-width`, value: value.width, important: opts.important });
            }
        }

        if (breakpoint) element.append(rule);
        else element.before(rule);
    }
};

module.exports = (root, opts) => {
    const { separator, breakpoints } = opts;
    const borderStyles = {
        'border-solid': 'solid',
        'border-dashed': 'dashed',
        'border-dotted': 'dotted',
        'border-double': 'double'
    };
    const values = [
        { name: 'none', width: 0, style: 'none' },
        { name: '1', width: 1, style: 'solid' },
        { name: '2', width: 2, style: 'solid' },
        { name: '3', width: 3, style: 'solid' }
    ];
    const edges = ['top', 'right', 'bottom', 'left', 'x', 'y'];

    addBorder(values, '', root, opts, '');
    edges.map((edge) => addBorder(values, edge, root, opts, ''));

    for (const key in breakpoints) {
        let media = new AtRule({ name: 'media', params: `screen and (min-width: ${breakpoints[key]})` });

        addBorder(values, '', media, opts, key + separator);
        edges.map((edge) => addBorder(values, edge, media, opts, key + separator));
        root.before(media);
    }

    styleClass('border-style', borderStyles, root, opts, true);
};
