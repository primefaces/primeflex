const { styleClass } = require("./utils");

module.exports = (root, opts) => {
    const surfaceShades = [0,50,100,200,300,400,500,600,700,800,900];
    const colorShades = [50,100,200,300,400,500,600,700,800,900];
    const rgbaShades = [10,20,30,40,50,60,70,80,90];
    const colorNames = ['blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'teal', 'orange', 'bluegray', 'purple', 'gray', 'red', 'primary'];
    const texts = {};
    const surfaces = {}
    const borders = {};
    const p = opts.prefix.cssVariable;
    const colored = {
        text: {},
        background: {},
        border: {}
    }
    const rgbaWhite = {
        text: {},
        background: {},
        border: {}
    };
    const rgbaBlack = {
        text: {},
        background: {},
        border: {}
    }
    const misc = {
        text: {
            'text-primary': `var(--${p}primary-color)`,
            'text-white': '#ffffff',
            'text-color': `var(--${p}text-color)`,
            'text-color-secondary': `var(--${p}text-color-secondary)`,
            'bg-primary': `var(--${p}primary-color-text)`,
            'bg-primary-reverse': `var(--${p}primary-color)`
        },
        background: {
            'bg-white': '#ffffff',
            'bg-primary': `var(--${p}primary-color)`,
            'bg-primary-reverse': `var(--${p}primary-color-text)`,
            'surface-ground': `var(--${p}surface-ground)`,
            'surface-section': `var(--s${p}urface-section)`,
            'surface-card': `var(--${p}surface-card)`,
            'surface-overlay': `var(--${p}surface-overlay)`,
            'surface-hover': `var(--${p}surface-hover)`
        },
        border: {
            'border-primary': `var(--${p}primary-color)`,
            'border-white': '#ffffff',
            'surface-hover': `var(--${p}surface-hover)`
        }
    }

    for (let s of surfaceShades) {
        texts['text-' + s] = `var(--${p}surface-${s})`;
        surfaces['surface-' + s] = `var(--${p}surface-${s})`;
        borders['border-' + s] = `var(--${p}surface-${s})`;
    }

    for (let color of colorNames) {
        for (let cs of colorShades) {
            colored.text['text-' + color + '-' + cs] = `var(--${p}${color}-${cs})`;
            colored.background['bg-' + color + '-' + cs] = `var(--${p}${color}-${cs})`;
            colored.border['border-' + color + '-' + cs] = `var(--${p}${color}-${cs})`;
        }
    }

    for (let rgbaShade of rgbaShades) {
        rgbaWhite.text['text-white-alpha-' + rgbaShade] = 'rgba(255,255,255,' + (rgbaShade / 100) + ')';
        rgbaWhite.background['bg-white-alpha-' + rgbaShade] = 'rgba(255,255,255,' + (rgbaShade / 100) + ')';
        rgbaWhite.border['border-white-alpha-' + rgbaShade] = 'rgba(255,255,255,' + (rgbaShade / 100) + ')';
    }

    for (let rgbaShade of rgbaShades) {
        rgbaBlack.text['text-black-alpha-' + rgbaShade] = 'rgba(0,0,0' + (rgbaShade / 100) + ')';
        rgbaBlack.background['bg-black-alpha-' + rgbaShade] = 'rgba(0,0,0' + (rgbaShade / 100) + ')';
        rgbaBlack.border['border-black-alpha-' + rgbaShade] = 'rgba(0,0,0,' + (rgbaShade / 100) + ')';
    }

    //surfaces
    styleClass('color', texts, root, opts, true, true);
    styleClass('background-color', surfaces, root, opts, true, true);
    styleClass('border-color', borders, root, opts, true, true);
    
    //transparent
    styleClass('background-color', {'bg-transparent': 'transparent'}, root, opts, true, true);
    styleClass('border-color', {'border-transparent': 'transparent'}, root, opts, true, true);
    
    //palette
    styleClass('color', colored.texts, root, opts, true, true);
    styleClass('background-color', colored.background, root, opts, true, true);
    styleClass('border-color', colored.border, root, opts, true, true);
    
    //rgba
    styleClass('color', rgbaWhite.text, root, opts, true, true);
    styleClass('background-color', rgbaWhite.background, root, opts, true, true);
    styleClass('border-color', rgbaWhite.border, root, opts, true, true);
    styleClass('color', rgbaBlack.text, root, opts, true, true);
    styleClass('background-color', rgbaBlack.background, root, opts, true, true);
    styleClass('border-color', rgbaBlack.border, root, opts, true, true);

    //misc
    styleClass('color', misc.text, root, opts, true, true);
    styleClass('background-color', misc.background, root, opts, true, true);
    styleClass('border-color', misc.border, root, opts, true, true);
}