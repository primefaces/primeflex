const { Rule, AtRule } = require('postcss');
const { styleClass } = require('../utils');

const addCols = (widths, element, opts, breakpoint) => {
    const _important = opts.important;
    const prefix = opts.prefix.className;
    let colRule = new Rule({ selector: `.${breakpoint}${prefix}col` });

    colRule.append({ prop: 'flex-grow', value: '1', important: _important });
    colRule.append({ prop: 'flex-basis', value: '0', important: _important });
    colRule.append({ prop: 'padding', value: opts.grid.gap, important: _important });
    if (breakpoint) element.append(colRule);
    else element.before(colRule);

    let colFixedRule = new Rule({ selector: `.${breakpoint}${prefix}col-fixed` });

    colFixedRule.append({ prop: 'flex', value: '0 0 auto', important: _important });
    colFixedRule.append({ prop: 'padding', value: opts.grid.gap, important: _important });
    if (breakpoint) element.append(colFixedRule);
    else element.before(colFixedRule);

    for (let i = 0; i < widths.length; i++) {
        let rule = new Rule({ selector: `.${breakpoint}${prefix}col-${i + 1}` });

        rule.append({ prop: 'flex', value: '0 0 auto', important: _important });
        rule.append({ prop: 'padding', value: opts.grid.gap, important: _important });
        rule.append({ prop: 'width', value: widths[i], important: _important });
        if (breakpoint) element.append(rule);
        else element.before(rule);
    }
};

module.exports = (root, opts) => {
    const p = opts.prefix.className;
    const { important, separator, breakpoints } = opts;
    const widths = ['8.3333%', '16.6667%', '25%', '33.3333%', '41.6667%', '50%', '58.3333%', '66.6667%', '75%', '83.3333%', '91.6667%', '100%'];
    let offsetWidths = { 'col-offset-0': '0' };

    widths.map((w, i) => (offsetWidths['col-offset-' + (i + 1)] = w));

    //grid
    let rule = new Rule({ selector: `.${p}grid` });

    rule.append({ prop: 'display', value: 'flex', important: important });
    rule.append({ prop: 'flex-wrap', value: 'wrap', important: important });
    rule.append({ prop: 'margin-left', value: '-' + opts.grid.gap, important: important });
    rule.append({ prop: 'margin-right', value: '-' + opts.grid.gap, important: important });
    rule.append({ prop: 'margin-top', value: '-' + opts.grid.gap, important: important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}grid > .${p}col` });
    rule.append({ prop: 'box-sizing', value: 'border-box', important: important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}grid > [class*=${p}col]` });
    rule.append({ prop: 'box-sizing', value: 'border-box', important: important });
    root.before(rule);

    //nogutter
    rule = new Rule({ selector: `.${p}grid-nogutter` });
    rule.append({ prop: 'margin-left', value: '0', important: important });
    rule.append({ prop: 'margin-right', value: '0', important: important });
    rule.append({ prop: 'margin-top', value: '0', important: important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}grid-nogutter > .${p}col` });
    rule.append({ prop: 'padding', value: '0', important: important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}grid-nogutter > [class*=${p}col]` });
    rule.append({ prop: 'padding', value: '0', important: important });
    root.before(rule);

    //columns
    addCols(widths, root, opts, '');

    for (const key in breakpoints) {
        let media = new AtRule({ name: 'media', params: `screen and (min-width: ${breakpoints[key]})` });

        addCols(widths, media, opts, key + separator);
        root.before(media);
    }

    //offsets
    styleClass('margin-left', offsetWidths, root, opts, true);
};
