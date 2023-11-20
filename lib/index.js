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

// helpers
const utils = require('./src/utils');
const base = require('./src/base');

module.exports = (opts = {}) => {
    const rules = {
        align,
        all,
        animation,
        appearance,
        backdropfilter,
        background,
        border,
        bottom,
        box,
        color,
        column,
        cursor,
        display,
        fill,
        filter,
        flex,
        font,
        gap,
        height,
        justify,
        left,
        line,
        liststyle,
        margin,
        max,
        min,
        opacity,
        order,
        outline,
        overflow,
        padding,
        pointerevents,
        position,
        right,
        row,
        stroke,
        text,
        top,
        transform,
        transition,
        userselect,
        verticalalign,
        whitespace,
        width,
        zindex,
        formlayout,
        grid,
        variables
    };
    const helpers = {
        utils,
        base
    };

    return {
        postcssPlugin: 'postcss-primeflex',
        AtRule: {
            primeflex: (atRule) => {
                const _opts = { ...defaultOptions, ...opts };
                const postcssResolver = _opts.postcssResolver || {};
                const resolvers = { rules, helpers };

                Object.values(_opts.themes).forEach((theme) => {
                    theme['colors'] = { ...opts.colors, ...theme['colors'] };
                });

                const res = postcssResolver.before ? postcssResolver.before(atRule, _opts, resolvers) : undefined;

                res !== false && Object.values(resolvers.rules).forEach((rule) => rule(atRule, _opts));

                postcssResolver.after && postcssResolver.after(atRule, _opts, resolvers);

                atRule.remove();
            }
        }
    };
};

module.exports.postcss = true;
