const colors = require('./src/colors');
const all = require('./src/all');
const grid = require('./src/grid');
const formlayout = require('./src/formlayout');
const display = require('./src/display');
const defaultOptions = require('./src/options');
const typography = require('./src/typography');
const flexbox = require('./src/flexbox');
const gap = require('./src/gap');
const padding = require('./src/padding');
const margin = require('./src/margin');
const elevation = require('./src/elevation');
const border = require('./src/border');
const borderradius = require('./src/borderradius');
const width = require('./src/width');
const height = require('./src/height');
const image = require('./src/image');
const position = require('./src/position');
const overflow = require('./src/overflow');
const zindex = require('./src/zindex');
const userselect = require('./src/userselect');
const liststyle = require('./src/liststyle');
const misc = require('./src/misc');
const transition = require('./src/transition');
const transform = require('./src/transform');
const animation = require('./src/animation');
const variables = require('./src/variables');
const filters = require('./src/filters');
const outline = require('./src/outline');
const svg = require('./src/svg');

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-primeflex',
        AtRule: {
            primeflex: (atRule) => {
                const _opts = { ...defaultOptions, ...opts };

                all(atRule, _opts);
                grid(atRule, _opts);
                colors(atRule, _opts);
                formlayout(atRule, _opts);
                display(atRule, _opts);
                typography(atRule, _opts);
                flexbox(atRule, _opts);
                gap(atRule, _opts);
                padding(atRule, _opts);
                margin(atRule, _opts);
                elevation(atRule, _opts);
                border(atRule, _opts);
                borderradius(atRule, _opts);
                width(atRule, _opts);
                height(atRule, _opts);
                position(atRule, _opts);
                overflow(atRule, _opts);
                zindex(atRule, _opts);
                image(atRule, _opts);
                userselect(atRule, _opts);
                liststyle(atRule, _opts);
                misc(atRule, _opts);
                transition(atRule, _opts);
                transform(atRule, _opts);
                animation(atRule, _opts);
                filters(atRule, _opts);
                outline(atRule, _opts);
                svg(atRule, _opts);
                variables(atRule, _opts);
                atRule.remove();
            }
        }
    };
};

module.exports.postcss = true;
