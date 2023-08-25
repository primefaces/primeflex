const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const appearance = {
        'appearance-none': 'none'
    };

    const pointerEvents = {
        'pointer-events-none': 'none',
        'pointer-events-auto': 'auto'
    };

    const cursor = {
        'cursor-auto': 'auto',
        'cursor-default': 'default',
        'cursor-pointer': 'pointer',
        'cursor-wait': 'wait',
        'cursor-move': 'move',
        'cursor-help': 'help',
        'cursor-text': 'text',
        'cursor-vertical-text': 'vertical-text',
        'cursor-alias': 'alias',
        'cursor-copy': 'copy',
        'cursor-no-drop': 'no-drop',
        'cursor-not-allowed': 'not-allowed',
        'cursor-grab': 'grab',
        'cursor-grabbing': 'grabbing',
        'cursor-col-resize': 'col-resize',
        'cursor-row-resize': 'row-resize',
        'cursor-n-resize': 'n-resize',
        'cursor-e-resize': 'e-resize',
        'cursor-s-resize': 's-resize',
        'cursor-w-resize': 'w-resize',
        'cursor-ne-resize': 'ne-resize',
        'cursor-nw-resize': 'nw-resize',
        'cursor-se-resize': 'se-resize',
        'cursor-sw-resize': 'sw-resize',
        'cursor-ew-resize': 'ew-resize',
        'cursor-ns-resize': 'ns-resize',
        'cursor-nesw-resize': 'nesw-resize',
        'cursor-nwse-resize': 'nwse-resize',
        'cursor-zoom-in': 'zoom-in',
        'cursor-zoom-out': 'zoom-out',
    };

    const userSelect = {
        'select-none': 'none',
        'select-text': 'text',
        'select-all': 'all',
        'select-auto': 'auto'
    };

    const opacity = {
        'opacity-0': '0',
        'opacity-10': '.1',
        'opacity-20': '.2',
        'opacity-30': '.3',
        'opacity-40': '.4',
        'opacity-50': '.5',
        'opacity-60': '.6',
        'opacity-70': '.7',
        'opacity-80': '.8',
        'opacity-90': '.9',
        'opacity-100': '1'
    };

    const boxSizing = {
        'box-border': 'border-box',
        'box-content': 'content-box',
    };

    styleClass('appearance', appearance, root, opts);
    styleClass('pointer-events', pointerEvents, root, opts);
    styleClass('cursor', cursor, root, opts);
    styleClass('user-select', userSelect, root, opts);
    styleClass('opacity', opacity, root, opts, true, true);
    styleClass('box-sizing', boxSizing, root, opts);
}