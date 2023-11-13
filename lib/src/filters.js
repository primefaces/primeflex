const { styleClass } = require('./utils');

module.exports = (root, opts) => {
    const blurProps = {
        'blur-none': 'none',
        'blur-xs': 'blur(1px)',
        'blur-sm': 'blur(2px)',
        blur: 'blur(4px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(16px)',
        'blur-xl': 'blur(24px)',
        'blur-2xl': 'blur(40px)',
        'blur-3xl': 'blur(64px)'
    };

    const brightnessProps = {
        'brightness-0': 'brightness(0)',
        'brightness-50': 'brightness(0.5)',
        'brightness-75': 'brightness(0.75)',
        'brightness-90': 'brightness(0.9)',
        'brightness-100': 'brightness(1)',
        'brightness-105': 'brightness(1.05)',
        'brightness-110': 'brightness(1.1)',
        'brightness-125': 'brightness(1.25)',
        'brightness-150': 'brightness(1.5)',
        'brightness-200': 'brightness(2)'
    };

    const contrastProps = {
        'contrast-0': 'contrast(0)',
        'contrast-50': 'contrast(0.5)',
        'contrast-75': 'contrast(0.75)',
        'contrast-100': 'contrast(1)',
        'contrast-125': 'contrast(1.25)',
        'contrast-150': 'contrast(1.5)',
        'contrast-200': 'contrast(2)'
    };

    const grayscaleProps = {
        grayscale: 'grayscale(1)',
        'grayscale-0': 'grayscale(0)',
        'grayscale-50': 'grayscale(0.5)',
        'grayscale-75': 'grayscale(0.75)',
        'grayscale-100': 'grayscale(1)'
    };

    const hueRotateProps = {
        'hue-rotate-0': 'hue-rotate(0deg)',
        'hue-rotate-15': 'hue-rotate(15deg)',
        'hue-rotate-30': 'hue-rotate(30deg)',
        'hue-rotate-45': 'hue-rotate(45deg)',
        'hue-rotate-60': 'hue-rotate(60deg)',
        'hue-rotate-75': 'hue-rotate(75deg)',
        'hue-rotate-90': 'hue-rotate(90deg)',
        'hue-rotate-105': 'hue-rotate(105deg)',
        'hue-rotate-120': 'hue-rotate(120deg)',
        'hue-rotate-135': 'hue-rotate(135deg)',
        'hue-rotate-150': 'hue-rotate(150deg)',
        'hue-rotate-165': 'hue-rotate(165deg)',
        'hue-rotate-180': 'hue-rotate(180deg)'
    };

    const invertProps = {
        'invert-0': 'invert(0)',
        invert: 'invert(1)'
    };

    const saturateProps = {
        'saturate-0': 'saturate(0)',
        'saturate-50': 'saturate(0.5)',
        'saturate-100': 'saturate(1)',
        'saturate-150': 'saturate(1.5)',
        'saturate-200': 'saturate(2)'
    };

    const sepiaProps = {
        sepia: 'sepia(100%)',
        'sepia-0': 'sepia(0)',
        'sepia-50': 'sepia(50%)'
    };

    const dropShadowProps = {
        'drop-shadow-none': 'drop-shadow(0 0 0 transparent)',
        'drop-shadow-1': 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.06))',
        'drop-shadow-2': 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.08))',
        'drop-shadow-3': 'drop-shadow(0 4px 7px rgba(0, 0, 0, 0.09)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))',
        'drop-shadow-4': 'drop-shadow(0 10px 16px rgba(0, 0, 0, 0.1)) drop-shadow(0 5px 7px rgba(0, 0, 0, 0.07))',
        'drop-shadow-5': 'drop-shadow(0 11px 17px rgba(0, 0, 0, 0.1)) drop-shadow(0 5px 8px rgba(0, 0, 0, 0.08))',
        'drop-shadow-6': 'drop-shadow(0 20px 26px rgba(0, 0, 0, 0.11)) drop-shadow(0 9px 11px rgba(0, 0, 0, 0.08))',
        'drop-shadow-7': 'drop-shadow(0 25px 30px rgba(0, 0, 0, 0.12)) drop-shadow(0 10px 15px rgba(0, 0, 0, 0.09))',
        'drop-shadow-8': 'drop-shadow(0 30px 35px rgba(0, 0, 0, 0.13)) drop-shadow(0 15px 20px rgba(0, 0, 0, 0.10))'
    };

    function addBackdropPrefix(props) {
        const backdropProps = {};

        for (const key in props) {
            backdropProps['backdrop-' + key] = props[key];
        }

        return backdropProps;
    }

    styleClass('filter', blurProps, root, opts, true, true);
    styleClass('filter', brightnessProps, root, opts, true, true);
    styleClass('filter', contrastProps, root, opts, true, true);
    styleClass('filter', grayscaleProps, root, opts, true, true);
    styleClass('filter', hueRotateProps, root, opts, true, true);
    styleClass('filter', invertProps, root, opts, true, true);
    styleClass('filter', saturateProps, root, opts, true, true);
    styleClass('filter', sepiaProps, root, opts, true, true);
    styleClass('filter', dropShadowProps, root, opts, true, true);

    styleClass('backdrop-filter', addBackdropPrefix(blurProps), root, opts, true, true);
    styleClass('backdrop-filter', addBackdropPrefix(brightnessProps), root, opts, true, true);
    styleClass('backdrop-filter', addBackdropPrefix(contrastProps), root, opts, true, true);
    styleClass('backdrop-filter', addBackdropPrefix(grayscaleProps), root, opts, true, true);
    styleClass('backdrop-filter', addBackdropPrefix(hueRotateProps), root, opts, true, true);
    styleClass('backdrop-filter', addBackdropPrefix(invertProps), root, opts, true, true);
    styleClass('backdrop-filter', addBackdropPrefix(saturateProps), root, opts, true, true);
    styleClass('backdrop-filter', addBackdropPrefix(sepiaProps), root, opts, true, true);
};
