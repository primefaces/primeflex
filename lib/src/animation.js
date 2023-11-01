const { AtRule, Rule } = require('postcss');
const { styleClass } = require('./utils');

const addAnimation = (anim, root, opts) => {
    const _important = opts.important;
    const prefix = opts.prefix.className;
    const keyframeName = 'pf-' + anim.name;

    let keyframe = new AtRule({ name: 'keyframes', params: keyframeName });
    let ruleFrom = new Rule({ selector: 'from' });

    for (let p in anim.from) {
        ruleFrom.append({ prop: p, value: anim.from[p], important: _important });
    }

    let ruleTo = new Rule({ selector: anim.toValue || 'to' });

    for (let p in anim.to) {
        ruleTo.append({ prop: p, value: anim.to[p], important: _important });
    }

    keyframe.append(ruleFrom);
    keyframe.append(ruleTo);
    root.before(keyframe);

    let animClass = new Rule({ selector: `.${prefix}${anim.name}` });

    animClass.append({ prop: 'animation-name', value: keyframeName, important: _important });
    animClass.append({ prop: 'animation-duration', value: anim.duration, important: _important });
    animClass.append({ prop: 'animation-timing', value: anim.timing, important: _important });

    if (anim.backfaceVisibility) {
        animClass.append({ prop: 'backface-visibility', value: anim.backfaceVisibility, important: _important });
    }

    root.before(animClass);
};

module.exports = (root, opts) => {
    const duration = {
        'animation-duration-100': '100ms',
        'animation-duration-150': '150ms',
        'animation-duration-200': '200ms',
        'animation-duration-300': '300ms',
        'animation-duration-400': '400ms',
        'animation-duration-500': '500ms',
        'animation-duration-1000': '1000ms',
        'animation-duration-2000': '2000ms',
        'animation-duration-3000': '3000ms'
    };

    const delay = {
        'animation-delay-100': '100ms',
        'animation-delay-150': '150ms',
        'animation-delay-200': '200ms',
        'animation-delay-300': '300ms',
        'animation-delay-400': '400ms',
        'animation-delay-500': '500ms',
        'animation-delay-1000': '1000ms'
    };

    const iteration = {
        'animation-iteration-1': '1',
        'animation-iteration-2': '2',
        'animation-iteration-infinite': 'infinite'
    };

    const timing = {
        'animation-linear': 'linear',
        'animation-ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'animation-ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'animation-ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    };

    const fill = {
        'animation-fill-none': 'none',
        'animation-fill-forwards': 'forwards',
        'animation-fill-backwards': 'backwards',
        'animation-fill-both': 'both'
    };

    addAnimation(
        {
            name: 'fadein',
            from: { opacity: '0' },
            to: { opacity: '1' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'fadeout',
            from: { opacity: '1' },
            to: { opacity: '0' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'scalein',
            from: { opacity: '0', transform: 'scaleY(0.8)', transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)' },
            to: { opacity: '1', transform: 'scaleY(1)' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'slidedown',
            from: { 'max-height': '0' },
            to: { 'max-height': 'auto' },
            duration: '.45s',
            timing: 'ease-in-out'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'slideup',
            from: { 'max-height': '1000px' },
            to: { 'max-height': '0' },
            duration: '.45s',
            timing: 'cubic-bezier(0, 1, 0, 1)'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'fadeinleft',
            from: { opacity: '0', transform: 'translateX(-100%)', transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)' },
            to: { opacity: '1', transform: 'translateX(0%)' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'fadeoutleft',
            from: { opacity: '1', transform: 'translateX(0%)', transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)' },
            to: { opacity: '0', transform: 'transform: translateX(-100%)' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'fadeinright',
            from: { opacity: '0', transform: 'translateX(100%)', transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)' },
            to: { opacity: '1', transform: 'translateX(0%)' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'fadeoutright',
            from: { opacity: '1', transform: 'translateX(0%)', transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)' },
            to: { opacity: '0', transform: 'transform: translateX(100%)' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'fadeinup',
            from: { opacity: '0', transform: 'translateY(-100%)', transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)' },
            to: { opacity: '1', transform: 'translateY(0%)' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'fadeoutup',
            from: { opacity: '1', transform: 'translateY(0%)', transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)' },
            to: { opacity: '0', transform: 'translateY(-100%)' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'fadeindown',
            from: { opacity: '0', transform: 'translateY(100%)', transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)' },
            to: { opacity: '1', transform: 'translateY(0%)' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'fadeoutdown',
            from: { opacity: '1', transform: 'translateY(0%)', transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)' },
            to: { opacity: '0', transform: 'translateY(100%)' },
            duration: '.15s',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'animate-width',
            from: { width: '0' },
            to: { width: '100%' },
            duration: '1000ms',
            timing: 'linear'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'flip',
            from: { transform: 'perspective(2000px) rotateX(-100deg)' },
            to: { transform: 'perspective(2000px) rotateX(0)' },
            duration: '.15s',
            timing: 'linear',
            backfaceVisibility: 'visible'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'flipleft',
            from: { opacity: '0', transform: 'perspective(2000px) rotateY(-100deg)' },
            to: { opacity: '1', transform: 'perspective(2000px) rotateY(0)' },
            duration: '.15s',
            timing: 'linear',
            backfaceVisibility: 'visible'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'flipright',
            from: { opacity: '0', transform: 'perspective(2000px) rotateY(100deg)' },
            to: { opacity: '1', transform: 'perspective(2000px) rotateY(0)' },
            duration: '.15s',
            timing: 'linear',
            backfaceVisibility: 'visible'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'flipup',
            from: { opacity: '0', transform: 'perspective(2000px) rotateX(-100deg)' },
            to: { opacity: '1', transform: 'perspective(2000px) rotateX(0)' },
            duration: '.15s',
            timing: 'linear',
            backfaceVisibility: 'visible'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'zoomin',
            from: { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
            to: { opacity: '1' },
            toValue: '50%',
            duration: '.15s',
            timing: 'linear',
            backfaceVisibility: 'visible'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'zoomindown',
            from: { opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)' },
            to: { opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)' },
            toValue: '60%',
            duration: '.15s',
            timing: 'linear',
            backfaceVisibility: 'visible'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'zoominleft',
            from: { opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)' },
            to: { opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)' },
            toValue: '60%',
            duration: '.15s',
            timing: 'linear',
            backfaceVisibility: 'visible'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'zoominright',
            from: { opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)' },
            to: { opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)' },
            toValue: '60%',
            duration: '.15s',
            timing: 'linear',
            backfaceVisibility: 'visible'
        },
        root,
        opts
    );

    addAnimation(
        {
            name: 'zoominup',
            from: { opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)' },
            to: { opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)' },
            toValue: '60%',
            duration: '.15s',
            timing: 'linear',
            backfaceVisibility: 'visible'
        },
        root,
        opts
    );

    styleClass('animation-duration', duration, root, opts, true);
    styleClass('animation-delay', delay, root, opts, true);
    styleClass('animation-iteration-count', iteration, root, opts, true);
    styleClass('animation-timing-function', timing, root, opts, true);
    styleClass('animation-fill-mode', fill, root, opts, true);
};
