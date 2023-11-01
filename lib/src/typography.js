const { styleClass } = require('./utils');

module.exports = (root, opts) => {
    const fontFamilyProps = {
        'font-sans': 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        'font-serif': 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        'font-mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    };

    const textAlignProps = {
        'text-center': 'center',
        'text-justify': 'justify',
        'text-left': 'left',
        'text-right': 'right',
        'text-start': 'start',
        'text-end': 'end'
    };

    const textDecorationProps = {
        underline: 'underline',
        'line-through': 'line-through',
        'no-underline': 'none'
    };

    const textTransformProps = {
        lowercase: 'lowercase',
        uppercase: 'uppercase',
        capitalize: 'capitalize'
    };

    const textOverflowProps = {
        'text-overflow-clip': 'clip',
        'text-overflow-ellipsis': 'ellipsis'
    };

    const fontWeightProps = {
        'font-thin': '100',
        'font-extralight': '200',
        'font-light': '300',
        'font-normal': '400',
        'font-medium': '500',
        'font-semibold': '600',
        'font-bold': '700',
        'font-extrabold': '800',
        'font-black': '900'
    };

    const fontStyleProps = {
        'font-italic': 'italic'
    };

    const fontSizeProps = {
        'text-xs': '.75rem',
        'text-sm': '.875rem',
        'text-base': '1rem',
        'text-lg': '1.125rem',
        'text-xl': '1.25rem',
        'text-2xl': '1.5rem',
        'text-3xl': '1.75rem',
        'text-4xl': '2rem',
        'text-5xl': '2.5rem',
        'text-6xl': '3rem',
        'text-7xl': '4rem',
        'text-8xl': '6rem'
    };

    const lineHeightProps = {
        'line-height-1': '1',
        'line-height-2': '1.25',
        'line-height-3': '1.5',
        'line-height-4': '2'
    };

    const whiteSpaceProps = {
        'white-space-normal': 'normal',
        'white-space-nowrap': 'nowrap'
    };

    const verticalAlignProps = {
        'vertical-align-baseline': 'baseline',
        'vertical-align-top': 'top',
        'vertical-align-middle': 'middle',
        'vertical-align-bottom': 'bottom',
        'vertical-align-text-top': 'text-top',
        'vertical-align-text-bottom': 'text-bottom',
        'vertical-align-sub': 'sub',
        'vertical-align-super': 'super'
    };

    styleClass('text-align', textAlignProps, root, opts, true);
    styleClass('text-decoration', textDecorationProps, root, opts, true, true);
    styleClass('text-transform', textTransformProps, root, opts, true);
    styleClass('text-overflow', textOverflowProps, root, opts, true);
    styleClass('font-family', fontFamilyProps, root, opts, true);
    styleClass('font-weight', fontWeightProps, root, opts, true);
    styleClass('font-style', fontStyleProps, root, opts, true);
    styleClass('font-size', fontSizeProps, root, opts, true);
    styleClass('line-height', lineHeightProps, root, opts, true);
    styleClass('white-space', whiteSpaceProps, root, opts, true);
    styleClass('vertical-align', verticalAlignProps, root, opts, true);
};
