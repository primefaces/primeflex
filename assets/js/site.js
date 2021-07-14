var PrimeFlex = {

    init: function () {
        this.documentation = document.getElementById('doc');
        this.copyButton = document.getElementById('copy-button');
        this.menuWrapper = document.getElementById('layout-menu-wrapper');
        this.menu = document.getElementById('layout-menu');
        this.mask = document.getElementById('layout-mask');
        this.mobileMenuButton = document.getElementById('mobile-button');
        this.mobileTopbarButton = document.getElementById('mobile-topbar-button');
        this.mobileTopbarMenu = document.getElementById('mobile-topbar-menu');

        this.bindEvents();

        var scrollPos = window.sessionStorage.getItem('scroll-pos');
        if (scrollPos) {
            this.menu.scrollTop = parseInt(scrollPos);
        }
    },

    bindEvents: function () {
        var $this = this;

        document.addEventListener("click", (e) => {
            if(!(this.menuWrapper.contains(e.target) || this.mobileMenuButton.contains(e.target))) {
                if (this.hasClass(this.menuWrapper, 'active')) {
                    this.removeClass(this.menuWrapper, 'active');
                    this.removeClass(this.mask, 'layout-mask-active');
                }
            }
            if(!(this.mobileTopbarMenu.contains(e.target) || this.mobileTopbarButton.contains(e.target))) {
                if (this.hasClass(this.mobileTopbarMenu, 'active')) {
                    this.removeClass(this.mobileTopbarMenu, 'active');
                    this.removeClass(this.mobileTopbarMenu, 'layout-mask-active');
                }
            }
        });
        
        this.menuWrapper.addEventListener('click', function() {
            window.sessionStorage.setItem('scroll-pos', $this.menu.scrollTop);
        });
    },

    onToggleMobileTopbarMenu: function (e) {
        var menubutton = e.currentTarget;
        var menu = menubutton.nextElementSibling;

        if (this.hasClass(menu, 'active')) {
            this.removeClass(menu, 'active');
        } else {
            this.addClass(menu, 'active');
        }
    },

    onToggleMobileMenu: function (e) {
        var menubutton = e.currentTarget;

        if (this.hasClass(this.menuWrapper, 'active')) {
            this.removeClass(this.menuWrapper, 'active');
            this.removeClass(this.mask, 'layout-mask-active');
        } else {
            this.addClass(this.menuWrapper, 'active');
            this.addClass(this.mask, 'layout-mask-active');
        }
    },

    copyText: function (e) {
        let confettiAmount = 60,
            confettiColors = [
                '#7d32f5',
                '#f6e434',
                '#63fdf1',
                '#e672da',
                '#295dfe',
                '#6e57ff'
            ],
            random = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min);
            },
            createConfetti = to => {
                let elem = document.createElement('i'),
                    set = Math.random() < 0.5 ? -1 : 1;
                elem.style.setProperty('--x', random(-260, 260) + 'px');
                elem.style.setProperty('--y', random(-160, 160) + 'px');
                elem.style.setProperty('--r', random(0, 360) + 'deg');
                elem.style.setProperty('--s', .1);
                elem.style.setProperty('--b', confettiColors[random(0, 5)]);
                to.appendChild(elem);
            };

        if (!this.copyButton.classList.contains('animation')) {
            this.copyButton.classList.add('animation');
            for (let i = 0; i < confettiAmount; i++) {
                createConfetti(this.copyButton);
            }
            setTimeout(() => {
                this.copyButton.classList.add('confetti');
                setTimeout(() => {
                    this.copyButton.querySelectorAll('i').forEach(i => i.remove());
                }, 500);
            }, 50);
        } else {
            this.copyButton.classList.remove('animation', 'confetti');
        }

        setTimeout(() => {
            this.copyButton.classList.remove('animation', 'confetti');
        }, 650);

        var copyText = e.currentTarget.previousElementSibling;
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand('copy');

        copyText.style.visibility = 'hidden';
        copyText.previousElementSibling.style.display = 'block';
    },

    refreshCodeHighlight: function () {
        var codes = this.documentation.querySelectorAll('code');
        for (var i = 0; i < codes.length; i++) {
            Prism.highlightElement(codes[i]);
        }
    },

    removeActiveClass: function () {
        this.removeClass(this.menuWrapper.querySelector('.active'), 'active');
    },

    hasClass: function (element, className) {
        if (element) {
            if (element.classList)
                return element.classList.contains(className);
            else
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    },

    addClass: function (element, className) {
        if (element) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        }
    },

    removeClass: function (element, className) {
        if (element) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
}

PrimeFlex.init();

