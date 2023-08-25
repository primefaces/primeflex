const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const flexDirection = {
        'flex-row': 'row',
        'flex-row-reverse': 'row-reverse',
        'flex-column': 'column',
        'flex-column-reverse': 'column-reverse'
    };

    const flexWrap = {
        'flex-wrap': 'wrap',
        'flex-wrap-reverse': 'wrap-reverse',
        'flex-nowrap': 'nowrap'
    };

    const justifyContent = {
        'justify-content-start': 'flex-start',
        'justify-content-end': 'flex-end',
        'justify-content-center': 'center',
        'justify-content-between': 'space-between',
        'justify-content-around': 'space-around',
        'justify-content-evenly': 'space-evenly'
    };

    const alignContent = {
        'align-content-start': 'flex-start',
        'align-content-end': 'flex-end',
        'align-content-center': 'center',
        'align-content-between': 'space-between',
        'align-content-around': 'space-around',
        'align-content-evenly': 'space-evenly'
    };

    const alignItems = {
        'align-items-stretch': 'stretch',
        'align-items-start': 'flex-start',
        'align-items-center': 'center',
        'align-items-end': 'flex-end',
        'align-items-baseline': 'baseline'
    };

    const alignSelf = {
        'align-self-auto': 'auto',
        'align-self-start': 'flex-start',
        'align-self-end': 'flex-end',
        'align-self-center': 'center',
        'align-self-stretch': 'stretch',
        'align-self-baseline': 'baseline'
    };

    const order = {
        'flex-order-0': '0',
        'flex-order-1': '1',
        'flex-order-2': '2',
        'flex-order-3': '3',
        'flex-order-4': '4',
        'flex-order-5': '5',
        'flex-order-6': '6'
    };

    const flex = {
        'flex-1': '1 1 0%',
        'flex-auto': '1 1 auto',
        'flex-initial': '0 1 auto',
        'flex-none': 'none'
    };

    const flexGrow = {
        'flex-grow-0': 0,
        'flex-grow-1': 1
    };

    const flexShrink = {
        'flex-shrink-0': 0,
        'flex-shrink-1': 1
    };   

    styleClass('flex-direction', flexDirection, root, opts, true);
    styleClass('flex-wrap', flexWrap, root, opts, true);
    styleClass('justify-content', justifyContent, root, opts, true);
    styleClass('align-content', alignContent, root, opts, true);
    styleClass('align-items', alignItems, root, opts, true);
    styleClass('align-self', alignSelf, root, opts, true);
    styleClass('order', order, root, opts, true);
    styleClass('flex', flex, root, opts, true);
    styleClass('flex-grow', flexGrow, root, opts, true);
    styleClass('flex-shrink', flexShrink, root, opts, true);
}