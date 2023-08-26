const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const displayProps = {
        'hidden': 'none',
        'block': 'block',
        'inline': 'inline',
        'inline-block': 'inline-block',
        'flex': 'flex',
        'inline-flex': 'inline-flex'
    };

    styleClass('display', displayProps, root, opts, true);
}