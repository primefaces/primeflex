const { Rule } = require('postcss');

module.exports = (root, opts) => {
    const p = opts.prefix.className;
    const _important = opts.important;
    const { formLayout } = opts;
    const cols = ['col-fixed', 'col', 'col-1', 'col-2', 'col-3', 'col-4', 'col-5', 'col-6', 'col-7', 'col-8', 'col-9', 'col-10', 'col-11', 'col-12'];

    let rule = new Rule({ selector: `.${p}field` });

    rule.append({ prop: 'margin-bottom', value: formLayout.fieldGap, important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}field > label` });
    rule.append({ prop: 'display', value: 'inline-block', important: _important });
    rule.append({ prop: 'margin-bottom', value: formLayout.fieldLabelGap, important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}field.${p}grid > label` });
    rule.append({ prop: 'display', value: 'flex', important: _important });
    rule.append({ prop: 'align-items', value: 'center', important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}field > small` });
    rule.append({ prop: 'margin-top', value: formLayout.helperTextGap, important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}field.${p}grid` });
    rule.append({ prop: 'margin-top', value: '0', important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}formgrid.${p}grid` });
    rule.append({ prop: 'margin-top', value: '0', important: _important });
    root.before(rule);

    for (let col of cols) {
        rule = new Rule({ selector: `.${p}field.${p}grid .${p}${col}` });
        rule.append({ prop: 'padding-top', value: '0', important: _important });
        rule.append({ prop: 'padding-bottom', value: '0', important: _important });
        root.before(rule);

        rule = new Rule({ selector: `.${p}formgrid.${p}grid .${p}${col}` });
        rule.append({ prop: 'padding-top', value: '0', important: _important });
        rule.append({ prop: 'padding-bottom', value: '0', important: _important });
        root.before(rule);
    }

    rule = new Rule({ selector: `.${p}formgroup-inline` });
    rule.append({ prop: 'display', value: 'flex', important: _important });
    rule.append({ prop: 'flex-wrap', value: 'wrap', important: _important });
    rule.append({ prop: 'align-items', value: 'flex-start', important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}formgroup-inline .${p}field` });
    rule.append({ prop: 'margin-right', value: formLayout.fieldGap, important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}formgroup-inline .${p}field-checkbox` });
    rule.append({ prop: 'margin-right', value: formLayout.fieldGap, important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}formgroup-inline .${p}field-radiobutton` });
    rule.append({ prop: 'margin-right', value: formLayout.fieldGap, important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}formgroup-inline .${p}field > label` });
    rule.append({ prop: 'margin-right', value: formLayout.fieldLabelGap, important: _important });
    rule.append({ prop: 'margin-bottom', value: '0', important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}formgroup-inline .${p}field-checkbox > label` });
    rule.append({ prop: 'margin-right', value: formLayout.fieldLabelGap, important: _important });
    rule.append({ prop: 'margin-bottom', value: '0', important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}formgroup-inline .${p}field-radiobutton > label` });
    rule.append({ prop: 'margin-right', value: formLayout.fieldLabelGap, important: _important });
    rule.append({ prop: 'margin-bottom', value: '0', important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}field-checkbox` });
    rule.append({ prop: 'margin-right', value: formLayout.fieldGap, important: _important });
    rule.append({ prop: 'display', value: 'flex', important: _important });
    rule.append({ prop: 'align-items', value: 'center', important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}field-radiobutton` });
    rule.append({ prop: 'margin-right', value: formLayout.fieldGap, important: _important });
    rule.append({ prop: 'display', value: 'flex', important: _important });
    rule.append({ prop: 'align-items', value: 'center', important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}field-checkbox > label` });
    rule.append({ prop: 'margin-left', value: formLayout.fieldLabelGap, important: _important });
    rule.append({ prop: 'line-height', value: '1', important: _important });
    root.before(rule);

    rule = new Rule({ selector: `.${p}field-radiobutton > label` });
    rule.append({ prop: 'margin-left', value: formLayout.fieldLabelGap, important: _important });
    rule.append({ prop: 'line-height', value: '1', important: _important });
    root.before(rule);
};
