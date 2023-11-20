const align = require('./src/align');
const all = require('./src/all');
const animation = require('./src/animation');
const appearance = require('./src/appearance');
const backdropfilter = require('./src/backdropfilter');
const background = require('./src/background');
const border = require('./src/border');
const bottom = require('./src/bottom');
const box = require('./src/box');
const color = require('./src/color');
const column = require('./src/column');
const cursor = require('./src/cursor');
const display = require('./src/display');
const fill = require('./src/fill');
const filter = require('./src/filter');
const flex = require('./src/flex');
const font = require('./src/font');
const gap = require('./src/gap');
const height = require('./src/height');
const justify = require('./src/justify');
const left = require('./src/left');
const line = require('./src/line');
const liststyle = require('./src/liststyle');
const margin = require('./src/margin');
const max = require('./src/max');
const min = require('./src/min');
const opacity = require('./src/opacity');
const order = require('./src/order');
const outline = require('./src/outline');
const overflow = require('./src/overflow');
const padding = require('./src/padding');
const pointerevents = require('./src/pointerevents');
const position = require('./src/position');
const right = require('./src/right');
const row = require('./src/row');
const stroke = require('./src/stroke');
const text = require('./src/text');
const top = require('./src/top');
const transform = require('./src/transform');
const transition = require('./src/transition');
const userselect = require('./src/userselect');
const verticalalign = require('./src/verticalalign');
const whitespace = require('./src/whitespace');
const width = require('./src/width');
const zindex = require('./src/zindex');

// misc
const formlayout = require('./src/formlayout');
const grid = require('./src/grid');

// options
const defaultOptions = require('./src/options');
const variables = require('./src/variables');

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-primeflex',
        AtRule: {
            primeflex: (atRule) => {
                const _opts = { ...defaultOptions, ...opts };

                // @todo
                Object.values(_opts.themes).forEach((theme) => {
                    theme['colors'] = { ..._opts.colors, ...theme['colors'] };
                });

                align(atRule, _opts);
                all(atRule, _opts);
                animation(atRule, _opts);
                appearance(atRule, _opts);
                backdropfilter(atRule, _opts);
                background(atRule, _opts);
                border(atRule, _opts);
                bottom(atRule, _opts);
                box(atRule, _opts);
                color(atRule, _opts);
                column(atRule, _opts);
                cursor(atRule, _opts);
                display(atRule, _opts);
                fill(atRule, _opts);
                filter(atRule, _opts);
                flex(atRule, _opts);
                font(atRule, _opts);
                gap(atRule, _opts);
                height(atRule, _opts);
                justify(atRule, _opts);
                left(atRule, _opts);
                line(atRule, _opts);
                liststyle(atRule, _opts);
                margin(atRule, _opts);
                max(atRule, _opts);
                min(atRule, _opts);
                opacity(atRule, _opts);
                order(atRule, _opts);
                outline(atRule, _opts);
                overflow(atRule, _opts);
                padding(atRule, _opts);
                pointerevents(atRule, _opts);
                position(atRule, _opts);
                right(atRule, _opts);
                row(atRule, _opts);
                stroke(atRule, _opts);
                text(atRule, _opts);
                top(atRule, _opts);
                transform(atRule, _opts);
                transition(atRule, _opts);
                userselect(atRule, _opts);
                verticalalign(atRule, _opts);
                whitespace(atRule, _opts);
                width(atRule, _opts);
                zindex(atRule, _opts);
                formlayout(atRule, _opts);
                grid(atRule, _opts);
                variables(atRule, _opts);

                (_opts.plugins || []).forEach((plugin = []) => {
                    plugin[0](atRule, _opts, plugin[1]);
                });

                atRule.remove();
            }
        }
    };
};

module.exports.postcss = true;
