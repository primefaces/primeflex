const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const allProps = {
        'all-initial': 'initial',
        'all-inherit': 'inherit',
        'all-unset': 'unset'
    };

    styleClass('all', allProps, root, opts, true);
}