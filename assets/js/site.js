var PrimeFlex = {

    init: function () {
        this.documentation = document.getElementById('doc');
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

        window.addEventListener('click', function(e){
            if(!($this.menuWrapper.contains(e.target) || $this.mobileMenuButton.contains(e.target))) {
                if ($this.hasClass($this.menuWrapper, 'active')) {
                    $this.removeClass($this.menuWrapper, 'active');
                    $this.removeClass($this.mask, 'layout-mask-active');
                }
            }
            if(!($this.mobileTopbarMenu.contains(e.target) || $this.mobileTopbarButton.contains(e.target))) {
                if ($this.hasClass($this.mobileTopbarMenu, 'active')) {
                    $this.removeClass($this.mobileTopbarMenu, 'active');
                    $this.removeClass($this.mobileTopbarMenu, 'layout-mask-active');
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
        if (this.hasClass(this.menuWrapper, 'active')) {
            this.removeClass(this.menuWrapper, 'active');
            this.removeClass(this.mask, 'layout-mask-active');
        } else {
            this.addClass(this.menuWrapper, 'active');
            this.addClass(this.mask, 'layout-mask-active');
        }
    },

    copyText: function (e) {
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

